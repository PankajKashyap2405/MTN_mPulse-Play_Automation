import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";
import SSP_BulkSMSCorpPage from "../../pages/SSP_BulkSMSCorpPage";

//Navigate to SelfService Bulk SMS Corporate Application URL

Given("Navigate to SelfService Bulk SMS Corporate Application URL", () => {
  commonPage.navigateToSelfServiceBulkSMSCorporateAplicationURL()
  });

//Users login to SelfService Bulk SMS Application with username and password
When("Validate User login to SelfService Bulk SMS Corporate Application with credentials", () => {
  commonPage.validateloginSelfServiceBulkSMSCorporateApplicationWithGoogleCredentials() 
});

Then("Select SMS Product Account", () => {
  SSP_BulkSMSCorpPage.selectSMSproduct() 
});

When("Capture SMS Opening Balance", () => {
  SSP_BulkSMSCorpPage.captureOpeningSMSBalance() 
});

Then("Capture SMS Rate Card Details", () => {
  SSP_BulkSMSCorpPage.captureRateCardDetails() 
});

When("Select SMS Rate Card", () => {
  SSP_BulkSMSCorpPage.selectToBuyRateCard() 
});

Then("Validate SMS Carry Amount on Checkout page", () => {
  SSP_BulkSMSCorpPage.validateCarryProductAmount_checkoutAmount() 
});

When("Validate SMS checkout Amount with Tax", () => {
  SSP_BulkSMSCorpPage.validatecheckoutAmountwithTax() 
});
Then("Pay for SMS", () => {
  SSP_BulkSMSCorpPage.payCheckoutAmount() 
});

When("Select card and enter Card Details for SMS Purchase", () => {
  commonPage.enterCardDetailsWithPIN_TestPayMTN_SSP()
});

Then("Validate successful payment for SMS", () => {
  commonPage.validatePaymentSuccessMessage()
  SSP_BulkSMSCorpPage.captureTransactionID()
});
When("Validate Generated Transaction ID with History for SMS", () => {
  
  SSP_BulkSMSCorpPage.gotoHistoryforTransactionID()
  SSP_BulkSMSCorpPage.validateTransactionIDwithHistroyforSMS()
})
Then("Check Update Balance After Buy SMS", () => {
  SSP_BulkSMSCorpPage.checkUpdatedBalanceAfterBuyforSMS() 
});
