import { Component, OnInit } from '@angular/core';

import { Dog } from 'src/app/shared/models';
import { PageComponent } from 'src/app/shared/components/base';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.scss']
})
export class AdoptionPageComponent extends PageComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(title: Title) {
    super(title, 'Adoption');
  }

  ngOnInit(): void {
    // TODO: get some real data
    const dog: Dog = {
      id: '1232fafa-14124-gsaga-12e21w',
      name: 'Cookie',
      age: 1.5,
      gender: 'female',
    };
    this.dogs = [dog, dog, dog, dog, dog, dog, dog];
  }
}
