import { Observable, from } from 'rxjs';

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

  adopt(id: string): Observable<any> {
    return this.http.post(`/api/dogs/${id}/adopt`, null);
  }

  // Ooooops! This method isn't working
  like(id: string): Observable<any> {
    return this.http.post(`/api/dogs/${id}/like`, null);
  }
}
