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

@NgModule({
  declarations: [DogCardComponent, AdoptionPageComponent, DogDetailsComponent, DogEditComponent],
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
  ]
})
export class AdoptionModule { }
