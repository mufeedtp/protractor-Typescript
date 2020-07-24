import { ItemDesciptionControls } from './item.description.controls';
import { basePage } from '../base/base.page';

/**
 *
 *
 * @export
 * @class itemDescriptionPage
 * @extends {basePage}
 */
export class ItemDescriptionPage extends basePage {

    //#region Private Properties

    private _itemDesciptionControls : ItemDesciptionControls;

    //#endregion Private Properties

    //#region Constructor

    /**
     * Creates an instance of ItemDescriptionPage.
     * @memberof ItemDescriptionPage
     */
    constructor() {
        super();
        this._itemDesciptionControls = new ItemDesciptionControls();
    }

    //#endregion Constructor

    //#region Public Methods

    public async addQuantity(quantity : number) {
        await super.scrollIntoView(this._itemDesciptionControls.quantityTextBox);
        await super.enterText(this._itemDesciptionControls.quantityTextBox, quantity);
    }

    public async clickAddToCartButton() {
        // await super.scrollIntoView(this._itemDesciptionControls.addToCartButton);
        await super.clickElement(this._itemDesciptionControls.addToCartButton);
    }

    public async closeAlertBar() {
        await super.clickElement(this._itemDesciptionControls.alertClose);
    }

    //#end region Public Methods

}
