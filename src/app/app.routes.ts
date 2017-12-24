import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';

import * as adminDashboard from 'app/components/admin-dashboard-components-barrel';

const APP_ROUTES: Routes = [
  {path: 'login', component: adminDashboard.AdminDashboardLoginComponent},
  {path: '', component: adminDashboard.AdminDashboardViewWrapperComponent, children: [
    {path: '', component: adminDashboard.AdminDashboardHomeComponent},
    {path: 'teams', component: adminDashboard.AdminDashboardTeamsComponent},
    {path: 'leagues', component: adminDashboard.AdminDashboardLeaguesComponent},
    {path: 'fixtures', component: adminDashboard.AdminDashboardFixturesComponent},
    {path: 'users', component: adminDashboard.AdminDashboardUsersComponent},
    {path: 'users/:id', component: adminDashboard.AdminDashboardUserComponent},
  ], canActivate: [AuthGuard]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
