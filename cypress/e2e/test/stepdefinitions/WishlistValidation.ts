import { Given, When, Then, DataTable, addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import { Basepage } from "../../../support/basepage";
import WishlistValidationPage from "../../pages/WishlistValidationPage";

// Navigate to Application URL
//Users login to Application with email

//User clicks on DATA button in the homepage
When("User clicks on DATA button in the homepage",()=>{
    WishlistValidationPage.clickonData()
})

//User clicks on Wishlist Icon 
When("User clicks on Wishlist Icon",()=>{
    WishlistValidationPage.clickonwishlistIcon()
})

//User clicks on your account

//User clicks on Wishlist
When("User clicks on Wishlist",()=>{
    WishlistValidationPage.clickonWishlist()
})

//User clicks on Add to cart Icon
When("User clicks on Add to cart Icon",()=>{
    WishlistValidationPage.clickonaddToCart()
})

//Users click on enter Number
When("Users click on enter Number",()=>{
    WishlistValidationPage.clickonenterNumber()
})

//User types MSISDN
When("User types MSISDN",()=>{
    WishlistValidationPage.clickonMSISDN()
})

//Validate that item was successfully added to cart
Then("Validate that item was successfully added to cart",()=>{
    WishlistValidationPage.validateItem()

})