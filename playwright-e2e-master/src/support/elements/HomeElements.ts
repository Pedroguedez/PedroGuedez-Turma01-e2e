import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getButtonChange(): Locator {
    return this.page.locator(
      '#root > div.qO_UG > header > div._3L2FE._1JEFf > nav > div > button'
    );
  }

  getEnglisButton(): Locator {
    return this.page.locator(
      '#overlays > div._3zpnU._3OfAS._25fsq > div._36bu_._3_cnU > ul > li:nth-child(6)'
    );
  }

  getStartButton(): Locator {
    return this.page.locator(
      '#root > div.qO_UG > header > div._15kfC > div._28m3G > div > a'
    );
  }

  getIdiomaEspanish(): Locator {
    return this.page.locator(
      '#root > div:nth-child(1) > div > div._6FUIZ._3txgr > div > div > ul > button:nth-child(2)'
    );
  }

  getContinuar(): Locator {
    return this.page.locator(
      '#root > div:nth-child(1) > div > div._2U1WN > div._25F55 > div > button'
    );
  }

  getComoConheceu(): Locator {
    return this.page.locator(
      '#root > div:nth-child(1) > div > div._2U1WN > div._1E4jI._3WR3c > div._1PXFa > ul > div:nth-child(8)'
    );
  }

  getViaja(): Locator {
    return this.page.locator(
      '#root > div:nth-child(1) > div > div._2U1WN > div._1E4jI._3WR3c > div._1PXFa > ul > div:nth-child(3)'
    );
  }

  getAnswer1(): Locator {
    return this.page.locator(
      '#root > div:nth-child(1) > div > div._2U1WN > div._1E4jI._3WR3c > div._1PXFa > ul > div:nth-child(1)'
    );
  }

  getAnswer2(): Locator {
    return this.page.locator(
      '#root > div:nth-child(1) > div > div._2U1WN > div._1E4jI._3WR3c > div._1PXFa > ul > div._8dMUn._1pRZ7 '
    );
  }

  getAnswerFinal(): Locator {
    return this.page.locator(
      '#root > div:nth-child(1) > div > div._2U1WN > div._1E4jI._3WR3c > div._1PXFa > ul > div:nth-child(1)'
    );
  }
}
