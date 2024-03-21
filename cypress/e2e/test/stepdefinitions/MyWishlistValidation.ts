import { Given, When, Then, DataTable, addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import { Basepage } from "../../../support/basepage";
import myWishlistPage from "../../pages/myWishlistPage";

// Navigate to Application URL
//Users login to Application with email
//User clicks on your account

//User clicks on My Wishlist
When("User clicks on My Wishlist",()=>{
    myWishlistPage
})

//Validate the Price
Then("Validate the Price",()=>{
    myWishlistPage
})

//User clicks on See more details
When("User clicks on See more details",()=>{
    myWishlistPage
})

//Validate the Bundle description
Then("Validate the Bundle description",()=>{
    myWishlistPage
})

//Validate the Data
Then("Validate the Data",()=>{
    myWishlistPage
})

//Validate the Validity of the Bundle
Then("Validate the Validity of the Bundle",()=>{
    myWishlistPage
})

//User clicks on Add to cart
When("User clicks on Add to cart",()=>{
    myWishlistPage
})

//User clicks on enter Number
When("User clicks on enter Number",()=>{
    myWishlistPage
})

//User types phone Number
When("User types phone Number",()=>{
    myWishlistPage
})

//User clicks on Add to cart 1
When("User clicks on Add to cart 1",()=>{
    myWishlistPage
})

//User clicks on cart icon
When("User clicks on cart icon",()=>{
    myWishlistPage
})

//Validate that the items have been successfully added
Then("Validate that the items have been successfully added",()=>{
    myWishlistPage
})

//Validate that invite member should not be visible
Then("Validate that invite member should not be visible",()=>{
    myWishlistPage
})