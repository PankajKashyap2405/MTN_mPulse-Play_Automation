import { Given, When, Then, DataTable, addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import { Basepage } from "../../../support/basepage";
import MenuLabellingPage from "../../pages/MenuLabellingPage";


// Navigate to Application URL

//Validate the Cart Icon
Then("Validate the Cart Icon",()=>{
    MenuLabellingPage.ValidatecartIcon()
})

//When User clicks on account
When("User clicks on account",()=>{
    MenuLabellingPage.ClickonAccount()
})

//Validate that The description of the account icon shall be displayed as Login
Then("Validate that The description of the account icon shall be displayed as Login",()=>{
    MenuLabellingPage.ValidateLogin()
})