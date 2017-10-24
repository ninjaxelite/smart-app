import Bahnhof from './bahnhof';
import * as Mock from './bahnhof.mock';

export default class BahnhofService {
    private data: Bahnhof[];

    constructor() {
        this.data = Mock.stations;
    }

    public findOne(id: String) {
        return this.data[0];
    }
}