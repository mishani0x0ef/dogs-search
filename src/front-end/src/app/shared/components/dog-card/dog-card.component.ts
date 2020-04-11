import { Component, Input } from '@angular/core';

import { Dog } from '../../models';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent {
  @Input()
  dog: Dog;

  get imageUrl(): string {
    return `url(${this.dog.imageUrl})`;
  }

  constructor() { }
}
