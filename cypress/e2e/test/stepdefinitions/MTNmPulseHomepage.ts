import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import MTNmPulseHomepage from "../../pages/MTNmPulseHomepage";



Then("Validate MTN logo", () => {
    MTNmPulseHomepage.validateMtnLogo()
  });

  Then("Validate shop,play,business,offers links in header", () => {
    MTNmPulseHomepage.validateLinksInHeaader()
  });
  
  Then("Validate Search bar in header", () => {
    MTNmPulseHomepage.ValidateSearchBar()
  });
  
  When("user enters texxt in search bar", ()=> {
    MTNmPulseHomepage.seachBarValidation()
  })

  When("user clicks on search results", ()=> {
    MTNmPulseHomepage.clickOnSearchResult()
  })

  Then("Validate Buy Bundle page is displayed", () => {
    MTNmPulseHomepage.ValidateBuyBundlePage()
  });

  When("user clicks on MTN logo", ()=> {
    MTNmPulseHomepage.clickOnMTNLogo()
  })

  Then("Validate student dashboard is displayed", () => {
    MTNmPulseHomepage.ValidateStudentDashboard()
  });

  Then("Validate Student Dashboard profilepic", () => {
    MTNmPulseHomepage.validateProfilePic()
  });

  Then("Validate Profile name,mobile number", () => {
    MTNmPulseHomepage.validateProfileNameandNumber()
  });
  
  Then("Validate Traiff plan is MTN Hynetflix", () => {
    MTNmPulseHomepage.validateTariffplan()
  });

  Then("Validate Data and Airtime labels in dashboard", () => {
    MTNmPulseHomepage.ValidateDataAndAirtimeLabels()
  });

  Then("Validate Buybundle,Recharge and edit profile butons in dashboard", () => {
    MTNmPulseHomepage.validateRechargeandBuyBundleandEditprofilebtns()
  });

  Then("Validate Signup for Emails in Footer section", () => {
    MTNmPulseHomepage.ValidateSignupFOrEmailSection()
  });

  Then("Validate Footer links under shop category", () => {
    MTNmPulseHomepage.validateShopFooterLinks()
  });

  Then("Validate footer links under Business solution", () => {
    MTNmPulseHomepage.validateBUsinessSltnFooterlinks()
  });
  
  Then("Validate Footer links under Legal", () => {
    MTNmPulseHomepage.validateLegalFooterLinks()
  });
  
  Then("Validate Footer links under Help", () => {
    MTNmPulseHomepage.valiadteHelpFooterlinks()
  });

  Then("Validate Footer links under MTN Nigeria", () => {
    MTNmPulseHomepage.validateMTNnigeriaFooterLinks()
  });

  Then("Validate copyright text in footer section", () => {
    MTNmPulseHomepage.validateCopyrightTxt()
  });
