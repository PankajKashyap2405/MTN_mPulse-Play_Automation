import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import data from "../../pages/ProductMoreInformation"

When("user click on See more details link" ,() => {
    data.clickSeeMoreDetails()

})
Then ("validate description of the product",() => {

    data.validateProductInfo()
})