import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import playhomepage from "../../pages/playhomepage";



Then("validate music banners",()=>{
  playhomepage.validateMusicBanner()
})

Then("click on music banner and validate",()=>{
  playhomepage.clickOnMusicBannerandValidate()
})

Then("click on view all in music and validate",()=>{
  playhomepage.clickAndValidateViewallMusic()
})

