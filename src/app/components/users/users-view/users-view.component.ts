import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
})
export class UsersViewComponent implements OnInit {

  users: Array<object>;

  constructor(
    private api: ApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.api.users.getAll()
    .subscribe(
      res => {
        this.users = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
