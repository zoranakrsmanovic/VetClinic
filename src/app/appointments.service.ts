import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointments } from './appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  appointments: Appointments[] = [];
  private apiServerUrl= 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAppointments():Observable<Appointments[]>{
    return this.http.get<Appointments[]>(`${this.apiServerUrl}/appointments/all`);
  }

  getAppointmentsByDate(date: string): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(`${this.apiServerUrl}/appointments/find/${date}`)
  }

  public addAppointment(appointment:Appointments):Observable<Appointments>{
    return this.http.post<Appointments>(`${this.apiServerUrl}/appointments/add`, appointment);
  }
}
