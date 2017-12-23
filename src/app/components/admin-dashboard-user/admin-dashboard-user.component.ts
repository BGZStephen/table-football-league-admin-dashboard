import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-admin-dashboard-user',
  templateUrl: './admin-dashboard-user.component.html',
})
export class AdminDashboardUserComponent implements OnInit {

  user: Array<object>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((userId) => {
      this.api.users.get(userId)
      .subscribe(
        res => {
          this.user = res;
        },
        error => {
          this.globalService.errorHandler.process(error);
        }
      )
    })
  }

}
