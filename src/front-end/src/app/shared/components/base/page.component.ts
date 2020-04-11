import { BaseComponent } from './base.component';
import { Title } from '@angular/platform-browser';

export abstract class PageComponent extends BaseComponent {
    constructor(private title: Title, titleText: string) {
        super();

        this.setTitle(titleText);
    }

    protected setTitle(title: string): void {
        this.title.setTitle(title);
    }
}
