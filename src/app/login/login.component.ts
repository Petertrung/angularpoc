import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private util:UtilityService){}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login(url: string) {
    let email = this.loginForm?.get('email')?.value
    if(email){
      this.util.login(email)
      this.util.updateRoute(url)
    }
  }
}

