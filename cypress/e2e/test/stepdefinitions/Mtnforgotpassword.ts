import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";

import Emarketpage from "../../pages/Emarketpage";



When("user click on register link and navigate to login page",()=>{
 Emarketpage.clickOnRegisterlink()
})

Then("validate sign in with facebook and google and login with mobile number",()=>{
  Emarketpage.validatesignInwithGoogleFacebook()
})

When("click on forgot password",()=>{
 Emarketpage.clickOnforgotpd()
})

When("click on enter email and entering the email and click on send email",()=>{
  Emarketpage.enteringEmail()
})