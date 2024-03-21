import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
//import { data } from "cypress/types/jquery";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";


//Users login to Application with google account
When("Users login to Application with google account", () => {
  commonPage.loginMTNApplicationWithGoogleAccount() 
});
