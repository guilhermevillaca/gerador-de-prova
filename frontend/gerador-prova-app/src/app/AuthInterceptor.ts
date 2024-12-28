import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }

  getToken(): string | null {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      const parsed = JSON.parse(accessToken);
      return parsed.token; // Retorna apenas o valor do token
    }
    return null;
  }
}
