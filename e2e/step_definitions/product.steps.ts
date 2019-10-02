//Import chai and the 'expect' command.
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

import { Given, Then, When } from "cucumber";
import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";

const homePage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

Given("a product does not exist", function (dataTable)) {
    const arrayOfProducts = dataTable.hashes();
    this.product = arrayOfProducts[0];

    return expect(HomePage.findProductInTable(this.product).isPresent())
        .to.eventually.be.false;
    // Write code here that turns the phrase above into concrete actions
});


When("I add the product"), function () {
    homePage.addProductButton.click();
    addProductPage.productDescriptionField.sendKeys(this.product.description);
    addProductPage.productPriceField.sendKeys(this.product.price);
    // Write code here that turns the phrase above into concrete actions
    return addProductPage.submitButton.click();
}; )


Then("the product is created", function () {
    // Write code here that turns the phrase above into concrete actions
    return expect(viewProductPage.productName(this.product).isPresent())
        .to.eentually.be.true;
});


