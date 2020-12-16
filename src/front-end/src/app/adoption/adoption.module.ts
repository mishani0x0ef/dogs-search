import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbCheckboxModule, NbRadioModule } from '@nebular/theme';

import { AdoptionPageComponent } from './adoption-page/adoption-page.component';
import { AdoptionRoutingModule } from './adoption-routing.module';
import { CommonModule } from '@angular/common';
import { DogCardComponent } from '../shared/components/dog-card/dog-card.component';
import { NgModule } from '@angular/core';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { AgmCoreModule } from '@agm/core';
import { DogEditComponent } from './dog-edit/dog-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { FilterByTypePipe } from './pipes/filter-by-type.pipe';
import { FilterBarComponent } from './filter-bar/filter-bar.component';



@NgModule({
  declarations: [DogCardComponent, AdoptionPageComponent, DogDetailsComponent, DogEditComponent, FilterByTypePipe, FilterBarComponent],
  imports: [
    CommonModule,
    AdoptionRoutingModule,

    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbCheckboxModule,
    NbRadioModule,

    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCTd4Xw7bqEU5Nheu_09-LuOcjp5N-atQA'
    }),

    ReactiveFormsModule,
    GalleryModule,
    ],
    providers: [
        {
        provide: GALLERY_CONFIG,
        useValue: {
            dots: true,
            imageSize: 'cover'
        }
        }
    ]
})
export class AdoptionModule { }
