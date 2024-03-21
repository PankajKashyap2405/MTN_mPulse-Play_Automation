import { Given, When, Then, DataTable, addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import { Basepage } from "../../../support/basepage";
import customerBillingAddressPage from "../../pages/customerBillingAddressPage";

// Navigate to Application URL
//Users login to Application with email
//User clicks on your account
//User clicks on manage profile

//User clicks on manage address
When("User clicks on manage address",()=>{
    customerBillingAddressPage.clickonmanageAddress()
})

//User clicks on Billing address
When("User clicks on Billing address",()=>{
    customerBillingAddressPage.clickonbillingAddress()
})

//User clicks on Add new address
When("User clicks on Add new address",()=>{
    customerBillingAddressPage.clickonaddNewAddress()
})

//User types First Name
When("User types First Name",()=>{
    customerBillingAddressPage.clickOnFirstName()
})

//User types Last Name 
When("User types Last Name",()=>{
    customerBillingAddressPage.clickOnLastName()
})

//User types Street Address     
When("User types Street Address",()=>{
    customerBillingAddressPage.clickOnstreetAddress()
})

//User select State
When("User select State",()=>{
    customerBillingAddressPage.clickOnState()
})

//User select City
When("User select City",()=>{
    customerBillingAddressPage.clickOnCity()
})

//User types Phone Number
When("User types Phone Number",()=>{
    customerBillingAddressPage.clickOnphoneNumber()
})

//User clicks on Add new Button
When("User clicks on Add new Button",()=>{
    customerBillingAddressPage.clickOnaddNewBtn()
})

//User clicks All section
When("User clicks All section",()=>{
    customerBillingAddressPage.clickOnallSectionLink()
})

//Validate user address
Then("Validate user address",()=>{
    customerBillingAddressPage.validateAddress()
})

//Users click on Edit 
When("Users click on Edit",()=>{
    customerBillingAddressPage.clickonEdit()
})

//User types another first Name 
When("User types another first Name",()=>{
    customerBillingAddressPage.clickOneditFirstName()
})

//User clicks on save Button
When("User clicks on save Button",()=>{
    customerBillingAddressPage.clickOnsaveBtn()
})

//Validate user can edit Billing address
Then("Validate user can edit Billing address",()=>{
    customerBillingAddressPage.validateeditAddress()
})

//User remove Billing address
When("User remove Billing address",()=>{
    customerBillingAddressPage.clickonRemove()
})

//User clicks on Ok Button
When("User clicks on Ok Button",()=>{
    customerBillingAddressPage.clickonokBtn()
})

//Validate user can delete Billing address
Then("Validate user can delete Billing address",()=>{
    customerBillingAddressPage.validateDeleted()
})
