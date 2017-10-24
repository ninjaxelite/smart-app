import BahnhofService from './bahnhof.service';
import Bahnhof from './bahnhof';

export default class BahnhofCtrl {
  private service: BahnhofService;

  constructor() {
    this.service = new BahnhofService();
  }
  
  public findOne = (req, res) => {
    let bahnhof: Bahnhof = this.service.findOne(req.params.id);
    res.status(200).send(bahnhof);
  }
}