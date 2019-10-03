// Example class import
import { $, by, element } from "protractor";

export class HomePage {

public addProduct = $(".mat-flat-button.mat-primary");
/**
 * Find a product in the table
 *
 * @param - this is a product (name, description, price) that we want to find in the table
 * @returns the element that is found (an element finder)
 */
    public findProductInTable = (product: myLib.Product) => {
     return element.all(by.cssContainingText(".matt-cell", product.name));
 }

public findProductsInTable = (product: myLib.Product) => {
    return element.all(by.cssContainingText(".mat-cell" , product.name));
}

}
