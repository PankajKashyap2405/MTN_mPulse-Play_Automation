import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";

import homepage from "../../pages/homePage";

When("user clicks on profile icon", () => {
  homepage.clickonProfile()
});
Then("click on login button",() =>{
  homepage.clickonLoginBtnn()
});
  
  When("user clicks on device button", () => {
    homepage.clickOnDevice()
  });

  Then("validate Product listing page is displayed",() =>{
    homepage.validateDevicesLabel()
  }); 

  When("user click on select for 5G device", () => {
    homepage.ClickOnSelect()
  });

  Then("validate product details page is displayed",() =>{
    homepage.validate5gBroadband()
  }); 

  //When("user check the checkbox", () => {
    //homepage.clickkCheckBox()
  //});
 
  When("user selects the color", () => {
    homepage.selectColor()
  });

  When("user clicks on plus bitton", () => {
    homepage.increaseProduct()
  });

  When("user clicks on Add to cart button", () => {
    homepage.selectAddToCart()
  });

  Then("validate Product added to cart",() =>{
    homepage.addedToCart()
  });

  When("user clicks on cart icon", () => {
    homepage.clickOnCartIcon()
  });

  Then("validate user should be in cart page",() =>{
    homepage.validateOrdersummaryLabel()
  });

  Then("validate the product in cart", () => {
    homepage.productInCart()
  });

  When("user clicks on proceed to pay button", () => {
    homepage.clickOnPrcdtoBuy()
  });

 // Then("Validate Checkout page is displayed", () => {
   // homepage.validateCheckoutPage()
  //});
  
  Then("validate Checkout page is displayed", () => {
  homepage.validateCheckoutpage()
  });

  When("user clicks on Use this address under door delivery", () => {
    homepage.clickOnUsethisAddrs()
  });
  
  When("user clicks on shipping method", () => {
    homepage.clickOnShipMthd()
  });

  Then("click on use this shipping method", () => {
    homepage.SelectShipingMethd()
    });

  Then("click on continue in contact information", () => {
    homepage.clickOnContinuee()
    });
  
    Then("click on proceed to pay", () => {
      homepage.clickOnprcdtoPay()
      });
      //
  

  
