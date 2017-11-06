import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user/user';
import { BahnhofService } from './bahnhof.service';
import { UserService } from '../../users/user/user.service';
import { Bahnhof } from '../bahnhof';


@Component({
    templateUrl: 'bahnhof.component.html',
    providers:[BahnhofService, UserService]
})

export class BahnhofComponent implements OnInit {
    currentUser: User;
    service : BahnhofService;
    userserv: UserService;
    bahnhof: Bahnhof;
    maxColumns : number = 0;
    rows : number = 0;
    loading : boolean = true;
    

    constructor(bahnhofService : BahnhofService, us: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.service = bahnhofService;
      this.userserv = us;
    }

    ngOnInit() {
        this.service.findOne().subscribe(data => {
            this.bahnhof = data
            this.countColumnsAndItems(this.bahnhof);
            this.loading = false;
        });
        this.userserv.getById('goku').subscribe(data => {
            console.log(""+JSON.stringify(data));
        });
    }

    private countColumnsAndItems(bahnhof: Bahnhof) {
        Object.getOwnPropertyNames(bahnhof).forEach(
            (val, idx, array) => {
                this.rows = this.rows + 1;
                if (bahnhof[val].length > this.maxColumns) {
                    this.maxColumns = bahnhof[val].length;
                }
                console.log(bahnhof[val]);
            }
        );
        
    }

    createRange(fields: any[]) {
        let range: any[] = [];
        for (let x = 0; x < this.maxColumns - fields.length; x++) {
            range.push(x);
        }
        return range;
    }

    
}
