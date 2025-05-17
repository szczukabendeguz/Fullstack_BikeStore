import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListBrandsComponent } from './list-brands/list-brands.component';
import { ListModelsComponent } from './list-models/list-models.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';
import { EditModelComponent } from './edit-model/edit-model.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListBrandsComponent,
    ListModelsComponent,
    EditBrandComponent,
    EditModelComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
