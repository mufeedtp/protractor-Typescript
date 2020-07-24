import { by, element } from 'protractor';
 
/**
 * Home page controls
 * 
 * @export
 * @class homeControls 
 */
export class ItemDesciptionControls  {

    quantityTextBox = element(by.name("addtocart_4.EnteredQuantity"));

    addToCartButton = element(by.id("add-to-cart-button-4"));

    alertClose = element(by.css("span.close"));

}
