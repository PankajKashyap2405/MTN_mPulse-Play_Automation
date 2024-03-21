import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import cartPage from "../../pages/cartPage";


When("user click on the data tab", () => {
   cartPage.dataIcon()
  });

  Then("validate Products listing page is displayed", () => {
    cartPage.plans()
  });

  When("user click on select for 50Mb we chat plan", () => {
    cartPage.wechat50Mb()
   });
   Then("validate 50MB wechat plan product page is displayed", () => {
    cartPage.detailPage()
  });

  When("user clicks on Mobile number button", () => {
    cartPage.mobileNumber()
   });

   Then("validate Mobile number field is displayed", () => {
    cartPage.mobileField()
  });

  When("user enters mobile number in field", () => {
    cartPage.enterMTNMobile()
   });

   Then("Validate eligibility message is displayed", () => {
    cartPage.eligibiltyCheck()
  });

  When("user click on mobile number icon", () => {
    cartPage.mNumber()
   });

   Then("validate congrats message is displayed", () => {
    cartPage.eligbltyNum()
  });

   When("user click on buy now button", () => {
    cartPage.buYNowBtn()
   });

   Then("Validate user checkout page is displayed", () => {
    cartPage.ValidateUserCheckoutpge()
  });
  

  Then("validate payment gateway is displayed", () => {
    cartPage.validatePaymentGatwewayWithPassword()
      
  });


  
