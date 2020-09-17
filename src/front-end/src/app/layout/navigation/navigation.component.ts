import { BaseComponent } from 'src/app/shared/components/base';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent extends BaseComponent {
  @Input() menuClick: boolean;
  @Output() observableEvent = new EventEmitter<boolean>();

  constructor() {
    super();
  }

  menuItemClicked() {
    console.log('before ' + this.menuClick);
    this.menuClick = !this.menuClick;
    this.observableEvent.emit(this.menuClick);
    console.log('after ' + this.menuClick);
  }
  ngOnInit(): void {
    console.log('on init !' + this.menuClick);
  }
}
