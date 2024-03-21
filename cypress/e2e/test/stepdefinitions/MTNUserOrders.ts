import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
//import Orders from "../../pages/userOrders";
import Orders from "../../pages/userOrders"

// Navigate to Application URL
//Users login to Application with email

//user clicks on Orders under User Account
When("user clicks on Orders under User Account",()=>{
Orders.clickonUserOrders()

});

//User validate orders

Then("User validate orders",()=>{
    Orders.validateMyOrderLabel()
});


