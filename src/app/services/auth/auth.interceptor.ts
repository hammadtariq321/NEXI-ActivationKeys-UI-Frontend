import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('userToken');
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization", "Token " + token)
      });

      return next.handle(cloned)
    }
    return next.handle(request);
  }
}
