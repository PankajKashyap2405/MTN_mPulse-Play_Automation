import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import playhomepage from "../../pages/playhomepage";



Then("validate Lifestyle banners",()=>{
  playhomepage.validateLifestyleBanner()
})

Then("click on Lifestyle banner and validate",()=>{
  playhomepage.clickOnLifestyleBannerandValidate()
})

Then("click on view all in Lifestyle and validate",()=>{
  playhomepage.clickAndValidateViewallLifestyle()
})