import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
IsLogedIn:boolean;
UserName:string;
    constructor() {
        this.IsLogedIn = true;
        this.UserName = "Angular"
     }
}