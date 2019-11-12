import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';


const URL = 'http://immense-forest-87642.herokuapp.com/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }


  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(URL)
  }

  getBookById(id:number):Observable<Book>{
    return this.http.get<Book>(`${URL}/${id}`);

  }
}
