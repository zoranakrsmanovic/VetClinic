import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    
  private loggedUser!: string;

  constructor(public http: HttpClient) { }
 
  public loginUserFromRemote(user: User):Observable<any>{
    
    return this.http.post<any>("http://localhost:8080/user/login", user).pipe(
      map(
       response => {
        sessionStorage.setItem('email', user.email);
        console.log(response);
       
       }
     )
 
    );
  
  
  }


  
 

 

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }
  
}
