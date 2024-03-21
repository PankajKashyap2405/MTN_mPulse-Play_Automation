import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";

import homePageS3 from "../../pages/homePageS3";

Then("validate that in the home page, Best Selling products should be displayed", () => {
    homePageS3.validateBestSellingProducts()
});