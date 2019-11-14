import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn:'root'
})

export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService){

  }

  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token =  this.authService.getToken();

    if(token){
      const newReq = req.clone({
        setHeaders:{
          'Authorization': `Bearer ${token}`
        }
      })
      return next.handle(newReq);
    }


    return next.handle(req);
  }
}
