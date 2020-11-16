import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdoptionPageComponent } from './adoption-page/adoption-page.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogEditComponent } from './dog-edit/dog-edit.component';

const routes: Routes = [
    {
        path: '',
        component: AdoptionPageComponent
    },
    {
        path: ':id',
        component: DogDetailsComponent,
    },
    {
        path: 'dog-edit/:id',
        component: DogEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdoptionRoutingModule { }
