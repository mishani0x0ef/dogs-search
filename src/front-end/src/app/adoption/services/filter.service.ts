import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dog } from 'src/app/shared/models';
import { DogsService } from '../services/dogs.service';


@Injectable({
  providedIn: 'root'
})
export class FilterService {
    allPets: Dog[] = [];

    constructor(private dogsService: DogsService) { }

    private sendDogData = new BehaviorSubject<any>(this.allPets);
    dogs = this.sendDogData.asObservable();

    FilterByType(type) {
        if (type === 'all') {
            console.log('filter service');
            this.dogsService.getDogs()
                .subscribe(
                    (dogs) => this.allPets = dogs,
                    (err) => console.log(err),
                    () => this.sendDogData.next(this.allPets)
                );
        } else {
            this.dogsService.getDogs()
                .subscribe(
                    (dogs) => this.allPets = dogs.filter((pet) => pet.type === type),
                    (err) => console.log(err),
                    () => this.sendDogData.next(this.allPets)
                );
        }
    }

}
