import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Iniciar no duolingo ', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homepage: HomePage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.base_url')
      .retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    homepage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Alterar o idioma e iniciar agora', async () => {
    await homepage.changeIdioma();
  });

  test('Comece agora uma atividade escolhendo um idioma e questionario inicial', async () => {
    await homepage.init();
  });
});
