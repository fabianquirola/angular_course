import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminBooksService } from '../../services/admin-books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss']
})
export class AdminBookComponent implements OnInit {
  book$?: Observable<Book>;
  constructor(private route:ActivatedRoute,private adminBookService:AdminBooksService, private router: Router) { }

  book :Book = {
    title:'',
    author:'',
    price:0,
    reviews:0,
    rating:0
  };

  ngOnInit() {

    this.route.params.subscribe(params =>{
      const {id} = params;
      this.adminBookService.getBookById(parseInt(id)).subscribe((book:Book)=>{
        this.book=book;
      })



    });
  }


  create(form: NgForm){
    console.log('create')
    if(form.valid && !this.book.id){
      this.adminBookService.createBook(this.book).subscribe((book:Book)=>{
        console.log(book);
        this.router.navigate(['admin-books']);
      })}else if(form.valid && this.book.id){
        this.adminBookService.updateBookById(this.book).subscribe(()=>{
          //console.log(book);
          this.router.navigate(['admin-books']);
        })
      }
      console.log('executing service')
    }



}
