import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import LoginPage from "../../pages/AdminLoginPage";

When("Navigate to Logistics Admin Application URL",()=>{

    commonPage.logisticsAdminURLLaunch()
})
When("User login to Logistics Admin Application", ()=>{

    LoginPage.AdminLogin()
})

Then ("Validate user sucessfully logged into application",()=>{
    
    LoginPage.ValidateUserlogin()
}) 

When ("User clicks on Logoutbutton", ()=>{

    LoginPage.AdminLogout()
})
Then ("Validate user logged off sucessfully",()=>{

    LoginPage.ValidateAdminLoginScreen()
})
