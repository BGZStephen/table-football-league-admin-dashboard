import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GlobalService } from './services/global.service';
import { RedirectionService } from './services/redirection.service';
import { NotificationService } from './services/notification.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { ApiService } from './services/api.service'

import { AuthGuard } from 'app/guards/auth.guard';

import { AppRoutes } from './app.routes';

import { AdminDashboardModule } from 'app/modules/admin-dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
    AdminDashboardModule,
  ],
  providers: [AuthGuard, GlobalService, ApiService, NotificationService, RedirectionService, ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
