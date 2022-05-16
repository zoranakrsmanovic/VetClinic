import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients: Client[] = [];
  private apiServerUrl= 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getClients():Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiServerUrl}/client/all`);
  }

  public addClient(client:Client):Observable<Client>{
    return this.http.put<Client>(`${this.apiServerUrl}/client/add`, client);
  }

  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiServerUrl}/client/findbyid/${id}`)
  }

  public updateClient(client:Client):Observable<Client>{
    return this.http.post<Client>(`${this.apiServerUrl}/client/update`, client);
  }

  public deleteClient(id:string):Observable<Object>{
    return this.http.delete(`${this.apiServerUrl}/client/delete/${id}`);
  }







  
}
