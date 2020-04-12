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
    super(title, 'Усиновлення');
  }

  ngOnInit(): void {
    // TODO: get some real data
    const male: Dog = {
      id: '1232fafa-14124-gsaga-12e21w',
      name: 'Кекс',
      age: 4,
      gender: 'male',
      imageUrl: 'https://instagram.flwo1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/83996290_102462877949490_6913145271293721410_n.jpg?_nc_ht=instagram.flwo1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ytyVhp5qGKMAX_BcdsL&oh=3286bbe231b4344b537253f955f959d3&oe=5EBE1E1B'
    };
    const female: Dog = {
      id: '1232fafa-14124-gsaga-12e21w',
      name: 'Cookie',
      age: 1.5,
      gender: 'female',
      imageUrl: 'https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/89291781_3054515121277323_7743920107356684288_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=Kv_AWVpjVSsAX9LiWJw&_nc_ht=scontent.flwo1-1.fna&oh=a869745290ee39a44a362231c6bcaffa&oe=5EBA6424'
    };
    this.dogs = [male, male, female, male, female, female];
  }
}
