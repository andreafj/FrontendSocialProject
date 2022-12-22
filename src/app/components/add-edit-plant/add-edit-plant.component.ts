import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/interfaces/plant';
import { CategoryService } from 'src/app/services/category.service';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-add-edit-plant',
  templateUrl: './add-edit-plant.component.html',
  styleUrls: ['./add-edit-plant.component.css']
})
export class AddEditPlantComponent implements OnInit {
  loading: boolean = false;
  formPlant: FormGroup;
  id: number;
  formType: string = 'Add plant'
  listCategory :any[];
  cateId:number;
  constructor(private fb: FormBuilder,
    private _plantService: PlantService,
    private _categoryService: CategoryService,
    private router: Router,
    private infoRoute: ActivatedRoute) {
      this.listCategory=[];
      this.cateId=1;
    this.formPlant = this.fb.group({
      name: ['', Validators.required],
      genus: ['', Validators.required],
      scientificName: ['', Validators.required],
      commonName: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      //selectForm: ['', Validators.required]
    })

    this.id = Number(this.infoRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.id != 0) {
      this.formType = 'Edit Plant';
      this.getPlant(this.id);
    }
    this._categoryService.getCategory().subscribe({
      next:(data) => {
        
        this.listCategory = data;
        
      },
      error: (error) =>{
        alert('Comuniquese con el provedor');
      }
    });
  }

  getPlant(id: number) {
    this._plantService.getPlant(id).subscribe(data => {
      this.formPlant.setValue({
        name: data.name,
        genus: data.genus,
        scientificName: data.scientificName,
        commonName: data.commonName,
        description: data.description,
        categoryId: data.categoryId,
      })
    })
  }
  setCategoty(id:number){
    this.cateId=id;
    console.log(this.cateId);
  }
  addEditPlant() {
    console.log("add edit plant")
    //Armamos el objeto

    const plant: Plant = {
      name: this.formPlant.value.name,
      genus: this.formPlant.value.genus,
      scientificName: this.formPlant.value.scientificName,
      commonName: this.formPlant.value.commonName,
      description: this.formPlant.value.description,
      categoryId: this.formPlant.value.categoryId
    }
    console.log('locoefe');
    console.log(plant);
    if (this.id != 0) {
      plant.id = this.id;
      this.editPlant(this.id, plant);
    } else {
      this.addPlant(plant);
    }
  }

  editPlant(id: number, plant: Plant) {
    this._plantService.updatePlant(id, plant).subscribe(() => {
      this.router.navigate(['/plantList']);
    })
  }

  addPlant(plant: Plant) {
    //Send objet to Backend
    this._plantService.addPlant(plant).subscribe(data => {
      console.log(data);
      this.router.navigate(['/plantList']);
    })
  }

}
