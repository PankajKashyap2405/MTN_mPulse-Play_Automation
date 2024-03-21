import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import MTNmPulseParentAirtimeRcg from "../../pages/MTNmPulseParentAirtimeRcg";


When("parent clicks on recharge button", () => {
   MTNmPulseParentAirtimeRcg.clickOnRechargeBtn()
  });

Then("Validate Recharge page is displayed", () => {
   MTNmPulseParentAirtimeRcg.validateRechrgePageIsDisplayed()
  });

Then("Validate AirtimeRchrge page elements", () => {
    MTNmPulseParentAirtimeRcg.ValiadteRechargePageElements
   });

   When("Parent selects the 200 amount", () => {
    MTNmPulseParentAirtimeRcg.ClickOn200Btn()
   }); 
   
   Then("validate 200 is displayed in amount field", () => {
    MTNmPulseParentAirtimeRcg.ValiadteSelectedAmountisDisplayed()
   });

   When("parent click on recharge button", () => {
    MTNmPulseParentAirtimeRcg.clickOnRchrgeBtn()
   }); 

   Then("validate cart page is displayed", () => {
    MTNmPulseParentAirtimeRcg.validateCartPageisDisplayed()
   });