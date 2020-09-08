import { Component, OnInit } from '@angular/core';

import { Dog } from 'src/app/shared/models';
import { PageComponent } from 'src/app/shared/components/base';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.scss'],
})
export class AdoptionPageComponent extends PageComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(title: Title) {
    super(title, 'Усиновлення');
  }

  ngOnInit(): void {
    // TODO: get some real data
    const male: Dog = {
      id: '1232fafa-14124-gsaga-12e21w',
      name: 'Кекс',
      age: 4,
      gender: 'male',
      imageUrl: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
    };
    const female: Dog = {
      id: '1232fafa-14124-gsaga-12e21w',
      name: 'Cookie',
      age: 1.5,
      gender: 'female',
      imageUrl:
        'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
    };
    this.dogs = [male, male, female, male, female, female];
  }
}
