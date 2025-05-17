import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Brand } from '../brand';

@Component({
  selector: 'app-list-brands',
  standalone: false,
  templateUrl: './list-brands.component.html',
  styleUrl: './list-brands.component.scss'
})
export class ListBrandsComponent implements OnInit {
  brands: Brand[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.loading = true;
    this.error = null;
    this.dataService.getBrands().subscribe({
      next: (data : any) => {
        this.brands = data.map((brand: any) => ({
          id: brand.id,
          brandName: brand.brandName,
          location: brand.location,
          averageAskingPrice: brand.averageAskingPrice,
          models: [],
          modelCount: 0
        }));
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Hiba történt a márkák betöltésekor. Kérjük, próbálja meg később.';
        console.error('Error fetching brands:', err);
        this.loading = false;
      }
    });
  }

  deleteBrand(id: any) {
  if (confirm('Biztosan törölni szeretnéd ezt a márkát?')) {
    this.dataService.deleteBrand(id).subscribe({
      next: () => this.loadBrands(),
      error: err => this.error = 'A törlés sikertelen volt.'
    });
  }
}

}
