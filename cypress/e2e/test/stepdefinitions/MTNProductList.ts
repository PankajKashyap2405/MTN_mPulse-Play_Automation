import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import ProductDetailPage, { ProductDetailpage } from "../../pages/ProductDetailPage";

When("user clicks on the cloud button in the home page",()=>{
    ProductDetailPage.CloudButton()
   // ProductDetailPage.DeviceButton()
})

Then("validate cloud service page is displayed",()=>{
    ProductDetailPage.CloudText()
})