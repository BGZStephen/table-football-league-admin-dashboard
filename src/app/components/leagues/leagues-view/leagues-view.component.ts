import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-leagues-view',
  templateUrl: './leagues-view.component.html',
})
export class LeaguesViewComponent implements OnInit {

  leagues: Array<object>;

  constructor(
    private api: ApiService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.getAllLeagues()
  }

  getAllLeagues() {
    this.api.leagues.getAll()
    .subscribe(
      res => {
        this.leagues = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
