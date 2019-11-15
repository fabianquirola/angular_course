import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBooksRoutingModule } from './admin-books-routing.module';
import { AdminBooksComponent } from './admin-books.component';
import { AdminBookComponent } from './admin-book/admin-book.component';
import { ItemAdminBookComponent } from './item-admin-book/item-admin-book.component';
import { RatingComponent } from '../books/rating/rating.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminBooksComponent, AdminBookComponent, ItemAdminBookComponent,RatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminBooksRoutingModule
  ]
})
export class AdminBooksModule { }
