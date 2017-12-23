import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from 'app/app.routes';
import * as adminDashboard from 'app/components/admin-dashboard-components-barrel';

@NgModule({
  declarations: [
    adminDashboard.AdminDashboardHomeComponent,
    adminDashboard.AdminDashboardNavbarComponent,
    adminDashboard.AdminDashboardLoginComponent,
    adminDashboard.AdminDashboardTeamsComponent,
    adminDashboard.AdminDashboardFixturesComponent,
    adminDashboard.AdminDashboardLeaguesComponent,
    adminDashboard.AdminDashboardUsersComponent,
    adminDashboard.AdminDashboardViewWrapperComponent,
    adminDashboard.AdminDashboardUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class AdminDashboardModule { }
