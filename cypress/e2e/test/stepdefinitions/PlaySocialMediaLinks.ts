import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import PlayFooter from "../../pages/PlayFooter";

Then("validate the facbook quick link in footer section", () => {
    PlayFooter.validateSocialMediaLinks()

});
Then("validate the twitter quick link in footer section", () => {
    PlayFooter.validateSocialMediaLinks()


});
Then("validate the insta quick link in footer section", () => {
    PlayFooter.validateSocialMediaLinks()
});
Then("validate the linkedin quick link in footer section", () => {
    PlayFooter.validateSocialMediaLinks()
});
Then("validate the youtube quick link in footer section", () => {
    PlayFooter.validateSocialMediaLinks()
});



