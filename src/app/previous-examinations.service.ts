import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreviousExaminations } from './previousexaminations';

@Injectable({
  providedIn: 'root'
})
export class PreviousExaminationsService {

  clients: PreviousExaminations[] = [];
  private apiServerUrl= 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getExaminationsByPetId(petId: string): Observable<PreviousExaminations[]> {
    return this.http.get<PreviousExaminations[]>(`${this.apiServerUrl}/examinations/findbypet/${petId}`)
  }

  
  public addExamination(examination:PreviousExaminations):Observable<PreviousExaminations>{
    return this.http.put<PreviousExaminations>(`${this.apiServerUrl}/examinations/add`, examination);
  }


}
