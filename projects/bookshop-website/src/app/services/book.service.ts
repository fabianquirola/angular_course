import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';


const URL = 'http://immense-forest-87642.herokuapp.com/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }


  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(URL)
  }
}
