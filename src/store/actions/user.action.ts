export interface User {
    email: string;
    userType: number;
}

export namespace UserActions{
    export class RegisterLogginUser{
        static readonly type: "[User] Register logged in user" = `[User] Register logged in user`;
        constructor(public payload: User){}
    }
}