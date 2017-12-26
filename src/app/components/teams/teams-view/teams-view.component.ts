import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
})
export class TeamsViewComponent implements OnInit {

  teams: Array<object>;

  constructor(
    private api: ApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams() {
    this.api.teams.getAll()
    .subscribe(
      res => {
        this.teams = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }
}
