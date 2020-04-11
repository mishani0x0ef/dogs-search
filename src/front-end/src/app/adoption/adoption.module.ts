import { AdoptionPageComponent } from './adoption-page/adoption-page.component';
import { AdoptionRoutingModule } from './adoption-routing.module';
import { CommonModule } from '@angular/common';
import { DogCardComponent } from '../shared/components/dog-card/dog-card.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DogCardComponent, AdoptionPageComponent],
  imports: [
    CommonModule,
    AdoptionRoutingModule,
  ]
})
export class AdoptionModule { }
