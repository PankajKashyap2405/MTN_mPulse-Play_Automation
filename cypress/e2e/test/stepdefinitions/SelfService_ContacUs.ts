import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import self_servicePage from "../../pages/self_servicePage";

Given("Navigate to SelfService URL to Validate Contact Us page details", () => {
  commonPage.navigateTo_SelfService_URL()
  });
When("User navigate to Contact Us page through footer link on SelfService portal", () => {
  self_servicePage.clickOnFooterlinkofContactUs() 
});
Then("Validate the URL and breadcrumb", () => {
  self_servicePage.validateContactUspageURL() 
});
When("Validate the contact Icons", () => {
  self_servicePage.validateContactIcons() 
});
Then("Validate the contact Email details", () => {
  self_servicePage.validateContactEmailDetails()
});
When("Validate the contact Address Details", () => {
  self_servicePage.validateContactAddressDetails() 
});
Then("Validate the contact Number Details", () => {
  self_servicePage.validateContactNumberDetails() 
});
When("Validate the Page Headings", () => {
  self_servicePage.validatePageHeadings() 
});
Then("Enter and validate details in form", () => {
  self_servicePage.enterAndValidateFormDetails() 
});
When("Submit form after filling", () => {
  self_servicePage.submitForm() 
});
Then("Validate the Successful Submittion of the form", () => {
  self_servicePage.validateSucessful_Submittion_of_Form() 
});
