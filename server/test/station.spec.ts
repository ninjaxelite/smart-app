import {createConnection,ConnectionOptions} from 'typeorm';
import {Station} from '../station/station';
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

import { app } from '../app';

const should = chai.use(chaiHttp).should();

const options: ConnectionOptions = {
    // type: "oracle",
    // host: "localhost",
    // username: "system",
    // password: "oracle",
    // port: 1521,
    // sid: "xe.oracle.docker",
    "name": "mysql",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "sys",
    // type: "postgres",
    // host: "localhost",
    // port: 5432,
    // username: "test",
    // password: "test",
    // database: "test",
    // "type": "mssql",
    // "host": "192.168.1.6",
    // "username": "sa",
    // "password": "admin12345",
    // "database": "test",
    // port: 1521,
    // type: "sqlite",
    // database: "temp/sqlitedb.db",
    // logger: "file",
    // logging: ["query", "error"],
    // logging: ["error", "schema", "query"],
    // maxQueryExecutionTime: 90,
    synchronize: true,
    entities: [Station]
};

describe('Backend tests for station', () => {
    
    /*it('should get all stations', done => {        
        createConnection(options).then(async connection => {
            
                console.log("Inserting a new station into the database...");
                const station = new Station(3, 'hugo3', 'boss',4, true);
                await connection.manager.save(station);
                console.log("Saved a new station with username: " + station.name);
                console.log("Loading stations from the database...");
                const stations = await connection.manager.find(Station);
                console.log("Loaded stations: ", stations);
                
                console.log("Here you can setup and run express/koa/any other framework.");
                done();
            }).catch(error => console.log(error));
        // post - 200 
        // should
        // create
        // crud
        //done();
    });*/
});