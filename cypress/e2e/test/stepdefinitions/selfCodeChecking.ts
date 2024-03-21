import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import self_servicePage from "../../pages/self_servicePage";
import SSP_BulkSMSCorpPage from "../../pages/SSP_BulkSMSCorpPage";

Given("Navigate to self test Application URL", () => {
    commonPage.navigateToSelfServiceBulkSMSCorporateAplicationURL()
    commonPage.validateloginSelfServiceBulkSMSCorporateApplicationWithGoogleCredentials()
  });
When("All Steps", () => {
  SSP_BulkSMSCorpPage.gotoHistoryforTransactionID()
  //SSP_BulkSMSCorpPage.validateTransactionIDwithHistroyforUSSD_hardcoded()
  
});
Then("Last Step", () => {
 // SSP_BulkSMSCorpPage.selectUSSDproduct() 
  SSP_BulkSMSCorpPage.checkUpdatedBalanceAfterBuyforUSSD()
});
