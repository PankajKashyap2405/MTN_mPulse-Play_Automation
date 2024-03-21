import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import test from "../../pages/CartbuttonvalidationPage"

When("user click and validate the Cart Button in hompage", () =>{
test.clickOnDeviceButton()
})