import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from 'app/app.routes';
import * as components from 'app/components/components-barrel';

@NgModule({
  declarations: [
    components.AdminDashboardHomeComponent,
    components.AdminDashboardNavbarComponent,
    components.AdminDashboardLoginComponent,
    components.AdminDashboardTeamsComponent,
    components.FixturesViewComponent,
    components.AdminDashboardLeaguesComponent,
    components.AdminDashboardUsersComponent,
    components.ViewWrapperComponent,
    components.AdminDashboardUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class AdminDashboardModule { }
