import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
    menuOpened = false;
    constructor() {
    }
    private click = new BehaviorSubject<boolean>(this.menuOpened);
    watchClick = this.click.asObservable();

    menuItemClicked() {
        this.menuOpened = !this.menuOpened;
        this.click.next(this.menuOpened);
  }
}
