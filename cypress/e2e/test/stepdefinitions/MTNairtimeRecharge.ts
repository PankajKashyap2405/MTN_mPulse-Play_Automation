import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage";
import airtimePage from "../../pages/airtimePage";
import commonPage from "../../pages/commonPage";

When("user clicks on Recharge tab", () => {
    airtimePage.clickOnrecharge()
  });

  Then("Validate Airtime product listing page is displayed", () => {
    airtimePage.airtimePlist()
  });

  When("user clicks on select button", () => {
    airtimePage.clickOnSelect()
  });

  Then("Validate Airtime details page is displayed", () => {
    airtimePage.airtimedetails()
  });

  Then("Validate Airtime details page", () => {
    airtimePage.airtimePageValidation()
  });
  When("user clicks on Enter mobile number button", () => {
    airtimePage.clickOnMobileNumber()
});
Then("Validate Mobile number field is displayed", () => {
    airtimePage.enterMobileNumbe()
  });

  When("user enters mobile number", () => {
    airtimePage.mobileNumberField()
});

Then("Validate Congrats message is displayed", () => {
    airtimePage.congratsMessge()
  });

  When("user clears the amount and enters another amount in amount field", () => {
    airtimePage.clearAmount()
});

When("user click on Ok button", () => {
    airtimePage.clickOnOk()
});

Then("Validate Subtotal amount is updated", () => {
    airtimePage.subTotale()
  });

  When("user clicks on Buynow button", () => {
    airtimePage.clickOnBuyNow()
});

Then("Validate shopping cart page is displayed", () => {
    airtimePage.orderSmry()
  });

  Then("Validate Billing address section is displayed", () => {
    airtimePage.billingAddress()
  });

 // When("user clicks on edit button", () => {
   // airtimePage.clickOnEdit()
//});

//When("user clicks on dropdown arrow", () => {
    //airtimePage.clickOnDrop()
//});


//Then("validate New address field is displayed", () => {
    //airtimePage.firstName()
  //});

  //When("user fill all the input fields", () => {
   // airtimePage.inputFields()
//});

Then("Validate Payment method section is displayed", () => {
    airtimePage.paymentTit()
  });