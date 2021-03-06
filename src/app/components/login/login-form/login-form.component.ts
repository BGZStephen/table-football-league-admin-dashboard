import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { GlobalService } from 'app/services/global.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {

  formValues = {
    email: {
      display: 'Email'
    },
    password: {
      display: 'Password'
    },
  };

  constructor (
    private api: ApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {}

  onLogin(user) {
    const validation = this.validateForm(user);
    if (validation) {
      this.api.users.authenticateAdminUser(user)
      .subscribe(
        res => {
          localStorage.setItem('token', res['token']);
          localStorage.setItem('user', res['user']);
          this.globalService.notification.show({message: 'Login successful'});
          this.globalService.redirection.delayed('/', 300);
        },
        error => {
          this.globalService.errorHandler.process(error);
        }
      )
    }
  }

  validateForm(form) {
    let errorFlag;
    Object.keys(this.formValues).forEach((key) => {
      if(!form[key]) {
        errorFlag = true;
        this.formValues[key]['hasError'] = true;
        this.formValues[key]['message'] = `${this.formValues[key].display} is required`;
      } else {
        this.formValues[key]['hasError'] = false;
        this.formValues[key]['message'] = undefined;
      }
    })

    if(errorFlag) {
      return false;
    }

    return true;
  }
}
