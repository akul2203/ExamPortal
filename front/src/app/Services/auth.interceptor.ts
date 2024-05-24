import { HttpInterceptor,HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   
    constructor(private login:LoginService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      //add jwt token (local storage )request

      let authreq=req;
      const token=this.login.getToken();
      console.log("inside interceptor");
      if(token!=null)
      {
        authreq=authreq.clone({setHeaders:{ Authorization:`Bearer ${token}`},
        // authreq=authreq.clone({setParams:{ Authorization:`Bearer ${token}`},
    });

      }
      console.log(authreq);
      
      return next.handle(authreq);
    }
}

export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,

    },

];