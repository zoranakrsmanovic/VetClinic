import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Records } from './records';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets: Records[] = [];
  private apiServerUrl= 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getPets():Observable<Records[]>{
    return this.http.get<Records[]>(`${this.apiServerUrl}/pets/all`);
  }

  getPetsByOwnerId(ownerId: string): Observable<Records[]> {
    return this.http.get<Records[]>(`${this.apiServerUrl}/pets/findbyowner/${ownerId}`)
  }

  public addPet(pet:Records):Observable<Records>{
    return this.http.put<Records>(`${this.apiServerUrl}/pets/add`, pet);
  }

  getPetsById(id: string): Observable<Records> {
    return this.http.get<Records>(`${this.apiServerUrl}/pets/findbyid/${id}`)
  }

  public updatePet(pet:Records):Observable<Records>{
    return this.http.post<Records>(`${this.apiServerUrl}/pets/update`, pet);
  }

  public deletePet(id:string):Observable<Object>{
    return this.http.delete(`${this.apiServerUrl}/pets/delete/${id}`);
  }


  
}
