import { Component, OnInit } from '@angular/core';
import {faShoppingCart,faUser} from '@fortawesome/free-solid-svg-icons';
import { UserProfile } from '../../models/user-profile';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-util-nav',
  templateUrl: './util-nav.component.html',
  styleUrls: ['./util-nav.component.scss']
})
export class UtilNavComponent implements OnInit {

  isLoggedIn: boolean = false;


  userProfile: UserProfile;

  faShoppingCart=faShoppingCart;
  faUser=faUser;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  this.authService.getCurrentUserProfile().subscribe(userProfile=>{
    this.isLoggedIn = userProfile !== null;
    this.userProfile = userProfile;
  })
  /*this.authService.getCurrentUserProfile.subscribe(up=>{
    this.userProfile = up
  })*/
  }

}
