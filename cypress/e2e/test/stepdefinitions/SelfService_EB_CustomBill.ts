import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";
import EBpage from "../../pages/EBpage";

Given("Navigate to SelfService Enterprises Business Application URL for CustomPayment", () => {
  commonPage.navigateTo_SelfService_URL()
  });

When("Users login to SelfService EB -Bill Payment Application with Account ID for CustomPayment", () => {
  commonPage.redirectOnWebBillPage()
  commonPage.enterWebBillsAccountID() 
});

Then("EB Validate User logged in Successful for CustomPayment", () => {
  commonPage.validateSSP_EnterprisesBusinessLoginSuccess() 
});

When("Validate the invoice sum and autopopulated Outstanding amount for Custom Payment", () => {
  EBpage.validateInvoiceAutopopulateOnTotalOutstadingTab()
});
Then("User select Invoice option for pay custom Invoice amount", () => {
  EBpage.selectWholeInvoiceForCustomPayment()
  EBpage.enterMobileNo()
});

When("Validate checkout page Summary and Pay for Custom Payment", () => {
  EBpage.getBillAmountonCheckout()
  EBpage.getTotalCheckoutAmountforCustom()
});
Then("Make Custom Payment by Card", () => {
  EBpage.payNowforPaymentGateway()
  commonPage.enterCardDetailsWithPIN_TestPayMTN_SSP()
});

When("Validate Generated 1RCT Number for Custom Payment", () => {
  commonPage.validatePaymentSuccessMessage()
  commonPage.captureTransactionID()
  commonPage.captureReceiptNo1RCT()
});
Then ("Validate Custom Payment fulfilment", () => {
  EBpage.backtoHomeWebBills()
  commonPage.enterWebBillsAccountID()
  commonPage.validateSSP_EnterprisesBusinessLoginSuccess()
  EBpage.validateCustomPayementfulfilmentforWholeInvoice()

})
