import { User, UserActions } from "../actions/user.action";
import { State, Action, StateContext } from "@ngxs/store"
import { Injectable } from "@angular/core";

export interface UserStateModel{
    loggedInUser: User
}

@State<UserStateModel>({
    name: 'user',
    defaults: {
        loggedInUser: {} as User
    }
})

@Injectable()

export class UserState {
    @Action(UserActions.RegisterLogginUser)
    registerrogginuser(ctx: StateContext<UserStateModel>, action: UserActions.RegisterLogginUser) {
      const state = ctx.getState();
      ctx.patchState({
        loggedInUser: action.payload
      });
    }
  }