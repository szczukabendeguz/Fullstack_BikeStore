import { Component, OnInit } from '@angular/core';
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
export class EditBrandComponent implements OnInit{
  brandForm!: FormGroup;
  brandId!: string;
  loading = true;
  error: string | null = null;

  constructor(
    public route: ActivatedRoute,
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.brandId = this.route.snapshot.paramMap.get('id')!;
    this.brandForm = this.fb.group({
      brandName: ['', Validators.required],
      location: ['', Validators.required],
      logoUrl: ['']
    });

    this.dataService.getBrandById(this.brandId).subscribe({
      next: (brand : Brand) => {
        this.brandForm.patchValue(brand);
        this.loading = false;
      },
      error: () => {
        this.error = 'Nem sikerült betölteni az adatokat.';
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.brandForm.invalid) return;

    this.dataService.updateBrand(this.brandId, this.brandForm.value).subscribe({
      next: () => this.router.navigate(['/brands']),
      error: () => this.error = 'Nem sikerült frissíteni a márkát.'
    });
  }
}
