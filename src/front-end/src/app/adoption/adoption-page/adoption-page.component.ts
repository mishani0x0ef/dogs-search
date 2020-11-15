import { Component, OnInit } from '@angular/core';

import { Dog } from 'src/app/shared/models';
import { DogsService } from '../services/dogs.service';
import { PageComponent } from 'src/app/shared/components/base';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.scss'],
})
export class AdoptionPageComponent extends PageComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(title: Title, private dogsService: DogsService) {
    super(title, 'Усиновлення');
  }

  ngOnInit(): void {
    this.addDisposable(
      this.dogsService.getDogs()
        .subscribe((dogs) => this.dogs = dogs)
    );
  }
}
