import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import Volunteer from "../../pages/Volunteer";

When("Given Navigate Application URL",()=>{

    commonPage.OmdollarsURLLaunch()
})
When("Volunteer Register to Omdollars Application", ()=>{

    Volunteer.OmdollarsVolunteerRegister()
})
Then("Validate Volunteer sucessfully Register into application",()=>{
    Volunteer.omdollarsRegistervalidate()
})

When("Volunteer login to Omdollars Application", ()=>{
    Volunteer.omdollarsVolunteerLogin()
})

Then ("Validate Volunteer sucessfully logged into application",()=>{
    Volunteer.OmdollarsValidateVolunteer()
}) 

