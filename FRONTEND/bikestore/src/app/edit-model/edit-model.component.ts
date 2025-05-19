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
      }
    });
  }

  onSubmit(): void {
    if (this.modelForm.invalid) return;
    this.dataService.updateModel(this.modelId, this.modelForm.value).subscribe({
      next: () => this.router.navigate(['/models']),
    });

    this.router.navigate(['/models'])
  }
}
