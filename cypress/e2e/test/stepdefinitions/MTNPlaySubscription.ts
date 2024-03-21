import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import MTNPlaySubscription from "../../pages/MTNPlaySubscription";
import commonPage from "../../pages/commonPage";


When("user clicks on Video category in header", () => {
    MTNPlaySubscription.clickOnVideo()
  });

  Then("validate video category page is displayed", () => {
    MTNPlaySubscription.videoCategory()
  });

  Then("click on Wiflix partner", () => {
    MTNPlaySubscription.clickOnWiflix()
  });

  Then("validate wiflix partner page is displayed", () => {
    MTNPlaySubscription.wiflixpage()
  });

  /*Then("click on wiflix plans dropdown", () => {
    MTNPlaySubscription.clickOnPlansDropdown()
  });*/
   
  Then("click on subscribe button", () => {
    MTNPlaySubscription.clickOnSubscribe()
  });

  Then("Validate checkoutt page is displayed", () => {
    MTNPlaySubscription.checkoutPage()
  });

  Then("click on pay now", () => {
    MTNPlaySubscription.clickonPayNow()
  });
  