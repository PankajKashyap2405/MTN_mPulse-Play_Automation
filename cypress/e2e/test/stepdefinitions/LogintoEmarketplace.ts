import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";

import Emarketpage from "../../pages/Emarketpage";



When("user click on register link on the login page",()=>{
   commonPage.clickRegisterlink()
})

Then("click on continue button and validate error message",()=>{
   Emarketpage.validateErrorMesage()
})

When("user fill the details and validate password error messages",()=>{
    Emarketpage.fillingdetails()
})

When("user click on interest terms and submit buttons",()=>{
   Emarketpage.clickOnInterestTermsAndSubmit()
})

Then("validate successful pop up",()=>{
   Emarketpage.valiadteSucessmsg()
})

Then("click on account and validate edit",()=>{
   Emarketpage.clickOnAccountandvalidatingedit()
})