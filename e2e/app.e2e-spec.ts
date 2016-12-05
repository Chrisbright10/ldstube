import { LdstubePage } from './app.po';

describe('ldstube App', function() {
  let page: LdstubePage;

  beforeEach(() => {
    page = new LdstubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
