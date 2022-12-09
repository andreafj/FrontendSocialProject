import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Plant } from 'src/app/interfaces/plant';

const Plant_List: Plant[] = [
  { name: "plantita", genus: "scue", scientificName: "des", commonName: "sunflower", description: "it is beatiful", category: 5 }
];

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'genus', 'scientificName', 'commonName', 'description', 'category', 'actions'];
  dataSource = new MatTableDataSource<Plant>(Plant_List);
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar) { }

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

  deletePlant() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open("La planta se elimino con exito", '', {
        duration: 4000,
        horizontalPosition: 'right'
      });
    }, 3000);

    this._snackBar.open('Plant eliminated succefull', '', {
      duration: 4000,
      horizontalPosition: 'right'
    });
  }
}
