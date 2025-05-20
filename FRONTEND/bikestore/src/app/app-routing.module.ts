import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBrandsComponent } from './list-brands/list-brands.component';
import { ListModelsComponent } from './list-models/list-models.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';
import { EditModelComponent } from './edit-model/edit-model.component';

const routes: Routes = [
  {path: '', redirectTo: '/brands', pathMatch: 'full'},
  {path: 'brands', component: ListBrandsComponent},
  {path: 'models', component: ListModelsComponent},
  {path: 'statistics', component: StatisticsComponent},
  { path: 'brands/edit/:id', component: EditBrandComponent},
  { path: 'models/edit/:id', component: EditModelComponent },
  { path: 'brands/new', component: EditBrandComponent },
  { path: 'models/new', component: EditModelComponent },
  {path: '**', redirectTo: '/brands', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
