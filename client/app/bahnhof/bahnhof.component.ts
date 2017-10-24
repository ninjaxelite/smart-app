import { Component, OnInit } from '@angular/core';
import { User } from '../users/user/user';
import { BahnhofService } from './bahnhof.service';
import { Bahnhof } from './bahnhof';


@Component({
    templateUrl: 'bahnhof.component.html'
})

export class BahnhofComponent implements OnInit {
    currentUser: User;
    service : BahnhofService;
    bahnhof: Bahnhof;
    

    constructor(bahnhofService : BahnhofService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.service = bahnhofService;
      
    }

    ngOnInit() {
        this.service.findOne().subscribe(data => this.bahnhof = data);
    }

    
}
