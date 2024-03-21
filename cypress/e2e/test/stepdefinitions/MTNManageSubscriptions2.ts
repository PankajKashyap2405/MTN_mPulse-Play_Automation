import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import { Basepage } from "../../../support/basepage";
import ManageSubscriptionsPage2 from "../../pages/ManageSubscriptionsPage2";


//User clicks Manage Subscriptions
When("User clicks Manage Subscriptions",()=>{
    ManageSubscriptionsPage2.clickonSubscription()
})

//Validate new user was successfully added
Then("Validate new user was successfully added",()=>{
    ManageSubscriptionsPage2.validatenewUser()
})