import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import MTNNewuserRegistration from "../../pages/MTNNewuserRegistrationpage";

//  Navigate to Application URL

// When user clicks on Account option
When("user clicks on Account option",()=>{
    MTNNewuserRegistration.clicksonAccountoption()
})  

// Then Validate clicks on login,they will be re-directed to Auth0 platform
Then("Validate clicks on login,they will be re-directed to Auth0 platform",()=>{
    MTNNewuserRegistration.clicksonlogin()
})

// Then Validate that User will have the option to login with Facebook 
Then("Validate that User will have the option to login with Facebook",()=>{
    MTNNewuserRegistration.viewloginwithFacebook()
})

// Then Validate that User will have the option to login with Google 
Then("Validate that User will have the option to login with Google",()=>{
    MTNNewuserRegistration.viewloginwithGoogle()
})

//Then Validate that User will have the option to login with Mobile Number
Then("Validate that User will have the option to login with Mobile Number",()=>{
    MTNNewuserRegistration.viewloginwithMobileNumber()
})

//Then Validate that User will have option to login with existing user
Then("Validate that User will have option to login with existing user",()=>{
    MTNNewuserRegistration.viewloginWithExistingUser()
})

//Then Validate that User will have the option to register new user
Then("Validate that User will have the option to register new user",()=>{
    MTNNewuserRegistration.viewregisterNewUser()
})

//When User clicks on Register now
When("User clicks on Register now",()=>{
    MTNNewuserRegistration.selectclicksonRegisterNow()
})

//Then Validate that they will be re-directed to KYC Information Autho platform 
Then("Validate that they will be re-directed to KYC Information Autho platform",()=>{
    MTNNewuserRegistration.viewkYCInformation()
})

//Then Validate that To register new user, user has to provide their Email 
Then("Validate that To register new user, user has to provide their Email",()=>{
    MTNNewuserRegistration.testprovideTheirEmail()
})

//Then Validate that User has to fill the below Mandatory information, Username, Password, Confirm Password, First name and Last name
Then("Validate that User has to fill the below Mandatory information, Username, Password, Confirm Password, First name and Last name",()=>{
    MTNNewuserRegistration.testmandatoryInformationUserName()
    MTNNewuserRegistration.testmandatoryInformationPassword()
    MTNNewuserRegistration.testmandatoryInformationConfirmPassword()
    MTNNewuserRegistration.testmandatoryInformationFirstName()
    MTNNewuserRegistration.testmandatoryInformationLastName()
})

//Then Validate that user is able to select no Option
Then("Validate that user is able to select no Option",()=>{
    MTNNewuserRegistration.selectnoOption()
})

//Then Validate User is able to click on continue
Then("Validate User is able to click on continue",()=>{
    MTNNewuserRegistration.userclickOnContinue()
})

// Then Validate User is able to select Software Digital Service For his or her interest
Then("Validate User is able to select Software Digital Service For his or her interest",()=>{
    MTNNewuserRegistration.selectSoftwareDigitalService()
})

//Then Validate that User is able to click the teams and condition  
Then("Validate that User is able to click the teams and condition",()=>{
    MTNNewuserRegistration.clickteamsandCondition()
})

//Then Validate that Upon successful submission of details
Then ("Validate that Upon successful submission of details",()=>{
    MTNNewuserRegistration.clicksubmissionofDetails()
})

//Then Validate If the email address is already in use, the customer shall get notified
Then ("Validate If the email address is already in use, the customer shall get notified",()=>{
    MTNNewuserRegistration.validateemailAddressisAlreadyinUse()
})

//Then Validate that user is able to click on the back button icon
Then ("Validate that user is able to click on the back button icon",()=>{
    MTNNewuserRegistration.clickbackButtonIcon()
})

//Then Validate that user is able to click on Rigister now 
Then ("Validate that user is able to click on Rigister now",()=>{
    MTNNewuserRegistration.clickrigisterNow()
})

//Then Validate that User has to fill the below Mandatory information, Email address that have not be used previously, Username, Password, Confirm Password, First name and Last name
Then ("Validate that User has to fill the below Mandatory information, Email address that have not be used previously, Username, Password, Confirm Password, First name and Last name",()=>{
    MTNNewuserRegistration.inputemailAddressThatHaveNotBeUsedPreviously()
    MTNNewuserRegistration.provideUsername()
    MTNNewuserRegistration.providePassword()
    MTNNewuserRegistration.provideconfirmPassword()
    MTNNewuserRegistration.providefirstName()
    MTNNewuserRegistration.providelastName()
})

//Then Validate that user is able to select business no Option
Then ("Validate that user is able to select business no Option", ()=>{
    MTNNewuserRegistration.selectbusinessnoOption()
})

//Then Validate User is able to click on continue option
Then ("Validate User is able to click on continue option", ()=>{
    MTNNewuserRegistration.clickcontinueOption()
}) 

//Then Validate User is able to select social Media
Then ("Validate User is able to select social Media", ()=>{
    MTNNewuserRegistration.clicksocialMedia()
})

//Then Validate that app user click on the terms and condition
Then ("Validate that app user click on the terms and condition", ()=>{
    MTNNewuserRegistration.thenclickonTheTermsandCondition()
}) 

//Validate that Upon successful submission of details details
Then ("Validate that Upon successful submission of details details", ()=>{
    MTNNewuserRegistration.clicksubmissionofdetails
})