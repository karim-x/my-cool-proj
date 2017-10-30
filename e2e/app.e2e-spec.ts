import { MyNewCoolProjectPage } from './app.po';

describe('my-new-cool-project App', function() {
  let page: MyNewCoolProjectPage;

  beforeEach(() => {
    page = new MyNewCoolProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
