import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, ModelCreateUpdatePayload } from './model';
import { Brand, BrandCreateUpdatePayload } from './brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7265/api';


  constructor(private http: HttpClient) { }

  createBrand(brandData: BrandCreateUpdatePayload): Observable<Brand> {
    return this.http.post<Brand>(`${this.apiUrl}/BikeBrand`, brandData);
  }

  getBrands() {
    return this.http.get(`${this.apiUrl}/BikeBrand`);
  }

  getBrandById(id: string): Observable<Brand> {
    return this.http.get<Brand>(`${this.apiUrl}/BikeBrand/${id}`);
  }

  updateBrand(id: string, brandData: BrandCreateUpdatePayload): Observable<Brand> {
    return this.http.put<Brand>(`${this.apiUrl}/BikeBrand/${id}`, brandData);
  }

  deleteBrand(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/BikeBrand/${id}`);
  }

  // ----- Model Endpoints -----

  createModel(modelData: ModelCreateUpdatePayload): Observable<Model> {
    return this.http.post<Model>(`${this.apiUrl}/BikeModel`, modelData);
  }

  getModelsByBrandId(brandId: string): Observable<Model[]> {
    return this.http.get<Model[]>(`${this.apiUrl}/BikeModel/brand/${brandId}`);
  }

  getAllModels(): Observable<Model[]> {
    return this.http.get<Model[]>(`${this.apiUrl}/BikeModel`);
  }

  getModelsAscendingPrice(): Observable<Model[]> {
    return this.http.get<Model[]>(`${this.apiUrl}/BikeModel/ascending-price`);
  }

  updateModel(id: string, modelData: ModelCreateUpdatePayload): Observable<Model> {
    return this.http.put<Model>(`${this.apiUrl}/BikeModel/${id}`, modelData);
  }

  deleteModel(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/BikeModel/${id}`);
  }
}
