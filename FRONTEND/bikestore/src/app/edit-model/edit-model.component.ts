import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../brand';
import { Model } from '../model';

@Component({
  selector: 'app-edit-model',
  standalone: false,
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss']
})
export class EditModelComponent implements OnInit {
  modelForm!: FormGroup;
  brands: Brand[] = [];
  modelId!: string | null;
  isNew = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.modelId = this.route.snapshot.paramMap.get('id');
    this.isNew = !this.modelId || this.modelId === 'new';

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
    });

    if (!this.isNew && this.modelId) {
      this.dataService.getModelById(this.modelId).subscribe({
        next: (model: Model) => {
          this.modelForm.patchValue({
            brandId: model.brandId,
            modelName: model.modelName,
            frontTravel: model.frontTravel,
            backTravel: model.backTravel,
            askingPrice: model.askingPrice
          });
        }
      });
    }
  }

  onSubmit(): void {
    if (this.modelForm.invalid || !this.modelForm.value.brandId) {
      this.modelForm.markAllAsTouched();
      return;
    }

    if (this.isNew) {
      this.dataService.createModel(this.modelForm.value).subscribe({
        next: () => this.router.navigate(['/models']),
        error: err => alert('Hiba a mentéskor: ' + (err.error?.message || err.message))
      });
    } else if (this.modelId) {
      this.dataService.updateModel(this.modelId, this.modelForm.value).subscribe({
        next: () => this.router.navigate(['/models']),
        error: err => alert('Hiba a frissítéskor: ' + (err.error?.message || err.message))
      });
    }
  }
}