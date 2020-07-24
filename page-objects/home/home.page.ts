import { browser } from 'protractor';
import { HomeControls } from './home.controls';
import { basePage } from '../base/base.page';

/**
 *
 *
 * @export
 * @class homePage
 * @extends {basePage}
 */
export class HomePage extends basePage {

    //#region Private Properties

    private _homeControls: HomeControls;

    //#endregion Private Properties

    //#region Constructor

    /**
     * Creates an instance of homePage.
     * @memberof homePage
     */
    constructor() {
        super();
        this._homeControls = new HomeControls();
    }

    //#endregion Constructor

    //#region Public Methods

    public async launchApplication() {
        await super.goTo(browser.params.baseUrl);
    }

    public async searchItemAndEnter(item : string) {
        await super.enterText(this._homeControls.searchBox, item);
        await super.pressEnterKey(this._homeControls.searchBox);
    }

    public async mouseHoverOnShoppingCart() {
        await super.mouseHover(this._homeControls.shoppingCart);
    }

    public async clickGoToCartButton() {
        if(await super.waitUntillElementClickable(this._homeControls.goToCartButton)){
            await super.clickElement(this._homeControls.goToCartButton);
        }
    }

    public async clickShoppingCart() {
        await super.clickElement(this._homeControls.shoppingCart);
    } 

    //#end Public Methods
}
