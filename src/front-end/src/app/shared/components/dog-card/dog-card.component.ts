import { Component, Input } from '@angular/core';

import { Dog } from '../../models';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss'],
})
export class DogCardComponent {
  @Input()
  dog: Dog;
  flipped: boolean;

  get imageUrl(): string {
    return `url(${this.dog.imageUrl})`;
  }

  get info() {
    return this.dog.gender === 'female'
      ? {
          status: 'danger',
          adoptionText: 'Удочерити',
          textStatus: 'text-danger',
        }
      : {
          status: 'primary',
          adoptionText: 'Усиновити',
          textStatus: 'text-primary',
        };
  }
  toggleView() {
    this.flipped = !this.flipped;
  }

  constructor() {}
}
