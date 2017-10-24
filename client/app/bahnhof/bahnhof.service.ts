import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Bahnhof } from './bahnhof';

@Injectable()
export class BahnhofService {

    constructor(private http: Http) { }



    findOne() {
        return this.http.get('/api/bahnhof/1').map(data => {return data.json()});
    }

}