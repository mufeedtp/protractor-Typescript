import { by, element } from 'protractor';
 
/**
 * Cart page controls
 * 
 * @export
 * @class cartControls 
 */
export class CartControls  {

    unitPrice = element(by.className("product-unit-price"));

    totalPrice = element(by.className("product-subtotal"));

}
