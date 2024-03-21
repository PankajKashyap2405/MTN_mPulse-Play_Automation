import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Basepage } from "../../../support/basepage";
import bundlecataloguePage from "../../pages/bundlecataloguePage";

//Navigate to Application URL
//Users login to Application with email

//User clicks on Data Bundles button
When ("User clicks on Data Bundles button",()=>{
    bundlecataloguePage.clickOndatabundle()
})

//User Validates DatabundleResultsLabel
Then ("User Validates the Xtratalk 10000 Monthly Bundle",()=>{
    bundlecataloguePage.validateDatabundleResultsLabel()
})