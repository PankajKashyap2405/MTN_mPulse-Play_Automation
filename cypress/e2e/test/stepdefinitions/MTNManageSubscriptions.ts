import {
  Given,
  When,
  Then,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";
import ManageSubscriptionsPage from "../../pages/ManageSubscriptionsPage";


When("User clicks on manage subscriptions", () => {
  ManageSubscriptionsPage.clickManageSubscription();
});

When("User clicks on the All button", () => {
  ManageSubscriptionsPage.clickAllTabs();
});

Then("User validates that Subscription not found", () => {
  ManageSubscriptionsPage.validateText();
});
