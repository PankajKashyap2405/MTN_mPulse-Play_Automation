import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import { Basepage } from "../../../support/basepage";
import Cartandcheckoutpage from "../../pages/Cartandcheckoutpage";



// Navigate to Application URL
// Users login to Application with email

//user clicks on MTN Broadband mifi
When("user clicks on MTN Broadband mifi",()=>{
    Cartandcheckoutpage.clickonMTNBroadbandmifi()
})

//users click on add to cart
When("users click on add to cart", ()=>{
    Cartandcheckoutpage.clickonaddtocart()
})

//users clicks on cart icon
When ("users clicks on cart icon", ()=>{
    Cartandcheckoutpage.clickonCartIcon()
})

//user clicks on delete icon
When ("users clicks on delete icon", ()=>{
    Cartandcheckoutpage.clickondeleteIcon()
})

//validate that there is no product in the cart
Then ("validate that there is no product in the cart", ()=>{
    Cartandcheckoutpage.Validateproductincart()
})