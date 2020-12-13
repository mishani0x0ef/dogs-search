import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Dog } from 'src/app/shared/models';
import { DogsService } from '../services/dogs.service';
import { PageComponent } from 'src/app/shared/components/base';
import { imageLinkValidator } from '../../shared/validators/image-link.validator';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html',
  styleUrls: ['./dog-edit.component.scss']
})
export class DogEditComponent extends PageComponent implements OnInit {
    editDogInfoForm: FormGroup;
    dog: Dog;
    id: string;
    name: string;
    birthday: string;
    imageUrl: string;
    location: {
        lat: number,
        long: number,
    };
    isAdopted: boolean;
    gender: string;
    story: string;
    additionalImages: [''];
    submitted: boolean;
    adoptionStatus = 'без опіки';

    get formField() { return this.editDogInfoForm.controls; }

    constructor(title: Title, private formBuilder: FormBuilder, private dogsService: DogsService,
                private route: ActivatedRoute, private router: Router) {
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
                        id: this.dog.id,
                        name: this.dog.name,
                        birthday: this.dog.birthday,
                        imageUrl: this.dog.imageUrl,
                        gender: this.dog.gender,
                        story: this.dog.story,
                        location: {
                            lat: this.dog.location.lat,
                            long: this.dog.location.long,
                        },
                        additionalImages: this.dog.additionalImages,
                        isAdopted: this.dog.isAdopted,
                        like: this.dog.like,
                    });
                });
        });

        this.editDogInfoForm = this.formBuilder.group({
            id: '',
            name: ['', [Validators.required, Validators.minLength(3)]],
            birthday: ['', [Validators.required, Validators.minLength(3)]],
            imageUrl: ['', imageLinkValidator],
            gender: ['', [Validators.required, Validators.minLength(3)]],
            story: ['', [Validators.required, Validators.minLength(20)]],
            location: this.formBuilder.group({
                lat: [0, Validators.required],
                long: [0, Validators.required],
            }),
            additionalImages: [['', imageLinkValidator]],
            isAdopted: false,
            like: 0,
        });
    }

    adoptionStatusonChange() {
        if (this.editDogInfoForm.value.isAdopted === false) {
            this.adoptionStatus = 'без опіки';
        } else {
            this.adoptionStatus = 'взято під опіку';
        }
    }

    submitEditForm() {
        this.submitted = true;
        if (this.editDogInfoForm.invalid) {
            console.log('form is invalid');
            return;
        } else {
            this.dogsService.submitEditForm(this.editDogInfoForm).subscribe(() => {
                console.log(this.dog.id);
                this.router.navigate(['adoption']);
            });
        }
    }

}
