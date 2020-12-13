import { Component, OnInit } from '@angular/core';

import { Dog } from 'src/app/shared/models';
import { DogsService } from '../services/dogs.service';
import { FilterService } from '../services/filter.service';
import { PageComponent } from 'src/app/shared/components/base';
import { Title } from '@angular/platform-browser';
import { FilterByTypePipe } from '../pipes/filter-by-type.pipe';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.scss'],
})
export class AdoptionPageComponent extends PageComponent implements OnInit {
    dogs: Dog[] = [];
    filter = 'all';


  constructor(title: Title, private dogsService: DogsService, private filterService: FilterService) {
    super(title, 'Усиновлення');
  }

  ngOnInit(): void {
    this.addDisposable(
        this.dogsService.getDogs()
            .subscribe((dogs) => this.dogs = dogs)
    );

    this.filterService.dogs.subscribe(x => this.dogs = x);
  }
}
