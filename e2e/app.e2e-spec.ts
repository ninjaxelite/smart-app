import { SmartAppPage } from './app.po';

describe('smart-app App', () => {
  let page: SmartAppPage;

  beforeEach(() => {
    page = new SmartAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
