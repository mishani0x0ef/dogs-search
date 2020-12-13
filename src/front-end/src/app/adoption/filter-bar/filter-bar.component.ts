import { Component, OnInit } from '@angular/core';

import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  filter = 'all';
  filterParams = {
    filterType: true,
    filter: this.filter,
  };

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }
  sendFilterValue(type) {
      this.filter = type;
      this.filterService.FilterByType(type);
  }
}
