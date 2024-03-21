import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import commonPage from "../../pages/commonPage";

//Navigate to Paly Application URL

Given("Navigate to Paly Application URL", () => {
  commonPage.navigateToPlayAplication()
  });

//Users login to Play Application with username
When("Users login to Play Application with username", () => {
  commonPage.userAuthenticationToPlayAplication() 
});

//Validate User Login success
Then("Validate User login Success",() =>{
  homepage.validatePlayLogin()
});

//Validate Banner on Paly Home page
Then("Validate Banner on Paly Home page",() =>{
  homepage.validateBanneronPlayHomePage()
  //homepage.validateBannerNavigatedMdundo()
});
//Users logout the play application
//When("Users logout Play Application", () => {
  //homepage.logoutPlayApplication() 
//});
When ("user click on Fooler link and navigate back to home page",()=>{
  homepage.navigatetoHomePage()
})
