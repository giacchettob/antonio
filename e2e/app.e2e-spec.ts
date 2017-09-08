import { UnipPage } from './app.po';

describe('unip App', () => {
  let page: UnipPage;

  beforeEach(() => {
    page = new UnipPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
