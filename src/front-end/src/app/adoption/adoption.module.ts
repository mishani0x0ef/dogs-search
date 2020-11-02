import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';

import { AdoptionPageComponent } from './adoption-page/adoption-page.component';
import { AdoptionRoutingModule } from './adoption-routing.module';
import { CommonModule } from '@angular/common';
import { DogCardComponent } from '../shared/components/dog-card/dog-card.component';
import { NgModule } from '@angular/core';
import { DogDetailsComponent } from './dog-details/dog-details.component';

@NgModule({
  declarations: [DogCardComponent, AdoptionPageComponent, DogDetailsComponent],
  imports: [
    CommonModule,
    AdoptionRoutingModule,

    NbButtonModule,
    NbCardModule,
    NbIconModule,
  ]
})
export class AdoptionModule { }
