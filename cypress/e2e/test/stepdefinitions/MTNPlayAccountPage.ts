import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import MTNPlayAccountPage from "../../pages/MTNPlayAccountPage";
import commonPage from "../../pages/commonPage";


When("user clicks on profile dropdown", () => {
    MTNPlayAccountPage.clickOnProfileDropdown()
  });

  Then("click on My Account", () => {
    MTNPlayAccountPage.clickOnMyAccount()
  });

  Then("validate my account page is displayed", () => {
    MTNPlayAccountPage.validateMyAccountPage()
  });

  Then("validate My account menu is displayed", () => {
    MTNPlayAccountPage.Validatemyaccountmenu()
  });

  Then("Validate My Acoount menu sections Contact information,Interestselection&Modification,Managesubscription", () => {
    MTNPlayAccountPage.validateMyaccountMenuSections()
  });

  Then("Validate My Profile page is displayed by default", () => {
    MTNPlayAccountPage.ValidateMyProfilepage()
  });

  Then("Validate My contact info page elements", () => {
    MTNPlayAccountPage.valiadteContactInfoElements()
  });

  When("user click on Edit icon", () => {
  MTNPlayAccountPage.clickOnEditIcon()
  });

  Then("edit the nickname field", () => {
    MTNPlayAccountPage.validateTheNicknameField()
    });

  Then("Validate Cancel and save button are enabled", () => {
    MTNPlayAccountPage.validateCancelandSavebtn()
  });

  When("user click on save button", () => {
    MTNPlayAccountPage.clickONSaveBtn()
    });

   Then("Validate Nickname is updated", () => {
    MTNPlayAccountPage.validateNicknameUPdated()
    });

  When("user click on INterest selection & Modification", () => {
    MTNPlayAccountPage.clickONInterestSelection()
    });
  
  Then("Validate INterest selection section is displayed", () => {
    MTNPlayAccountPage.validateINtersetSection()
  });

  Then("Validate Text in Interest Section", () => {
    MTNPlayAccountPage.ValidateTextinInterestSection()
  });

  Then("validate intrests categories are displayed", () => {
    MTNPlayAccountPage.validateInterstCategories()
  });
   
  When("user clicks on Music,Games,food category", () => {
    MTNPlayAccountPage.clickOnInterestcategory()
    });

  When("user clicks on Manage Subscription", () => {
    MTNPlayAccountPage.clickOnManageSubscriptionTab()
    });

    Then("Validate Manage subscription page is displayed", () => {
      MTNPlayAccountPage.validateMySubscriptionPage()
    });



  