import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
          .pipe(
              retry(3),
              catchError((error: HttpErrorResponse) => {
                  let errorMessage = '';
                  if (error.error instanceof ErrorEvent) {
                      errorMessage = `Error: ${error.error.message}`;
                  } else {
                      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                  }
                  window.alert(errorMessage);
                  this.router.navigate(['error-404']);
                  return throwError(errorMessage);
              })
        );
  }
}
