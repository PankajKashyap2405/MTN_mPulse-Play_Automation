import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

import commonPage from "../../pages/commonPage";

import myOrdersPage from "../../pages/myOrdersPage";


When("user clicks on account dropdown", () => {
    myOrdersPage.clickOnAccountHeader()
    
});
Then("validate your account text should be displayed", () => {
    myOrdersPage.clickOnAccountHeader()
});
Then("click on orders", () => {
    myOrdersPage.clickOnAccountHeader()
});
Then("validate the my orders page", () => {
    myOrdersPage.clickOnAccountHeader()

});
  Then("click on cancelled orders", () => {
    myOrdersPage.clickOnAccountHeader()
  });

  
Then("validate the cancelled text", () => {
    myOrdersPage.clickOnAccountHeader()
});

    


