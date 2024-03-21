import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

import commonPage from "../../pages/commonPage";

import MTNhomepage from "../../pages/MTNhomepage";


When("user click on device button in the home page",()=>{
   MTNhomepage.ClickOnDeviceButton()
   
})
When("user click on wishlist button",()=>{
MTNhomepage.clickOnWishListButton()
})

When("user login to the Application with email",()=>{
   MTNhomepage.MTNuserLoginWithEmail()
})
      
When("user click on clickhere button",()=>{
  MTNhomepage.clickOnHerebutton()
})
When("user click on Add to Cart button",()=>{
  MTNhomepage.ClickOnAddToCartButton()
})
        
Then("validate add to cart pop up",()=>{
   MTNhomepage.ValidateAddtoCartPopup()
})