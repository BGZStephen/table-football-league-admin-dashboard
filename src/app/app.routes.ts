import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';

import * as components from 'app/components/components-barrel';

const APP_ROUTES: Routes = [
  {path: 'login', component: components.AdminDashboardLoginComponent},
  {path: '', component: components.ViewWrapperComponent, children: [
    {path: '', component: components.AdminDashboardHomeComponent},
    {path: 'teams', component: components.AdminDashboardTeamsComponent},
    {path: 'leagues', component: components.AdminDashboardLeaguesComponent},
    {path: 'fixtures', component: components.FixturesViewComponent},
    {path: 'users', component: components.UsersViewComponent},
    {path: 'users/:id', component: components.UserViewComponent},
  ], canActivate: [AuthGuard]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
