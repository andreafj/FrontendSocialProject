import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditPlantComponent } from './components/add-edit-plant/add-edit-plant.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { ShowPlantComponent } from './components/show-plant/show-plant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AddEditPlantComponent,
    PlantListComponent,
    ShowPlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
