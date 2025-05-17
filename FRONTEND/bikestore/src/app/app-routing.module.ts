import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBrandsComponent } from './list-brands/list-brands.component';
import { ListModelsComponent } from './list-models/list-models.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path: '', redirectTo: '/brands', pathMatch: 'full'},
  {path: 'brands', component: ListBrandsComponent},
  {path: 'models', component: ListModelsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: '**', redirectTo: '/brands', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
