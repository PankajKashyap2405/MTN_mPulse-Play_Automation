import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import playhomepage from "../../pages/playhomepage";
 

Then("validate video banners",()=>{
   playhomepage.validatevideos()
})

Then("click on video banner and validate",()=>{
   playhomepage.clcikOnvideobannner()
})

Then("click on MTN logo",()=>{
   playhomepage.clickOnMTNLogo()
})

Then("click on view all and validate",()=>{
   playhomepage.clickandvalidateViewall()
})





