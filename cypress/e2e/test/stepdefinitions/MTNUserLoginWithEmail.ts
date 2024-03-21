import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";

//Navigate to Application URL

Given("Navigate to Application URL", () => {
  commonPage.navigateToAplication()
  });

//Users login to Application with email
When("Users login to Application with email", () => {
  commonPage.loginMTNApplicationWithEmail() 
});

//Validate User Account links
Then("Validate User Account links",() =>{
  homepage.clickOnAccountAtLoginUser()
});

//Users logout the application
When("Users logout Application", () => {
  commonPage.logoutApplication() 
});
//*Users login to Application with invalid email

When("User login to application with invalid email and validate error message",() =>{
  commonPage.loginMTNApplicationWithInvalidEmail()
});


