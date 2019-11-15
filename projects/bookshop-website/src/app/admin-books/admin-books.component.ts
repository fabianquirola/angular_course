import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import {faShoppingCart,faUser} from '@fortawesome/free-solid-svg-icons';
import { AdminBooksService } from '../services/admin-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss']
})
export class AdminBooksComponent implements OnInit {

  faShoppingCart=faShoppingCart;
  faUser=faUser;

  books:Book[]=[];

  constructor(private adminBookService: AdminBooksService,private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    this.books = await this.adminBookService.getBooks().toPromise();
  }




  delete(id){
    console.log('delete')

      this.adminBookService.deleteBookById(id).subscribe(()=>{
        console.log('libro borrado');
        this.loadData();
      })
      console.log('executing service')


  }

}
