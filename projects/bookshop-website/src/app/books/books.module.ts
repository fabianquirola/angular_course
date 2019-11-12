import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { RatingComponent } from './rating/rating.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [BooksComponent, RatingComponent, BookComponent, BookDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
