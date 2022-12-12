import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Plant } from 'src/app/interfaces/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'genus', 'scientificName', 'commonName', 'description', 'category', 'actions'];
  dataSource = new MatTableDataSource<Plant>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _plantService: PlantService) { }

  ngOnInit(): void {
    this.getPlants();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getPlants() {
    this.loading = true;
    this._plantService.getPlants().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
      console.log(data);
    })
  }

  deletePlant(id: number) {
    this.loading = true;
    this._plantService.deletePlant(id).subscribe(() => {
      this.messageSucess();
      this.loading = false;
      this.getPlants();
    });
  }

  messageSucess() {
    this._snackBar.open('The plant was successfully removed', '', {
      duration: 4000,
      horizontalPosition: 'right'
    });
  }
}
