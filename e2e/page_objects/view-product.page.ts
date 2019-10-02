import { $, by, element } from "protractor";

export class ViewProductPage {

    /**
     * Used to create the locator for the Product name (It's parameterised as we don't know what product we've created)
     * 
     * @param 
     * @returns 
     * 
     */

     public productName = (product: myLib.Product) => {
         return element(by.cssContainingText("h2", product.name));
     }
}