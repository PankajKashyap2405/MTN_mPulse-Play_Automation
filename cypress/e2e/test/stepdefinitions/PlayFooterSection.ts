import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import PlayFooter from "../../pages/PlayFooter";

Then("validate the quick links under shop in footer section", () => {
    PlayFooter.validateShopFooterLinks()

});
Then("validate the quick links under bussiness solution in footer section", () => {
    PlayFooter.validatebusinessSolutionsLinks()

});
Then("validate the quick links under legal in footer section", () => {
    PlayFooter.validatelegalPageLinks()
});
Then("validate the quick links under help in footer section", () => {
    PlayFooter.validateHelpPageLinks()
});

Then("validate the quick links under mtnnigeria in footer section", () => {
    PlayFooter.validateMtnNigeriaLinks()
});


Then("Validate the mobileservices link landing the expeceted page",()=>{

PlayFooter.validateMobileServiceLinkNavigation()
});
Then("Validate the ict link landing the expeceted page", () => {
    PlayFooter.validateICTLinkNavigation()
});
Then("Validate the broadband link landing the expeceted page", () => {
    PlayFooter.validateBroadBandLinkNavigation()
});


Then("Validate the broadband1 link landing the expeceted page", () => {
    PlayFooter.validateBroadBandLink1Navigation()
});

Then("Validate the termsandconditions link landing the expeceted page", () => {
    PlayFooter.validateTermsConditionsLinkNavigation()
});

Then("Validate the privacypolicy link landing the expeceted page", () => {
    PlayFooter.validatePrivacyPolicyLinkNavigation
});




