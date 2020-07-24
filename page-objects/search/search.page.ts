import { SearchControls } from './search.controls';
import { basePage } from '../base/base.page';

/**
 *
 *
 * @export
 * @class searchPage
 * @extends {basePage}
 */
export class SearchPage extends basePage {

    //#region Private Properties

    private _searchControls : SearchControls;

    //#endregion Private Properties

    //#region Constructor

    /**
     * Creates an instance of searchPage.
     * @memberof searchPage
     */
    constructor() {
        super();
        this._searchControls = new SearchControls();
    }

    //#endregion Constructor

    //#region Public Methods

    public async clickAddToCartButton(){
        await super.scrollIntoView(this._searchControls.addToCartButton);
        await super.clickElement(this._searchControls.addToCartButton);
    }
     
    //#end region Public Methods

}
