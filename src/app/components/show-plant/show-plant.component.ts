import { Component, OnInit } from '@angular/core';
import { MatSnackBarContainer } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/interfaces/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-show-plant',
  templateUrl: './show-plant.component.html',
  styleUrls: ['./show-plant.component.css']
})
export class ShowPlantComponent implements OnInit {
  id: number;
  plant!: Plant;

  constructor(private _plantService: PlantService,
    private plaRoute: ActivatedRoute) {
    this.id = parseInt(this.plaRoute.snapshot.paramMap.get('id')!);
  }

  ngOnInit() {
    this.getPlant();
  }

  getPlant() {
    this._plantService.getPlant(this.id).subscribe(data => {
      this.plant = data;
    })
  }
}
