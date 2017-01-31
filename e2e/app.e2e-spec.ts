import { TheBarkeleyPage } from './app.po';

describe('the-barkeley App', function() {
  let page: TheBarkeleyPage;

  beforeEach(() => {
    page = new TheBarkeleyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
