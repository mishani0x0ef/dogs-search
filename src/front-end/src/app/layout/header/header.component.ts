import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuClick: boolean;

  receiveLinkClicked($event) {
    this.menuClick = $event;
    console.log('event receiveLinkClicked ' + this.menuClick);
  }

  menuClicked() {
    this.menuClick = !this.menuClick;
    console.log('menu clicked ' + this.menuClick);
  }

  ngOnInit(): void {}
}
