import { Component, OnInit } from '@angular/core';

import { Dog } from 'src/app/shared/models';
import { DogsService } from '../services/dogs.service';
import { PageComponent } from 'src/app/shared/components/base';
import { Router } from '@angular/router';
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

  constructor(title: Title, private dogsService: DogsService, private router: Router) {
    super(title, 'Dog');
  }

  ngOnInit(): void {
    // TODO: provide real dogId. MR
    this.addDisposable(this.dogsService.getDog('')
      .subscribe((dog) => {
        this.dog = dog;
        this.setTitle(dog.name);
      })
    );
  }

  adopt() {
    this.addDisposable(
      this.dogsService.adopt(this.dog.id)
        .subscribe(() => {
          alert('You are awesome! Thank you!');
          this.router.navigate(['adoption']);
        })
    );
  }

}
