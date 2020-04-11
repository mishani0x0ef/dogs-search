import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  get copyrightDate(): string {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();

    return startYear === currentYear
      ? `${startYear}`
      : `${startYear} - ${currentYear}`;
  }
}
