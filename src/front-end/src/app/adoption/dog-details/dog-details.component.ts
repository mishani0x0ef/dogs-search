import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Dog } from 'src/app/shared/models';
import { DogsService } from '../services/dogs.service';
import { PageComponent } from 'src/app/shared/components/base';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent extends PageComponent implements OnInit {
  dog: Dog;

  get imageUrl(): string {
    return `url(${this.dog.imageUrl})`;
  }

  get info() {
    return this.dog?.gender === 'female'
      ? { status: 'danger', adoptionText: 'Удочерити', textStatus: 'text-danger' }
      : { status: 'primary', adoptionText: 'Усиновити', textStatus: 'text-primary' };
  }

  constructor(title: Title, private dogsService: DogsService, private router: Router, private route: ActivatedRoute) {
    super(title, 'Dog');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.dogsService.getDog(params.id)
        .subscribe((dog) => {
          this.dog = dog;
          this.setTitle(dog.name);
        });
    });
  }

  adopt() {
    this.dogsService.adopt(this.dog.id)
      .subscribe(() => {
        alert('You are awesome! Thank you!');
        this.router.navigate(['adoption']);
      });
  }

  like() {
    this.dogsService.like(this.dog.id)
      .subscribe(() => {
        alert('This dog is liked by you!');
        this.router.navigate(['adoption']);
      });
  }

}
