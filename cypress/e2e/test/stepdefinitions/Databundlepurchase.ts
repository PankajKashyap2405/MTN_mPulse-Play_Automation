import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

import commonPage from "../../pages/commonPage";

import homepage from "../../pages/homePage";

Then("validate device data price and description",()=>{
     homepage.validateDataPriceDescription()
})

When("click on the select button",()=>{
  homepage.clickOndataSelectButton()
})

When("user clicks on the enter number",()=>{
  homepage.clickOnEnternumber()
})

When("enter the wrong mobile number in the number field",()=>{
  homepage.enterWrongMobileNumber()
})

Then("validate wrong number error message",()=>{
  homepage.validateWrongNumbererrorMsg()
})

When("enter the valid mobile number",()=>{
  homepage.enterMobileNumber()
})


Then("validate add to cart",()=>{
  homepage.validateProceedToCheckoutbutton()
})


Then("validate sign in error message",()=>{
  homepage.validateSignInErrormsg()
})
When("click on make payment buttton",()=>{
   homepage.clickOnMakePaymentbutton()
})







