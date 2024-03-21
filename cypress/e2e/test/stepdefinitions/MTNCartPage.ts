import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import cartPage from "../../pages/cartPage";

When("user click on cart icon", () => {
    cartPage.clickOncartIoc()
  });

  
Then("validate cart page", () => {
    cartPage.cartItem()
  });