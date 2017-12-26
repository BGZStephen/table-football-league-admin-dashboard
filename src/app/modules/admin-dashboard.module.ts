import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from 'app/app.routes';
import * as components from 'app/components/components-barrel';

@NgModule({
  declarations: [
    components.HomeViewComponent,
    components.NavbarComponent,
    components.LoginViewComponent,
    components.LoginFormComponent,
    components.TeamsViewComponent,
    components.FixturesViewComponent,
    components.LeaguesViewComponent,
    components.UsersViewComponent,
    components.ViewWrapperComponent,
    components.UserViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class AdminDashboardModule { }
