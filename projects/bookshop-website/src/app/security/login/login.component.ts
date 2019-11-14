import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginResponse } from '../../models/login-response';
import { UserProfile } from '../../models/user-profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials : Credentials = {
    email:'',
    password:''
  };

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log('register')
    if(form.valid){

      this.authService.login(
        this.credentials
      ).subscribe((response:UserProfile)=>{
        console.log(response);
        this.router.navigate(['home']);
      });

      console.log('executing service')
    }

  }

}
