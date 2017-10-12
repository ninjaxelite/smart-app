import { Component, OnInit } from '@angular/core';
import { User } from '../users/user/user';


@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;

    constructor() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {

    }
}
