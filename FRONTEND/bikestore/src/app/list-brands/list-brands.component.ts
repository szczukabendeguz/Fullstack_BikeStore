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


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
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
      },
    });
  }

  deleteBrand(id: any) {
  if (confirm('Biztosan törölni szeretnéd ezt a márkát?')) {
    this.dataService.deleteBrand(id).subscribe({
      next: () => this.loadBrands(),
    });
  }
}

}
