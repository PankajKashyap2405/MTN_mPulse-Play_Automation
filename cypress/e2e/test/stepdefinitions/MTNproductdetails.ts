import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import Productpage from "../../pages/Productpage";


When("user click on searchbar and enter 5G product", () => {
    Productpage.SearchProduct()
})
Then("validate 5G product details in result page", () => {
    Productpage.ProductResultpage()
})
