import { CartControls } from './cart.controls';
import { basePage } from '../base/base.page';

/**
 *
 *
 * @export
 * @class cartPage
 * @extends {basePage}
 */
export class CartPage extends basePage {

    //#region Private Properties

    private _cartControls: CartControls;

    //#endregion Private Properties

    //#region Constructor

    /**
     * Creates an instance of cartPage.
     * @memberof cartPage
     */
    constructor() {
        super();
        this._cartControls = new CartControls();
    }

    //#endregion Constructor

    //#region Public Methods

    public async getUnitPrice() {
        return await super.getElementText(this._cartControls.unitPrice);
    }

    public async getTotalPrice() {
        return await super.getElementText(this._cartControls.totalPrice);
    }

    //#end region Public Methods

}