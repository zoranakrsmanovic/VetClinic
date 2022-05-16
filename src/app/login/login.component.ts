import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg = '';
  user = new User();
  invalidLogin = false;
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response revieved");
        this.router.navigate(['/home'])
        this.invalidLogin = false;
    })
    
  


}}
