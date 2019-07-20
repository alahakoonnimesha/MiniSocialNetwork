import { MsnprojectPage } from './app.po';

describe('msnproject App', function() {
  let page: MsnprojectPage;

  beforeEach(() => {
    page = new MsnprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
