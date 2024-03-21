import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";
import EBpage from "../../pages/EBpage";

//Navigate to SelfService Enterprises Business Application URL
Given("Navigate to SelfService Enterprises Business Application URL for Outstanding Bill Payment", () => {
  commonPage.navigateTo_SelfService_URL()
  });

//Users login to SelfService EB -Bill Payment Application with Account ID
When("Users login to SelfService EB -Bill Payment Application with Account ID for Outstanding Bill Payment", () => {
  commonPage.redirectOnWebBillPage()
  commonPage.enterWebBillsAccountID() 
});
//Validate EB User logged in Successful
Then("EB Validate User logged in Successful for Outstanding Bill Payment", () => {
  commonPage.validateSSP_EnterprisesBusinessLoginSuccess() 
});
//Validate pay total outstading amount
When("Validate the invoice sum and autopopulated Outstanding amount for Outstanding Bill Payment", () => {
  EBpage.validateInvoiceAutopopulateOnTotalOutstadingTab()
});
Then("Validate that page is carrying the total outstading amount on checkout page", () => {
  EBpage.proceedForPayTotalOuststaingAmount()
  EBpage.enterMobileNo()
  EBpage.getTotalCheckoutAmount()
  EBpage.validateTotalOuststandingAmountWithTotalCheckoutAmount()

});
When("Make Complete Outstanding Bill Payment by Card", () => {
  EBpage.payNowforPaymentGateway()
  commonPage.enterCardDetailsWithPIN_TestPayMTN_SSP()
});
Then("Validate Generated 1RCT Number for Complete Outstanding Payment", () => {
  commonPage.validatePaymentSuccessMessage()
  commonPage.captureTransactionID()
  commonPage.captureReceiptNo1RCT()
})
When("Validate Complete Outstanding Payment Fulfilment", () => {
  EBpage.backtoHomeWebBills()
  commonPage.enterWebBillsAccountID()
  commonPage.validateSSP_EnterprisesBusinessLoginSuccess() 
  EBpage.validateCompleteOutstandingPayementFulfilment()
})