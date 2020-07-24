import { Before, Given, When, Then } from "cucumber";
import { HomePage } from "../../page-objects/home/home.page";
import { SearchPage } from "../../page-objects/search/search.page";
import { ItemDescriptionPage } from "../../page-objects/item-description/item.description.page";
import { CartPage } from "../../page-objects/cart/cart.page";

const chai = require('chai');
const expect = chai.expect;

let _homePage : HomePage, _searchPage : SearchPage, _itemDescriptionPage : ItemDescriptionPage, _cartPage : CartPage;

Before(async ()=>{
    _homePage = new HomePage();
    _searchPage = new SearchPage();
    _itemDescriptionPage = new ItemDescriptionPage();
    _cartPage = new CartPage();
 });

Given('I have application launched', async ()=>{
    await _homePage.launchApplication();
});

When('I Add an item {string} to cart', async (item)=>{
    await _homePage.searchItemAndEnter(item);
    await _searchPage.clickAddToCartButton();
    await _itemDescriptionPage.addQuantity(5);
    await _itemDescriptionPage.clickAddToCartButton();
    await _itemDescriptionPage.closeAlertBar();
});

When('I go shopping cart', async ()=> {
    await _homePage.mouseHoverOnShoppingCart();
    console.log("something");
    await _homePage.clickGoToCartButton();
});

Then('I should see unit price {string}', async  (unitPrice)=> {
    await expect(await _cartPage.getUnitPrice()).to.equal(unitPrice, 'ASSERTION ERROR: Unit Price is not as expected.');
});

Then('I should see Total price {string}', async (totalPrice)=> {
    await expect(await _cartPage.getTotalPrice()).to.equal(totalPrice, 'ASSERTION ERROR: Total Price is not as expected.');
});
