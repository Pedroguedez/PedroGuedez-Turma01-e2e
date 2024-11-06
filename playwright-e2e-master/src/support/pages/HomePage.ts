import { Page } from '@playwright/test';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async changeIdioma(): Promise<void> {
    await this.homeElements.getButtonChange().click();
    await this.homeElements.getEnglisButton().click();
  }

  async init(): Promise<void> {
    await this.homeElements.getStartButton().click();
    await this.homeElements.getIdiomaEspanish().click();
    await this.homeElements.getContinuar().click();
    await this.homeElements.getContinuar().click();
    await this.homeElements.getComoConheceu().click();
    await this.homeElements.getContinuar().click();
    await this.homeElements.getViaja().click();
    await this.homeElements.getAnswer1().click();
    await this.homeElements.getContinuar().click();
    await this.homeElements.getAnswer2().click();
    await this.homeElements.getContinuar().click();
    await this.homeElements.getContinuar().click();
    await this.homeElements.getAnswerFinal().click();
    await this.homeElements.getContinuar().click();
    await this.homeElements.getContinuar().click();
  }
}
