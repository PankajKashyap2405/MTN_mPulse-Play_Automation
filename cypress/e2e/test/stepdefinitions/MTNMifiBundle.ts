import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Basepage } from "../../../support/basepage";
import mifibundlePage from "../../pages/mifibundlePage";

//Navigate to Application URL
//Users login to Application with email

//User clicks on Data Button
When ("User clicks on Data Button",()=>{
    mifibundlePage.clickOndatabutton()
})

//User clicks on Broadband Bundles 
When ("User clicks on Broadband Bundles",()=>{
    mifibundlePage.clickOnbroadbandbundles()
})

//User clicks on Mifi Bundles 
When ("User clicks on Mifi Bundles",()=>{
    mifibundlePage.clickOnmifibundles()
})

//User Validates DataBundleResults 
When ("User Validates the 6GB Monthly Broadband Plan",()=>{
    mifibundlePage.validateDatabundleResults()
})