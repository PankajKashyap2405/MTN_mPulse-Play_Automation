import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";
import SSP_BulkSMSCorpPage from "../../pages/SSP_BulkSMSCorpPage";

//Navigate to SelfService Bulk SMS Corporate Application URL

Given("Navigate to SelfService Bulk USSD Corporate Application URL", () => {
  commonPage.navigateToSelfServiceBulkSMSCorporateAplicationURL()
  });

//Users login to SelfService Bulk SMS Application with username and password
When("Validate User login to SelfService Bulk USSD Corporate Application with credentials", () => {
  commonPage.validateloginSelfServiceBulkSMSCorporateApplicationWithGoogleCredentials() 
});

Then("Select USSD Product Account", () => {
  SSP_BulkSMSCorpPage.selectUSSDproduct() 
});

When("Capture USSD Opening Balance", () => {
  SSP_BulkSMSCorpPage.captureOpeningUSSDBalance() 
});

Then("Capture USSD Rate Card Details", () => {
  SSP_BulkSMSCorpPage.captureRateCardDetails() 
});

When("Select USSD Rate Card", () => {
  SSP_BulkSMSCorpPage.selectToBuyRateCard() 
});

Then("Validate USSD Carry Amount on Checkout page", () => {
  SSP_BulkSMSCorpPage.validateCarryProductAmount_checkoutAmount() 
});

When("Validate USSD checkout Amount with Tax", () => {
  SSP_BulkSMSCorpPage.validatecheckoutAmountwithTax() 
});
Then("Pay for USSD", () => {
  SSP_BulkSMSCorpPage.payCheckoutAmount() 
});

When("Select card and enter Card Details for USSD Purchase", () => {
  commonPage.enterCardDetailsWithPIN_TestPayMTN_SSP()
});

Then("Validate successful payment for USSD Purchase", () => {
  commonPage.validatePaymentSuccessMessage()
  SSP_BulkSMSCorpPage.captureTransactionID()
});
When("Validate Generated Transaction ID with History for USSD", () => {
  SSP_BulkSMSCorpPage.gotoHistoryforTransactionID()
  SSP_BulkSMSCorpPage.validateTransactionIDwithHistroyforUSSD()
})
Then("Check Updated Balance After Buy USSD", () => {
  SSP_BulkSMSCorpPage.checkUpdatedBalanceAfterBuyforUSSD() 
});
