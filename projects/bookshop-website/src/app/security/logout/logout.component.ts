import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserProfile } from '../../models/user-profile';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  isLoggedIn: boolean = false;


  userProfile: UserProfile;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getCurrentUserProfile().subscribe(userProfile=>{
      this.isLoggedIn = userProfile !== null;
      this.userProfile = userProfile;
  })}

  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
