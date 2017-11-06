import User from './user';
import {createConnection} from "typeorm";

export default class UserService {

    private conn = createConnection();

    public findUser(id: string): Promise<User> {
        // load user by a given id
        return this.conn.then(async c => await c.getRepository(User).findOneById(id)).catch(this.handleError);
    }

    public findAllUsers(): Promise<User[]> {
        return this.conn.then(async c => await c.manager.find(User));
    }

    public createUser(p) {
        return this.conn.then(async c => await c.getRepository(User).save(new User(p.username, p.firstname, p.lastname, p.role, p.token)));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}