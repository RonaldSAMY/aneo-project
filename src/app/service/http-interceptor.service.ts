import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpEventType } from '@angular/common/http';

import { HttpRequest, HttpHandler,HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    
    let header = {}

    if(localStorage.getItem('connectedUser') != null) { // si l'user est connecté on ajoute le token dans l'header
        let token = JSON.parse(localStorage.getItem('connectedUser'))
      header = {
        'Authorization': 'Token '+token.token
      }
    } 
    
    req = req.clone({
      setHeaders : header
    })
    return next.handle(req)
  }

  constructor() { } 
}
