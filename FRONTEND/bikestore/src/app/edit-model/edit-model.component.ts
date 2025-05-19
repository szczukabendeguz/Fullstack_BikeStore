// edit-model.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ModelCreateUpdatePayload, Model } from '../model';
import { Brand } from '../brand';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-model',
  standalone: false,
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss']
})
export class EditModelComponent implements OnInit {
  modelForm!: FormGroup;
  brands: Brand[] = [];
  modelId!: string;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.modelId = this.route.snapshot.paramMap.get('id')!;

    this.modelForm = this.fb.group({
      brandId: [null, Validators.required],
      modelName: [null, Validators.required],
      frontTravel: [0, [Validators.required, Validators.min(0)]],
      backTravel: [0, [Validators.required, Validators.min(0)]],
      askingPrice: [0, [Validators.required, Validators.min(0)]]
    });

    this.loadInitialData();
  }

  loadInitialData(): void {
    this.dataService.getBrands().subscribe({
      next: (brands: any) => this.brands = brands,
      error: () => this.error = 'Nem sikerült betölteni a márkákat.'
    });

    this.dataService.getModelById(this.modelId).subscribe({
      next: (model) => {
        this.modelForm.patchValue({
          brandId: model.brandId,
          modelName: model.modelName,
          frontTravel: model.frontTravel,
          backTravel: model.backTravel,
          askingPrice: model.askingPrice
        });
        this.loading = false;
      },
      error: () => {
        this.error = 'Nem sikerült betölteni a modellt.';
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.modelForm.invalid) return;

    const updatedModel: ModelCreateUpdatePayload = {
      id: this.modelId,
      ...this.modelForm.value
    };

    this.dataService.updateModel(this.modelId, updatedModel).subscribe({
      next: () => this.router.navigate(['/models']),
      error: () => this.error = 'Nem sikerült frissíteni a modellt.'
    });
  }
}
