import { PortPage } from './app.po';

describe('port App', function() {
  let page: PortPage;

  beforeEach(() => {
    page = new PortPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
