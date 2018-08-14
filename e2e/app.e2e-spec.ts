import { InstantWashPage } from './app.po';

describe('instant-wash App', () => {
  let page: InstantWashPage;

  beforeEach(() => {
    page = new InstantWashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
