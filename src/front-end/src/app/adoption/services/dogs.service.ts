import { Observable } from 'rxjs';
import { Severity, addBreadcrumb } from '@sentry/browser';

import { Dog } from 'src/app/shared/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>('/api/dogs');
  }

  getDog(id: string): Observable<Dog> {
    return this.http.get<Dog>(`/api/dogs/${id}`);
  }

  submitEditForm(editDogInfoForm: any): Observable<any>  {
      return this.http.put(`http://localhost:5000/dogs/${editDogInfoForm.value.id}`, editDogInfoForm.value);
  }

  // Ooooops! Dis methods aren't working
  adopt(id: string): Observable<any> {
    return this.http.post(`http://localhost:5000/dogs/${id}`, {like: 1});
  }

  like(id: string): Observable<any> {
    addBreadcrumb({
      category: 'action',
      message: `Attempt to like the dog with id ${id}`,
      level: Severity.Info
    });
    return this.http.post(`/api/dogs/${id}/like`, null);
  }


}
