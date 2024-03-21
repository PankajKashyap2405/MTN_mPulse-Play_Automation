import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import LoginPage from "../../pages/OmdollarsPage";

When("Navigate to Omdollars Application URL",()=>{

    commonPage.OmdollarsURLLaunch()
})
When("Project Owneer login to Omdollars Application", ()=>{

    LoginPage.OmdollarsProjectOwnerLogin()
})

Then ("Validate Project Owner sucessfully logged into application",()=>{
    
    LoginPage.ValidateProjectOwnerlogin()
}) 

When ("User clicks on Logout button", ()=>{

    LoginPage.OmdollarsLogout()
})
Then ("Validate Project Owner logged off sucessfully",()=>{

    LoginPage.ValidateLoginScreen()
})
