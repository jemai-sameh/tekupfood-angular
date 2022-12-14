import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from 'src/app/Model/authentication-response';



@Injectable({
  providedIn: 'root'
})
export class AuthIntercepterServiceService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authenticationResponse: AuthenticationResponse = {};
    if (localStorage.getItem("accesstoken")) {
      authenticationResponse = JSON.parse(localStorage.getItem("accesstoken") as string)
      req = req.clone({
        headers: new HttpHeaders({
          Authorization: "Bearer " + authenticationResponse.token
        })
      })
    }
    return next.handle(req)
  }

}
