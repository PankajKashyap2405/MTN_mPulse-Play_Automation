import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import  Kart  from "../../pages/Kart";

When("users clicks on 5G Broadband Router in Homepage", () => {
    Kart.Onclick5GBroadband()
  
  })

//users click on add to cart
When("users clicks on Add to Cart", ()=>{
   Kart.Onclickadding()
})

//users clicks on cart icon
When ("users clicks on Cart icon ", ()=>{
    Kart.onclickiconbutton()
    return "";
})

Then ("validate the products in Cart", ()=>{
    Kart.validatecartiteam()
})
