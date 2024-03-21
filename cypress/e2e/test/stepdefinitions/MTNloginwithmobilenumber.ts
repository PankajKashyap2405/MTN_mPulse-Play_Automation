import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import Accountpage from "../../pages/Accountpage";

When("user click on account icon", () => {
    Accountpage.clickonaccount()
})

When("user click on sign up", () => {
Accountpage.clickonlogin()
})

Then("login page is displayed", () => {
    Accountpage.clickonlogin()

})
 
Then("validate sign up page", ()=> {

})