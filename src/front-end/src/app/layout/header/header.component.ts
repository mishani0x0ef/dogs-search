import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    isMenuOpened: boolean;

    constructor(private layoutservice: LayoutService) {
    }

    ngOnInit() {
        this.layoutservice.isMenuOpened.subscribe(x => { this.isMenuOpened = x; });
    }

    toggleMenuVisibility() {
        this.layoutservice.toggleMenuVisibility();
    }
}
