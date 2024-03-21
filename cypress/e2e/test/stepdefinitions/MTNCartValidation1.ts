import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";


Then("validate cart icon",()=>{
    homepage.validateCarticon()
})


Then("validate cart items",()=>{
    homepage.validateCartItem()
})

Then("validate link to add items to cart",()=>{
    homepage.validateOnLinkToAdditems()
})

Then("click on next button",()=>{
    homepage.clickOnNextbutton()
})

When("click on item",()=>{
    homepage.clickOnItems()
})

When("click on color and T&C button",()=>{
   homepage.clickOnTcbutton()
})

Then("validate buy now and click",()=>{
homepage.validateProceedToCheckoutbutton()
})

Then("validate quantity",()=>{
   homepage.validateQuantitybutton()
})

When("click on remove button",()=>{
homepage.clickOnRemove()
})