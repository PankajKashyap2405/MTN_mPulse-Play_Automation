import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Basepage } from "../../../support/basepage";
import rechargetransactionPage from "../../pages/rechargetransactionPage";

//Navigate to Application URL
//Users login to Application with username

//User clicks on username
When ("User clicks on username",()=>{
    rechargetransactionPage.clickOnusername()
})

//User clicks on manage profile 
When ("User clicks on manage profile",()=>{
    rechargetransactionPage.clickOnmanageprofile()
})

//User clicks on My transaction history 
When ("User clicks on My transaction history",()=>{
    rechargetransactionPage.clickOnmytransactionhistory()
})

//User clicks on Recharge 
When ("User clicks on Recharge",()=>{
    rechargetransactionPage.clickOnrecharge()
})

//User Validates RechargetransactionDetails 
When ("User Validates the Recharge Transactions",()=>{
    rechargetransactionPage.validateRechargetransactionDetails()
})