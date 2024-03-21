import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import playhomepage from "../../pages/playhomepage";



Then("validate games banners",()=>{
  playhomepage.validateGamesBanner()
})

Then("click on games banner and validate",()=>{
  playhomepage.clickOnGamesBannerandValidate()
})

Then("click on view all in games and validate",()=>{
  playhomepage.clickAndValidateViewallgames()
})