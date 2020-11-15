import { BaseComponent } from 'src/app/shared/components/base';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent extends BaseComponent implements OnInit {
    watchClick: boolean;
    constructor(private layoutservice: LayoutService) {
        super();
    }

    ngOnInit() {
        this.layoutservice.watchClick.subscribe(x => { this.watchClick = x; });
    }

    menuItemClicked() {
        console.log(this.watchClick);
        this.layoutservice.menuItemClicked();
    }
}
