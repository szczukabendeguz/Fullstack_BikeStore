import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { Brand } from '../brand';
import { Model } from '../model';

@Component({
  selector: 'app-statistics',
  standalone: false,
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit {
  brandAverages: { brandName: string, avgPrice: number }[] = [];
  maxPrice = 1000;
  displayedBrands: { brandName: string, avgPrice: number }[] = [];
  screenWidth: number = window.innerWidth;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
    this.updateDisplayedBrands();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.updateDisplayedBrands();
  }

  private loadData(): void {
    this.dataService.getBrands().subscribe((brands: Brand[]) => {
      if (!brands || brands.length === 0) {
        this.brandAverages = [];
        this.maxPrice = 1000;
        this.updateDisplayedBrands();
        return;
      }

      this.brandAverages = brands.map(brand => ({
        brandName: brand.brandName!,
        avgPrice: brand.averageAskingPrice
      }));

      this.finalizeDataProcessing();
    });
  }

  private finalizeDataProcessing(): void {
    this.brandAverages.sort((a, b) => b.avgPrice - a.avgPrice);

    const maxAvg = this.brandAverages.length > 0
      ? Math.max(...this.brandAverages.map(b => b.avgPrice))
      : 0;
    this.maxPrice = Math.ceil(maxAvg / 1000) * 1000 || 1000;

    this.updateDisplayedBrands();
  }

  updateDisplayedBrands(): void {
    if (this.screenWidth < 500) {
      this.displayedBrands = this.brandAverages.slice(0, 2);
    } else if (this.screenWidth < 700) {
      this.displayedBrands = this.brandAverages.slice(0, 3);
    } else if (this.screenWidth < 1000) {
      this.displayedBrands = this.brandAverages.slice(0, 5);
    } else {
      this.displayedBrands = this.brandAverages.slice(0, 10);
    }
  }


  getBarHeight(price: number): string {
    const height = (price / this.maxPrice) * 100 * 3;
    console.log(`Brand avg price: ${price}, Scaled height: ${height}%`);
    return `${height}px`;
  }
}
