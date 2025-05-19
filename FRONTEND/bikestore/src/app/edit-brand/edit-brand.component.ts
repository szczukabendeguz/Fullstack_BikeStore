import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Brand } from '../brand';

@Component({
  selector: 'app-edit-brand',
  standalone: false,
  templateUrl: './edit-brand.component.html',
  styleUrl: './edit-brand.component.scss'
})
export class EditBrandComponent {
  brandForm!: FormGroup;
  brandId!: string;

  constructor(
    public route: ActivatedRoute,
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.brandId = this.route.snapshot.paramMap.get('id')!;
    this.brandForm = this.fb.group({
      brandName: ['', Validators.required],
      location: ['', Validators.required],
      logoUrl: ['']
    });

    this.dataService.getBrandById(this.brandId).subscribe({
      next: (brand: Brand) => {
        this.brandForm.patchValue(brand);
      }
    });
  }

  onSubmit(): void {
    if (this.brandForm.invalid) {
      return;
    }

    this.dataService.updateBrand(this.brandId, this.brandForm.value).subscribe({
      next: () => this.router.navigate(['/brands'])
    });
  }
}
