import { SolarHeaterPage } from './app.po';

describe('solar-heater App', () => {
  let page: SolarHeaterPage;

  beforeEach(() => {
    page = new SolarHeaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
