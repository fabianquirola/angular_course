import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-item-admin-book',
  templateUrl: './item-admin-book.component.html',
  styleUrls: ['./item-admin-book.component.scss']
})
export class ItemAdminBookComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
