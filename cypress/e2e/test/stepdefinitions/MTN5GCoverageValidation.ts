import { Given, When, Then, DataTable, addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import { Basepage } from "../../../support/basepage";
import MTN5GCoveragePage from "../../pages/5GCoveragePage";

// Navigate to Application URL
//Users login to Application with email

//User clicks on 5G Broadband Router
When("User clicks on 5G Broadband Router",()=>{
    MTN5GCoveragePage.clickonbroadbandRouter()
})

//User click on check your network coverage here
When("User click on check your network coverage here",()=>{
    MTN5GCoveragePage.clickonCoverage()
})

//User clicks X on the coverage page
When("User clicks X on the coverage page",()=>{
    MTN5GCoveragePage.clickonxBtn()
})

//validate the 5G Network
When("validate the 5G Network",()=>{
    MTN5GCoveragePage.validateNetwork()
})

