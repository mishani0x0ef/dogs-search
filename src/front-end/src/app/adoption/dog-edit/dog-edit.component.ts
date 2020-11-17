import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Dog } from 'src/app/shared/models';
import { DogsService } from '../services/dogs.service';
import { PageComponent } from 'src/app/shared/components/base';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html',
  styleUrls: ['./dog-edit.component.scss']
})
export class DogEditComponent extends PageComponent implements OnInit {
    editDogInfoForm: FormGroup;
    dog: Dog;
    name: string;

    constructor(title: Title, private formBuilder: FormBuilder, private dogsService: DogsService, private route: ActivatedRoute) {
        super(title, 'Dog');
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
          this.dogsService.getDog(params.id)
                .subscribe((dog) => {
                    this.dog = dog;
                    this.setTitle(dog.name);
                    this.name = dog.name;
                    this.editDogInfoForm.patchValue({
                        name: this.dog.name
                    });
                });
        });

        this.editDogInfoForm = this.formBuilder.group({
            name: '',
        });
  }

  submit() {

  }

}
