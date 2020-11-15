import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    watchClick: boolean;
    constructor(private layoutservice: LayoutService) {
    }
    ngOnInit() {
        this.layoutservice.watchClick.subscribe(x => { this.watchClick = x; });
        console.log(this.watchClick);
    }
    menuItemClicked() {
        console.log(this.watchClick);
        this.layoutservice.menuItemClicked();
    }
}
