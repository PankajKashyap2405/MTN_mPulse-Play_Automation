import ProductListPgFn from "../../pages/ProductListPgFn";
import {Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";

When("user clicks on data button on the home page",()=>{
     ProductListPgFn.clickonDataButton()
})

Then("validate the data bundle page is displayed",()=>{
       ProductListPgFn.validateDataBundleListingPage()
})

