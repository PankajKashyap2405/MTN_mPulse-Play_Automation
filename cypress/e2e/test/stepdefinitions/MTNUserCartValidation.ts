import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import testdata from "../../../fixtures/loginUIEle.json"
import { Basepage } from "../../../support/basepage";
import commonPage from "../../pages/commonPage";


Then("Validate MTN Logo on home page",()=>{
  homepage.validateLogo()
  });

/*Users login to Application with email
When("user hover on All products on home page", () => {
  homepage.mouseHover() 
  
});

//user select product and click on add to Cart
When("user select product and click on add to Cart", () => {
  homepage.selectProduct() 
  
});

//When user select cart and increase cart quantity
When("user select cart and increase cart quantity", () => {
  homepage.cartQuantityIncrease() 
  
});

When("user select cart",function(){
  homepage.clickOnCartIcon()
});
/*Then("user validate Cart page elements",function() {
  
  homepage.validateCartElement()
  /*Cypress.on('uncaught:exception', (err, runnable) => {
    cy.log(`Uncaught Exception: ${JSON.stringify(err)}`);
     
    return false;
  });*/

  When("click on footer link",() => {
    homepage.validateFooterLinkAboutMTN()
    commonPage.navigateToAplication()
    homepage.validateFooterLinkCOdeOfEthics()
  })



