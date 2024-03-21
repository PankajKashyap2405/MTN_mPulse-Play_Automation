import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";
import EBpage from "../../pages/EBpage";

Given("Navigate to SelfService Enterprises Business Application URL for Edited Invoice Payment", () => {
  commonPage.navigateTo_SelfService_URL()
  });

When("Users login to SelfService EB -Bill Payment Application with Account ID for Edited Invoice Payment", () => {
  commonPage.redirectOnWebBillPage()
  commonPage.enterWebBillsAccountID() 
});

Then("EB Validate User logged in Successful for Edited Invoice Payment", () => {
  commonPage.validateSSP_EnterprisesBusinessLoginSuccess() 
});

When("Validate the invoice sum and autopopulated Outstanding amount for Edited Invoice Payment", () => {
  EBpage.validateInvoiceAutopopulateOnTotalOutstadingTab()
});
Then("User select Invoice option for pay Edited Invoice", () => {
  EBpage.editedInvoiceForCustomPayment()
  EBpage.enterMobileNo()
});

When("Validate checkout page Summary and Pay for Edited Invoice", () => {
  EBpage.getBillAmountonCheckout()
  EBpage.getEditedTotalCheckoutAmountforCustom()
});
Then("Make Payment for Edited Invoice by Card", () => {
  EBpage.payNowforPaymentGateway()
  commonPage.enterCardDetailsWithPIN_TestPayMTN_SSP()
});

When("Validate Generated 1RCT Number for Edited Invoice", () => {
  commonPage.validatePaymentSuccessMessage()
  commonPage.captureTransactionID()
  commonPage.captureReceiptNo1RCT()
});
Then ("Validate Edited Invoice fulfilment", () => {
  EBpage.backtoHomeWebBills()
  commonPage.enterWebBillsAccountID()
  commonPage.validateSSP_EnterprisesBusinessLoginSuccess()
  EBpage.validateCustomPayementfulfilmentforEditedInvoice()

})
