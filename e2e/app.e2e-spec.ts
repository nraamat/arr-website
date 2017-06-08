import { AarhusRottenRollersPage } from './app.po';

describe('aarhus-rotten-rollers App', () => {
  let page: AarhusRottenRollersPage;

  beforeEach(() => {
    page = new AarhusRottenRollersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
