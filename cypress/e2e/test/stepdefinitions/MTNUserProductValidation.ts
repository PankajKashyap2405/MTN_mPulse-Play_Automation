import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";

import homepage from "../../pages/homePage";
When("user click on the device button", () => {
    homepage. clickOnDeviceButton()
});

Then("validate the product listing page is displayed", () =>{
    homepage.validateProductListingPage()
});
When( "user click on select button", () => {
    homepage.clickOnSelectButton()
});
Then("validate the product details page is displayed", () =>
{
    homepage. validateProductDetailsPage()

});
 When ("user click on add to cart button" , () => {
    homepage. clickOnAddToCartButton()

 });
 Then ("validate product is validate to cart" , () => {
    homepage.validateProductValidateToCart()
 });