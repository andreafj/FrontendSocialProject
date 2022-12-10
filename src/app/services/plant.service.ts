import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from '../interfaces/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private myAppUrl: string = environment.endpoint
  private myApiUrl: string = 'api/plant/'
  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
