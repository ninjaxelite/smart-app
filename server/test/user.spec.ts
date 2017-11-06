import {createConnection, ConnectionOptions} from 'typeorm';
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import { app } from '../app';
import User from '../user/user';

chai.use(chaiHttp);
const should = chai.should();
const expect = chai.expect;

// custom settings for tests
const options: ConnectionOptions = {
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "sys",
    logging: false,
    synchronize: true,
    entities: [User]
};

const conn = createConnection(options);

describe('Backend tests for user', () => {
    
    it('should delete all users', done => {
        conn.then(async connection => {
            await connection.manager.clear(User);
            //console.log("All User data cleared!");
            done();
        }).catch(error => console.log(error));
    });

    it('should insert users', done => {        
        conn.then(async connection => {
            const user = new User('hugo3','tim', 'boss','x', 'z');
            const user2 = new User('avc','hug', 'champ','x', 'z');
            const user3 = new User('hugo4','acer', 'kleo','x', 'z');
            const user4 = new User('hugo5','tim2', 'boss3','x', 'z');
            const user5 = new User('goku','saiyan', 'megaboss','x', 'z');
            await connection.manager.save(user);
            await connection.manager.save(user2);
            await connection.manager.save(user3);
            await connection.manager.save(user4);
            await connection.manager.save(user5);
            //console.log("Users inserted.");
            done();
        }).catch(error => console.log(error));
    });

    it('should get all users', done => {
        conn.then(async connection => {
            //console.log("Loading users from the database...");
            const users = await connection.manager.find(User);
            //console.log("Loaded users: ", users);
            done();
        }).catch(error => console.log(error));
    });
    
    it('should update user', done => {
        conn.then(async connection => {
            //console.log("Searching user...");
            const repo = connection.getRepository(User);
            let user = await repo.findOneById('goku');
            let nname: string = 'kakarot';
            user.$firstname = nname;
            user = await repo.save(user);
            //console.log("Updated user: ", user);
            
            user = await repo.findOneById('goku');
            expect(user.$firstname).to.equal(nname);
            done();
        }).catch(error => console.log(error));
    });

    it('should delete user', done => {
        conn.then(async connection => {
            //console.log("Deleting user...");
            const repo = connection.getRepository(User);
            let count = await repo.count();
            let user = await repo.findOneById('avc');
            await repo.delete(user);
            let count2 = await repo.count();
            expect(count).to.not.equal(count2);
            //console.log("User: "+ user.$username + " deleted! "+count2+"/"+count+" remains");
            done();
        }).catch(error => console.log(error));
    });

    it('should get undefined user', done => {
        conn.then(async connection => {
            const repo = connection.getRepository(User);
            let user = await repo.findOneById('avc').catch(i => console.log(i));
            expect(user).to.equal(undefined);
            done();
        }).catch(error => console.log(error));
    });

    it('should get status 200', done => {
        chai.request(app)
        .get('/api/users')
        .then(res => {
            res.should.have.status(200);
            done();
        }).catch(error => console.log(error));
    });

    it('should get user via rest', done => {
        chai.request(app)
        .get('/api/user/goku')
        .then(res => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('username');
            res.body.should.have.property('firstname');
            done();
        }).catch(error => console.log(error));
    });

    it('should create user via rest', done => {
        chai.request(app)
        .get('/api/user/goku')
        .then(res => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('username');
            res.body.should.have.property('firstname');
            done();
        }).catch(error => console.log(error));
    });
});