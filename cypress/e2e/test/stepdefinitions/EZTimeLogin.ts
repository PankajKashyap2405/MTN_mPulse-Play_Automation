import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import LoginPage from "../../pages/EZTimePage";

When("Navigate to eztime Application URL",()=>{

    commonPage.EztimeURLLaunch()
})
When("User login to eztime Application", ()=>{

    LoginPage.EztimeApplicationLogin()
})

Then ("Validate user sucessfully logged into eztime application",()=>{
    
    LoginPage.Validateeztimelogin()
}) 

When ("User click on Logout button", ()=>{

    LoginPage.eztimeApplicationLogout()
})
Then ("Validate user logged off eztime application",()=>{

    LoginPage.ValidateLoginBackScreen()
})
