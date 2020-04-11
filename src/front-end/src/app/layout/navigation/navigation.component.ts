import { BaseComponent } from 'src/app/shared/components/base';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent extends BaseComponent {
  constructor() {
    super();
  }
}
