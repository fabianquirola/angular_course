import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems =[
    {path:'/home',label:'Home'},
    {path:'/books',label:'Books'},
    {path:'/magazines',label:'Magazines'},
    {path:'/textbooks',label:'Textbooks'},
    {path:'/audiobooks',label:'Audiobooks'},
    {path:'/recomnmended',label:'Recommended'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
