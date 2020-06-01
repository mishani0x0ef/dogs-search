import { RouterModule, Routes } from '@angular/router';

import { AdoptionPageComponent } from './adoption-page/adoption-page.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: AdoptionPageComponent
    },
    {
        path: ':id',
        component: DogDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdoptionRoutingModule { }
