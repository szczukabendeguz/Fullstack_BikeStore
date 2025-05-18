import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Model } from '../model';
import { Brand } from '../brand';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-models',
  standalone: false,
  templateUrl: './list-models.component.html',
  styleUrl: './list-models.component.scss'
})
export class ListModelsComponent implements OnInit {
  models: Model[] = [];
  allModels: Model[] = [];
  brands: Brand[] = [];
  selectedBrandId: string | null = null;
  loading = true;
  error: string | null = null;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.error = null;

    this.dataService.getModelsAscendingPrice().subscribe({
      next: (models) => {
        this.models = models;
        this.allModels = models;
        this.loading = false;
      },
      error: () => {
        this.error = 'Nem sikerült betölteni a modelleket.';
        this.loading = false;
      }
    });

    this.dataService.getBrands().subscribe({
      next: (brands: any) => {
        this.brands = brands;
        this.selectedBrandId = null;
        this.onBrandChange();
      }
    });
  }

  onBrandChange(): void {
    if (this.selectedBrandId === null) {
      this.models = this.allModels;
    } else {
      this.dataService.getModelsByBrandId(this.selectedBrandId).subscribe({
        next: (filteredModels) => this.models = filteredModels,
        error: () => this.error = 'Nem sikerült a szűrés.'
      });
    }
  }

  editModel(modelId: string): void {
    this.router.navigate(['/models/edit', modelId]);
  }

  deleteModel(modelId: any): void {
    if (confirm('Biztosan törölni szeretnéd ezt a modellt?')) {
      this.dataService.deleteModel(modelId).subscribe({
        next: () => this.loadData()
      });
    }
    this.loadData()
  }
}
