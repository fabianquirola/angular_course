import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { LoginResponse } from '../models/login-response';
import { Credentials } from '../models/credentials';
import { UserProfile } from '../models/user-profile';

const URL = 'https://immense-forest-87642.herokuapp.com/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserProfileSubject: BehaviorSubject<UserProfile>;
  currentUserProfile: Observable<UserProfile>

  constructor(private http:HttpClient) {
    this.currentUserProfileSubject = new BehaviorSubject(null);
    this.currentUserProfile = this.currentUserProfileSubject.asObservable();
  }

  getCurrentUserProfile(): Observable<UserProfile> {
    return this.currentUserProfile;
  }

  register(user:User):Observable<User>{
    return this.http.post<User>(URL,user);
  }
// /:Observable<LoginResponse>
  login(credentials:Credentials){


    return this.http.post<LoginResponse>(`${URL}/login`,credentials)
    .subscribe((res:LoginResponse)=>{
      localStorage.setItem('TOKEN',res.token);

      //users/me
      this.http.get(`${URL}/me`)
      .subscribe((userProfile:UserProfile)=>{
        this.currentUserProfileSubject.next(userProfile);
      })

      //this.currentUserProfileSubject.next({id:'1',name:'user 1'});
    })
  }

  /*get(user:User):Observable<User>{
    return this.http.get<LoginResponse>(`${URL}/users/`,User)
  }*/
}
