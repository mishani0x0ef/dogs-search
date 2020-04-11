import { Component } from '@angular/core';
import { PageComponent } from 'src/app/shared/components/base';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.scss']
})
export class AdoptionPageComponent extends PageComponent {
  constructor(title: Title) {
    super(title, 'Adoption');
  }
}
