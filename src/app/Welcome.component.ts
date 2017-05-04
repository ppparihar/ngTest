import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service'

@Component({
    moduleId: module.id,
    selector: 'welcome',
    template: 'Welcome'
})

export class WelcomeComponent implements OnInit {
    IsLogedIn:boolean;
    UserName:string;
    constructor(UserService:UserService) {
        this.IsLogedIn = UserService.IsLogedIn;
        this.UserName = UserService.UserName;
     }

    ngOnInit() { }
}