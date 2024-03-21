import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";


When(/^user clicks on the search bar and enter the product name alpha numeric$/,(table:DataTable) => {
 table.hashes().forEach((element) =>
{
homepage.clickOnSearchBar(element.searchValue1)

})
});
Then("validate error message",() =>{
    homepage.errorMessageValidation()
})
When(/^user provide the product name 4G Router$/,(table:DataTable) => {
table.hashes().forEach((element) =>
{
homepage.enterTheProductNameOnSearchBar(element.searchValue2)
})
});

Then("validate that product get displayed",() => {
homepage.productNameValidation()
});


