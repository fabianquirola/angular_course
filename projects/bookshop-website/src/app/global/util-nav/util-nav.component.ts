import { Component, OnInit } from '@angular/core';
import {faShoppingCart,faUser} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-util-nav',
  templateUrl: './util-nav.component.html',
  styleUrls: ['./util-nav.component.scss']
})
export class UtilNavComponent implements OnInit {
  faShoppingCart=faShoppingCart;
  faUser=faUser;
  constructor() { }

  ngOnInit() {
  }

}
