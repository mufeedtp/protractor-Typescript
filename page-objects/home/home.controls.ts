import { by, element } from 'protractor';
 
/**
 * Home page controls
 * 
 * @export
 * @class homeControls 
 */
export class HomeControls  {

    searchBox = element(by.name("q"));

    shoppingCart = element(by.css("span.cart-label"));

    goToCartButton = element(by.className("button-1 cart-button"));
}
