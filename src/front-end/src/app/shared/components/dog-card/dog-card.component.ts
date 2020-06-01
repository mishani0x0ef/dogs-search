import { Component, Input } from '@angular/core';

import { Dog } from '../../models';
import { Router } from '@angular/router';

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

  get info() {
    return this.dog.gender === 'female'
      ? { status: 'danger', adoptionText: 'Удочерити', textStatus: 'text-danger' }
      : { status: 'primary', adoptionText: 'Усиновити', textStatus: 'text-primary' };
  }

  constructor(private router: Router) { }

  openDetails() {
    this.router.navigateByUrl(`/adoption/${this.dog.id}`);
  }
}
