import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { AddEditPlantComponent } from './components/add-edit-plant/add-edit-plant.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { ShowPlantComponent } from './components/show-plant/show-plant.component';

const routes: Routes = [
  { path: '', redirectTo: 'plantList', pathMatch: 'full' },
  { path: 'plantList', component: PlantListComponent },
  { path: 'addPlant', component: AddEditPlantComponent },
  { path: 'showPlant/:id', component: ShowPlantComponent },
  { path: 'editPlant/:id', component: AddEditPlantComponent },
  { path: '**', redirectTo: 'plantList', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
