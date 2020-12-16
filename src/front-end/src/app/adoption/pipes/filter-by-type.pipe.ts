import { Pipe, PipeTransform } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { Dog } from 'src/app/shared/models';


@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {
    dogs: Dog[] = [];
    constructor(private dogsService: DogsService) {}

    transform(value: any): any {


        return null;
    }

}
