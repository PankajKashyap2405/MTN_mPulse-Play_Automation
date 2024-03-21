import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

import commonPage from "../../pages/commonPage";

import homepage from "../../pages/homePage";

Then("validate device button", () =>{
    homepage.validateDeviceButton()
});

Then("validate device price and description", ()=>{
    homepage.validateDevicePriceDescripton()
});
When("click on select button", () =>{
   homepage.clickOnSelectButton()
});

When("click on addtocart button", () =>{
    homepage.clickOnAddToCartButton()
});
When("click on cart icon", ()=>{
    homepage.clickOnCartIcon()
    })
When("click on proceed to pay button",()=>{
    homepage.clickOnProcedToPayButton()
})
Then("Validate Store pick-up",()=> {
    homepage.validateStorePickup()
})

When("click on Store pick-up button",()=> {
    homepage.clickOnStorepickup()
})
When("click on select store button",()=>{
    homepage.clickOnSelectStore()
})

When("click on pick in store button",()=> {
    homepage.clickOnPickInStore()
})
When("click on ship here button",()=>{
    homepage.clickOnShipHereButton
})
When ("click on continue button",()=>{
    homepage.clickOnContinueButton
})







