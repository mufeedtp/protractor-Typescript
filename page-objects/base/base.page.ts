import { browser, ElementFinder, protractor } from 'protractor';
import { TIME_OUT } from '../../utilities/time-out.enum';

/**
 * Base page 
 * 
 * @export
 * @class basePage
 */
export class basePage {

    protected async clickElement(element: ElementFinder) {
        if(await this.waitForLoadElement(element)){
            await element.click();
        }
    }

    
    protected async enterText(element : ElementFinder, text: any) {
        if(await this.waitForLoadElement(element)){
            await element.clear();
            await element.sendKeys(text);
        }
    }

    protected async goTo(url: string) {
        await browser.get(url);
    }

    protected async waitForLoadElement(element: ElementFinder) {
        return await browser.driver.wait(async ()=> {
            return await browser.isElementPresent(element);
        }, TIME_OUT.xxl);
    }

    protected async waitUntillElementClickable(element : ElementFinder) {
        let untilElementClickable = protractor.ExpectedConditions.elementToBeClickable(element);
        return await browser.driver.wait(async ()=> {
            return await browser.wait(untilElementClickable);
        }, TIME_OUT.xxl);
    }
    
    protected async getElementText(element: ElementFinder) {
        if(await this.waitForLoadElement(element)) {
            return await element.getText();
        }
    }

    protected async waitTillElementPresent(element: ElementFinder) {
        if (!element.isPresent()) {
            let untilControlIsPresent = protractor.ExpectedConditions.visibilityOf(element);
            return await browser.driver.wait(async ()=> {
                return await browser.wait(untilControlIsPresent);
            }, TIME_OUT.xxl);
        }
    }

    protected async waitTillElementDisappears(control: ElementFinder) {
        if (control.isPresent()) {
            let untilControlDisappears = protractor.ExpectedConditions.not(protractor.ExpectedConditions.visibilityOf(control));
            return await browser.driver.wait(async ()=> {
                return await browser.wait(untilControlDisappears);
            }, TIME_OUT.xxl);
        }
    }

    protected async scrollIntoView(element: ElementFinder) {
        if(await this.waitForLoadElement(element)) {
            await browser.driver.executeScript('arguments[0].scrollIntoView(true);', element.getWebElement());
        }
    }

    protected async mouseHover(element : ElementFinder) {
        if(await this.waitForLoadElement(element)){
            return await browser.actions().mouseMove(element).perform();
        }
    }

    protected async pressEnterKey(element : ElementFinder) {
        if(await this.waitForLoadElement(element)){
            element.sendKeys(protractor.Key.ENTER);
        }
    }
}
