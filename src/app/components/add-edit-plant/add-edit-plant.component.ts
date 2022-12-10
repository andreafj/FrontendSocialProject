import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plant } from 'src/app/interfaces/plant';

@Component({
  selector: 'app-add-edit-plant',
  templateUrl: './add-edit-plant.component.html',
  styleUrls: ['./add-edit-plant.component.css']
})
export class AddEditPlantComponent implements OnInit {
  loading: boolean = false;
  formPlant: FormGroup

  constructor(private fb: FormBuilder) {
    this.formPlant = this.fb.group({
      name: ['', Validators.required],
      genus: ['', Validators.required],
      scientificName: ['', Validators.required],
      commonName: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  addPlant() {
    console.log("agregar mascota")
    const name = this.formPlant.value.name;

    //Armamos el objeto

    const plant: Plant = {
      name: this.formPlant.value.name,
      genus: this.formPlant.value.genus,
      scientificName: this.formPlant.value.scientificName,
      commonName: this.formPlant.value.commonName,
      description: this.formPlant.value.description,
      category: this.formPlant.value.category
    }
    console.log(plant)
  }

}
