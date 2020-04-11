import { RouterModule, Routes } from '@angular/router';

import { AdoptionPageComponent } from './adoption-page/adoption-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: AdoptionPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdoptionRoutingModule { }
