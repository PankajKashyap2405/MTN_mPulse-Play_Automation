import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import MTNmPulseHomepage from "../../pages/MTNmPulseBundlePurchase";
import MTNmPulseBundlePurchase from "../../pages/MTNmPulseBundlePurchase";



Then("Validate Homepage is displayed", () => {
    MTNmPulseBundlePurchase.Profile()
  });

  When("user clicks on Buy bundle Explore button", ()=> {
    MTNmPulseBundlePurchase.clickOnExplore()
  })

  Then("validate Buy bundle page is displayed", () => {
    MTNmPulseBundlePurchase.buyBndlePage()
  });

  Then("validate 250MB bundle is displayed in bundlepage", () => {
    MTNmPulseBundlePurchase.daillyBundle()
  });

  When("user clicks on Buy now button", ()=> {
    MTNmPulseBundlePurchase.clickOnBuyNOw()
  })

  Then("Validate buynow popup is dispalyed", () => {
    MTNmPulseBundlePurchase.buynwPopupp()
  });

  Then("click on buy button", () => {
    MTNmPulseBundlePurchase.clickOnbuybtn()
  });

  Then("validate cart page is displayed ", () => {
    MTNmPulseBundlePurchase.validateCartpage()
  });

  Then("user clicks on proceed to payment", () => {
    MTNmPulseBundlePurchase.clickOnPayment()
  });

  Then("validate payment page is displayed", () => {
    MTNmPulseBundlePurchase.validateCheckOutPage
  });

  When("user clciks on Paywith Airtime button", ()=> {
    MTNmPulseBundlePurchase.clickOnPaywithAirtime()
  })

  Then("click on pay now button", () => {
    MTNmPulseBundlePurchase.clickOnPaynow()
  });

  Then("validate invoice page is displayed and payment is success", () => {
    MTNmPulseBundlePurchase.validateSuccesspage()
  });