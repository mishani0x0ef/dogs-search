import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Dog } from 'src/app/shared/models';
import { DogsService } from '../services/dogs.service';
import { PageComponent } from 'src/app/shared/components/base';
import { Title } from '@angular/platform-browser';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
    selector: 'app-dog-details',
    templateUrl: './dog-details.component.html',
    styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent extends PageComponent implements OnInit {
    dog: Dog;
    lat: number;
    long: number;
    images: GalleryItem[];
    dogImage: string;


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
            this.lat = dog.location.lat;
            this.long = dog.location.long;
            this.dogImage = this.dog.imageUrl;
            this.images = [
            new ImageItem({ src: this.dogImage, }),
            ];
        });
    });
    // Set gallery items array
  }

  adopt() {
    this.dogsService.adopt(this.dog.id)
        .subscribe(() => {
            console.log(this.dog.id);
            alert('You are awesome! Thank you!');
            this.router.navigate(['adoption']);
        });
  }
    // editInfo() {
    //     this.router.navigate(['adoption/dog-edit/:id']);
    // }

  like() {
    this.dogsService.like(this.dog.id)
      .subscribe(() => {
        alert('This dog is liked by you!');
        this.router.navigate(['adoption']);
      });
  }

}
