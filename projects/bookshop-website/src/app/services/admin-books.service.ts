import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

const URL = 'http://immense-forest-87642.herokuapp.com/books';

@Injectable({
  providedIn: 'root'
})
export class AdminBooksService {


  constructor(private http:HttpClient) { }


  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(URL)
  }

  getBookById(id:number):Observable<Book>{
    return this.http.get<Book>(`${URL}/${id}`);

  }
  createBook(book:Book):Observable<Book>{
    return this.http.post<Book>(URL,book);
  }


  deleteBookById(id:number):Observable<void>{
    return this.http.delete<void>(`${URL}/${id}`);
  }

  updateBookById(book:Book):Observable<void>{
    return this.http.put<void>(`${URL}/${book.id}`,book);
  }

}
