import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { INITIAL_BRANDS, INITIAL_MODELS } from './mock-data';
import { Brand } from './brand';
import { Model } from './model';

@Injectable()
export class DemoInterceptor implements HttpInterceptor {
  private readonly API_URL = 'https://localhost:7265/api';
  private readonly STORAGE_KEY_BRANDS = 'bikestore_brands';
  private readonly STORAGE_KEY_MODELS = 'bikestore_models';

  constructor() {
    this.initStorage();
  }

  private initStorage() {
    const existingBrands = localStorage.getItem(this.STORAGE_KEY_BRANDS);
    if (!existingBrands || JSON.parse(existingBrands).length < 5) {
      localStorage.setItem(this.STORAGE_KEY_BRANDS, JSON.stringify(INITIAL_BRANDS));
      localStorage.setItem(this.STORAGE_KEY_MODELS, JSON.stringify(INITIAL_MODELS));
    }
  }

  private getBrands(): Brand[] {
    const brands = JSON.parse(localStorage.getItem(this.STORAGE_KEY_BRANDS) || '[]');
    const models = this.getModels();
    
    // Calculate averageAskingPrice and modelCount dynamically
    return brands.map((brand: Brand) => {
      const brandModels = models.filter((m: Model) => m.brandId === brand.id);
      const total = brandModels.reduce((sum: number, m: Model) => sum + m.askingPrice, 0);
      return {
        ...brand,
        modelCount: brandModels.length,
        averageAskingPrice: brandModels.length > 0 ? Math.round(total / brandModels.length) : 0
      };
    });
  }

  private saveBrands(brands: Brand[]) {
    localStorage.setItem(this.STORAGE_KEY_BRANDS, JSON.stringify(brands));
  }

  private getModels(): Model[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY_MODELS) || '[]');
  }

  private saveModels(models: Model[]) {
    localStorage.setItem(this.STORAGE_KEY_MODELS, JSON.stringify(models));
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.startsWith(this.API_URL)) {
      return next.handle(request);
    }

    console.log('DemoInterceptor intercepting:', request.method, request.url);

    const urlParts = request.url.split('/');
    // https://localhost:7265/api/BikeBrand -> parts[4] is BikeBrand
    const resource = urlParts[4]; 
    const id = urlParts[5];

    let response: any;

    try {
      // BRANDS
      if (resource === 'BikeBrand') {
        if (request.method === 'GET') {
          if (id) {
            const brand = this.getBrands().find(b => b.id === id);
            response = brand ? new HttpResponse({ status: 200, body: brand }) : new HttpErrorResponse({ status: 404 });
          } else {
            response = new HttpResponse({ status: 200, body: this.getBrands() });
          }
        } else if (request.method === 'POST') {
          const newBrand = { ...request.body, id: Math.random().toString(36).substr(2, 9) };
          const brands = this.getBrands();
          brands.push(newBrand);
          this.saveBrands(brands);
          response = new HttpResponse({ status: 201, body: newBrand });
        } else if (request.method === 'PUT' && id) {
          let brands = this.getBrands();
          brands = brands.map(b => b.id === id ? { ...b, ...request.body } : b);
          this.saveBrands(brands);
          response = new HttpResponse({ status: 200, body: request.body });
        } else if (request.method === 'DELETE' && id) {
          let brands = this.getBrands();
          brands = brands.filter(b => b.id !== id);
          this.saveBrands(brands);
          response = new HttpResponse({ status: 204 });
        }
      }

      // MODELS
      if (resource === 'BikeModel') {
        if (request.method === 'GET') {
          if (id === 'brand' && urlParts[6]) {
            const brandId = urlParts[6];
            const models = this.getModels().filter(m => m.brandId === brandId);
            response = new HttpResponse({ status: 200, body: models });
          } else if (id === 'ascending-price') {
            const models = this.getModels().sort((a, b) => a.askingPrice - b.askingPrice);
            response = new HttpResponse({ status: 200, body: models });
          } else if (id) {
            const model = this.getModels().find(m => m.id === id);
            response = model ? new HttpResponse({ status: 200, body: model }) : new HttpErrorResponse({ status: 404 });
          } else {
            response = new HttpResponse({ status: 200, body: this.getModels() });
          }
        } else if (request.method === 'POST') {
          const newModel = { ...request.body, id: Math.random().toString(36).substr(2, 9) };
          const models = this.getModels();
          models.push(newModel);
          this.saveModels(models);
          response = new HttpResponse({ status: 201, body: newModel });
        } else if (request.method === 'PUT' && id) {
          let models = this.getModels();
          models = models.map(m => m.id === id ? { ...m, ...request.body } : m);
          this.saveModels(models);
          response = new HttpResponse({ status: 200, body: 'Updated' });
        } else if (request.method === 'DELETE' && id) {
          let models = this.getModels();
          models = models.filter(m => m.id !== id);
          this.saveModels(models);
          response = new HttpResponse({ status: 204 });
        }
      }

      if (response instanceof HttpErrorResponse) {
        return throwError(() => response);
      }

      return of(response).pipe(delay(500)); // Simulate network latency

    } catch (e) {
      return throwError(() => new HttpErrorResponse({ status: 500, statusText: 'Internal Error' }));
    }
  }
}
