import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  leagues = {
    get: (id) => {
      const callParams = {type: 'get', url: `/admin/leagues/${id}`}
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {type: 'get', url: '/admin/leagues'}
      return this.apiCall(callParams);
    },

    create: (league) => {
      const callParams = {type: 'post', url: '/admin/leagues', body: league}
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {type: 'delete', url: `/admin/leagues/${id}`}
      return this.apiCall(callParams);
    },

    update: (league) => {
      const callParams = {type: 'put', url: `/admin/leagues/${league._id}`, body: league}
      return this.apiCall(callParams);
    },
  }

  teams = {
    get: (id) => {
      const callParams = {type: 'get', url: `/admin/teams/${id}`}
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {type: 'get', url: '/admin/teams'}
      return this.apiCall(callParams);
    },

    create: (team) => {
      const callParams = {type: 'post', url: '/admin/teams', body: team}
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {type: 'delete', url: `/admin/teams/${id}`}
      return this.apiCall(callParams);
    },

    update: (team) => {
      const callParams = {type: 'put', url: `/admin/teams/${team._id}`, body: team}
      return this.apiCall(callParams);
    },
  }

  fixtures = {
    get: (id) => {
      const callParams = {type: 'get', url: `/admin/fixtures/${id}`}
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {type: 'get', url: '/admin/fixtures'}
      return this.apiCall(callParams);
    },

    create: (fixture) => {
      const callParams = {type: 'post', url: '/admin/fixtures', body: fixture}
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {type: 'delete', url: `/admin/fixtures/${id}`}
      return this.apiCall(callParams);
    },

    update: (fixture) => {
      const callParams = {type: 'put', url: `/admin/fixtures/${fixture._id}`, body: fixture}
      return this.apiCall(callParams);
    },
  }

  users = {
    get: (id) => {
      const callParams = {type: 'get', url: `/admin/users/${id}`}
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {type: 'get', url: '/admin/users'}
      return this.apiCall(callParams);
    },

    create: (user) => {
      const callParams = {type: 'post', url: '/admin/users', body: user}
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {type: 'delete', url: `/admin/users/${id}`}
      return this.apiCall(callParams);
    },

    update: (user) => {
      const callParams = {type: 'put', url: `/admin/users/${user._id}`, body: user}
      return this.apiCall(callParams);
    },

    authenticateAdminUser: (user) => {
      const callParams = {type: 'post', url: '/admin/users/authenticate', body: user}
      return this.apiCall(callParams);
    },
  }

  apiCall(callParams) {
    const jwt = localStorage.getItem('token');
    let headers = new HttpHeaders({'Authorization': `${this.authorization}`});
    if(jwt) {
      headers = headers.set('token', jwt);
    }
    return this.http[callParams.type](`${this.baseUrl}${callParams.url}`, callParams.body ? callParams.body : {headers: headers}, callParams.body ? {headers: headers} : null);
  }
}
