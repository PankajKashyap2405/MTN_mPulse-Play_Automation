import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";
import EBpage from "../../pages/EBpage";

//Navigate to SelfService Enterprises Business Application URL
Given("Navigate to SelfService Enterprises Business Application URL for ExcessPayment", () => {
  commonPage.navigateTo_SelfService_URL()
  });

//Users login to SelfService EB -Bill Payment Application with Account ID
When("Users login to SelfService EB -Bill Payment Application with Account ID for ExcessPayment", () => {
  commonPage.redirectOnWebBillPage()
  commonPage.enterWebBillsAccountID() 
});

//Validate EB User logged in Successful
Then("EB Validate User logged in Successful for ExcessPayment", () => {
  commonPage.validateSSP_EnterprisesBusinessLoginSuccess() 
});
//Validate pay total outstading amount
When("Validate the invoice sum and autopopulated Outstanding amount for Excess Payment", () => {
  EBpage.validateInvoiceAutopopulateOnTotalOutstadingTab()
  EBpage.captureExistingExcessAmount()
});
Then("Enter Extra amount for Excess Payment", () => {
  EBpage.enterExcessPayment()
  EBpage.enterMobileNo()
});
When("Validate that page is carrying the excess and outstading amount on checkout page", () => {
  EBpage.validatecarryExcessAndOutstadingAmount()
});
Then("Validate checkout page Summary and Pay for Excess Payment", () => {
  EBpage.getBillAmountonCheckout()
  EBpage.getAdditionalAmountonCheckout() 

});
When("Make Excess payment by Card", () => {
  EBpage.payNowforPaymentGateway()
  commonPage.enterCardDetailsWithPIN_TestPayMTN_SSP()
});
Then("Validate Generated 1RCT Number for Excess Payment", () => {
  commonPage.validatePaymentSuccessMessage()
  commonPage.captureTransactionID()
  commonPage.captureReceiptNo1RCT()
})
When("Validate excess payment fulfilment", () => {
  EBpage.backtoHomeWebBills()
  commonPage.enterWebBillsAccountID()
  commonPage.validateSSP_EnterprisesBusinessLoginSuccess() 
  EBpage.validateExcessPayementfulfilment()
})
