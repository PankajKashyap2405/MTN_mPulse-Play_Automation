import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";

import homepage from "../../pages/homePage";

Then("validate device,data,enterprise,cloud,recharge buttons are visible on home page", () => {
   homepage.validateDifferentProductsButtonsOnHomePage()
});
When("user click on device button", () => {
   homepage.clickOnDeviceButton()
});
 
//Then("validate the product listing page is displayed", () => {
   //homepage.validateProductListingPage()
 //repeated steps it wont take it through an error like multiple matching (if we return in any other stepdefiniton page)
//});
When("user click on home link", () => {
     homepage.clickOnHomePageLink()
});

When("user click on data button", () =>{
   homepage.clickOnDataButton()
});

Then("validate the databundle page is displayed", () =>{
   homepage.validateDataBundleListingPage()
});

When("user click on enterprise", () =>{
   homepage.clickOnEnterpriseButton()
});

Then("validate the enterprise service page is displayed", () =>{

});