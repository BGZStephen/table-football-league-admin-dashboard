import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-fixtures-view',
  templateUrl: './fixtures-view.component.html',
})
export class FixturesViewComponent implements OnInit {

  fixtures: Array<object>;

  constructor(
    private api: ApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.getAllFixtures()
  }

  getAllFixtures() {
    this.api.fixtures.getAll()
    .subscribe(
      res => {
        this.fixtures = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
