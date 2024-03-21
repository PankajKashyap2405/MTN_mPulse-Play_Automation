import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import MTNmPulseParentDashboard from "../../pages/MTNmPulseParentDashboard";



  Then("Validate Parent dashboard is displayed", () => {
    MTNmPulseParentDashboard.validateParentDashboard()
  });

  Then("validate components in dashboard Name,number,Data,Airtime,tarrif,account,buybundle,recharge,editprofile", () => {
    MTNmPulseParentDashboard.validateDashboardCompnents()
  });

  When("user clicks on edit profile page", () => {
    MTNmPulseParentDashboard.clickOnEditProfilePage()
  });

  Then("Validate Edit profile page is dispalyed", () => {
    MTNmPulseParentDashboard.validateEditProfilePageisDsiplayed()
  });

  Then("Validate edit profile page components", () => {
    MTNmPulseParentDashboard.validateEditProfilepageComponents()
  });

  When("parent updated his first name", () => {
    MTNmPulseParentDashboard.updateTheFirstnamefield()
  });

  Then("validate firstname is updated", () => {
    MTNmPulseParentDashboard.valiadateSuccesMsg()
  });

  Then("Validate the firstname is updated in dashboard", () => {
    MTNmPulseParentDashboard.validateFirstname()
  });
  
  When("parent clicks on buybundle page", () => {
    MTNmPulseParentDashboard.clickOnBuyBndle()
  });

  Then("validate buy bundle page is dsiplayed", () => {
    MTNmPulseParentDashboard.validateBuybundlePageisDisplayed()
  });

  Then("navigate back to home page and click on recharge button", () => {
    MTNmPulseParentDashboard.ClickOnRechargeButn()
  });

  Then("validate Airtime rechrage page is displayed", () => {
    MTNmPulseParentDashboard.ValidateRechragePageIsDsiplayed()
  });

  Then("Navigae back to homepage", () => {
    MTNmPulseParentDashboard.navigateToHomepage()
  });


  