import {
  Given,
  When,
  Then,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import homepage from "../../pages/homePage";
import fiveGDevice from "../../pages/5GDevicePage";
import { Basepage } from "../../../support/basepage";

//Navigates to application URL

When("User scrolls to and clicks 5G Devices", () => {
  fiveGDevice.clickOnMTN5GIcon();
});

Then("User validates short product description", () => {
  fiveGDevice.validateDescription();
});
