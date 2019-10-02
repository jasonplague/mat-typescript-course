// Example class import 

import { $, by, element } from "protractor";

export class HomePage {
    public addProduct = $(".mat-flat-button.mat-primay");

// When we need to identify a unique item in a table

/**
 * Find a product in the table
 *
 * @param Product - this is a product (name, description, price) that we want to find in the table
 * @returns the element that is found (an element finder)
 */
    public findProductInTable = (product: myLib.Product) => {
     return element(by.cssContainingText(".matt-cell", product.name));
 }
}

