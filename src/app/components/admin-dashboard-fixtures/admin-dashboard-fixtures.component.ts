import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-admin-dashboard-fixtures',
  templateUrl: './admin-dashboard-fixtures.component.html',
})
export class AdminDashboardFixturesComponent implements OnInit {

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
