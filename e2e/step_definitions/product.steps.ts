// Import chai and the 'expect' command.
import { Given, Then, When } from "cucumber";
import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";

const homePage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given("a product does not exist", async function (dataTable) {
    const arrayOfProducts = dataTable.hashes();
    this.product = arrayOfProducts[0];

    while (await homePage.findProductsInTable(this.product).count() > 0) {
        homePage.findProductsInTable(this.product).first().click();
        viewProductPage.deleteButton.click();
    }

    return expect(homePage.findProductInTable(this.product).isPresent()).to.eventually.be.false;
});

When("I add the product", function () {
    homePage.addProduct.click();
    addProductPage.productNameField.sendKeys(this.product.name);
    addProductPage.productDescriptionField.sendKeys(this.product.description);
    addProductPage.productPriceField.sendKeys(this.product.price);

    return addProductPage.submitButtonField.click();
});

Then("the product is created", function () {
    return expect(viewProductPage.productName(this.product).isPresent()).to.eventually.be.true;
});
