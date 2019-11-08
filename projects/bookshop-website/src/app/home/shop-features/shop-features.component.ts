import { Component, OnInit } from '@angular/core';
import {faTruckMoving,faCreditCard,faTags,faShieldAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop-features',
  templateUrl: './shop-features.component.html',
  styleUrls: ['./shop-features.component.scss']
})
export class ShopFeaturesComponent implements OnInit {

  features =[
    {icon:faTruckMoving,title:'quick delivery',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {icon:faCreditCard,title:'pay with easy',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {icon:faTags,title:'best deal',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {icon:faShieldAlt,title:'secured payment',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
