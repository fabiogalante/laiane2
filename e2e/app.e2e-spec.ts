import { BoostrapngPage } from './app.po';

describe('boostrapng App', function() {
  let page: BoostrapngPage;

  beforeEach(() => {
    page = new BoostrapngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
