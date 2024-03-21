import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import { Basepage } from "../../../support/basepage";
import myAccountPage from "../../pages/myAccountPage";

// Navigate to Application URL
//Users login to Application with email

//User clicks on your account
When("User clicks on your account",()=>{
    myAccountPage.clickonAccount()
})

//User clicks on manage profile
When("User clicks on manage profile",()=>{
    myAccountPage.clickonmanageProfile()
})

//User clicks on manage number
When("User clicks on manage number",()=>{
    myAccountPage.clickonmanageNumber()
})

//Validate that no number has been added for a newly registered User
Then("Validate that no number has been added for a newly registered User",()=>{
    myAccountPage.validateNumber()
})

//User clicks on Add new number
When("User clicks on Add new number",()=>{
    myAccountPage.clickonaddNewNumber()
})

//User types name
When("User types name",()=>{
    myAccountPage.clickOnName()
})

//User types Mobile number
When("User types Mobile number",()=>{
    myAccountPage.clickOnmobileNumber()
})

//User types OTP
When("User types OTP",()=>{
    myAccountPage.clickOnOTP()
})

//User clicks on submit button
When("User clicks on submit button",()=>{
    myAccountPage.clickOnsubmitBtn()
})

//Validate that a user was successfully added
Then("Validate that a user was successfully added",()=>{
    myAccountPage.validateUser()
})

//User clicks on Edit
When("User clicks on Edit",()=>{
    myAccountPage.clickonEdit()
})

//User edit name of numbers added
When("User edit name of numbers added",()=>{
    myAccountPage.clickOneditName()
})

//User clicks on submit button 1
When("User clicks on submit button 1",()=>{
    myAccountPage.clickOnsubmitBtn1()
})

//User clicks on Delete
When("User clicks on Delete",()=>{
    myAccountPage.clickonDelete()
})

//User clicks Ok
When("User clicks Ok",()=>{
    myAccountPage.clickonOk()
})

//Validate that user details should not display again
Then("Validate that user details should not display again",()=>{
    myAccountPage.validateuserDetails()
})