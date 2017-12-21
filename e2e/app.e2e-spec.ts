import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying toy-ionic', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('toy-ionic');
      });
    });
  })
});
