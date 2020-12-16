import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
    {
      path: 'adoption',
      loadChildren: () => import('./adoption/adoption.module').then(m => m.AdoptionModule)
    },
    {
      path: 'error-404',
      component: ErrorPageComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
