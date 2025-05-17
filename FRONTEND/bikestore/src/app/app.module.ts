import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListBarndsComponent } from './list-barnds/list-barnds.component';
import { ListBrandsComponent } from './list-brands/list-brands.component';
import { ListModelsComponent } from './list-models/list-models.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';
import { EditModelComponent } from './edit-model/edit-model.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListBarndsComponent,
    ListBrandsComponent,
    ListModelsComponent,
    EditBrandComponent,
    EditModelComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
