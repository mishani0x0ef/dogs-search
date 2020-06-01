import { Observable, from } from 'rxjs';

import { Dog } from 'src/app/shared/models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor() { }

  getDogs(): Observable<Dog[]> {
    const male: Dog = {
      id: '1232fafa-14124-gsaga-12e21w',
      name: 'Кекс',
      age: 4,
      gender: 'male',
      imageUrl: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
      story: `A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
      Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the
      Milky Way.`
    };
    const female: Dog = {
      id: '1232fafa-14124-gsaga-12e21w',
      name: 'Cookie',
      age: 1.5,
      gender: 'female',
      imageUrl: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
      story: `A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
      Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the
      Milky Way.`
    };
    return from([[male, male, female, male, female, female]]);
  }

  getDog(id: string): Observable<Dog> {
    const male: Dog = {
      id: '1232fafa-14124-gsaga-12e21w',
      name: 'Кекс',
      age: 4,
      gender: 'male',
      imageUrl: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
      story: `A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
      Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the
      Milky Way.`
    };

    return from([male]);
  }

  adopt(id: string): Observable<any> {
    return from(['']);
  }

  // Ooooops! This method isn't working
  like(id: string): Observable<any> {
    return from(['']);
  }
}
