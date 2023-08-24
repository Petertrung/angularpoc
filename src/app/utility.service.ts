import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngxs/store"
import { UserActions } from 'src/store/actions/user.action';

@Injectable()
export class UtilityService{
    constructor(private router: Router , private store: Store) {}

  updateRoute(url: string) {
    this.router.navigate([url]);
  }


  public login(email: string): void{
    this.store.dispatch(new UserActions.RegisterLogginUser({
      email: email,
      userType: 4
    }))
  }
}