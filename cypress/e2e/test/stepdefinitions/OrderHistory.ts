import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

import commonPage from "../../pages/commonPage";

import homepage from "../../pages/homePage";




When ("user click on account pop should be opened",()=>{
     homepage.clickOnAccount()
})

When("user clcik on orders user should be navigate to all orders page",() =>{
      homepage.clickOnOrders()
})

Then ("validate active, delivered and cancelled orders", () => {
      homepage.validateActiveCompletedCanceledOrder()
})





