import {
  Given,
  When,
  Then,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import homepage from "../../pages/homePage";
import exploreCategory from "../../pages/exploreByCategory";
import { Basepage } from "../../../support/basepage";

// Navigate to Application URL

When("User Clicks on Products and drops down", () => {
  exploreCategory.clickAllProds();
});

Then(
  "Validate User Account can see Devices, Data Bundles, Enterprise Services | Cloud Services |Airtime Recharge",
  () => {
    exploreCategory.validateByCategories();
  }
);

When("User clicks on the Devices link", () => {
  exploreCategory.clickDeviceLink();
});

Then("User sees Devices written", () => {
  exploreCategory.validateDevicePageContent();
});

When("User Clicks on Clear All Button", () => {
  exploreCategory.clickClearAllBtn();
  exploreCategory.validateByCategories();
});

When("User clicks on the Data Bundles link", () => {
  exploreCategory.clickDataBundleLink();
});

Then("User sees Data Bundles written", () => {
  exploreCategory.validateDataBundlesPage();
});

When("User clicks on the Data Enterprise Services Link", () => {
  exploreCategory.clickEnterpriseServicesLink();
});

Then("User sees Enterprise Services written", () => {
  exploreCategory.validateEnterpriseServicesPage();
});

When("User clicks on the Data Cloud Services Link", () => {
  exploreCategory.clickCloudServLink();
});

Then("User sees Cloud Services written", () => {
  exploreCategory.validateCloudServicesPage();
});

When("User clicks on the Airtime Recharge Link", () => {
  exploreCategory.clickAirtimeRecharge();
});

Then("User sees Airtime recharge written", () => {
  exploreCategory.validateAirtimeRechargePage();
});
