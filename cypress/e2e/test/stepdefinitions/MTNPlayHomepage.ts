import { Given, When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor";
import MTNPlayHomepage from "../../pages/MTNPlayHomepage";
import commonPage from "../../pages/commonPage";

Then("validate logo is displayed", () => {
    MTNPlayHomepage.validateMtnLogo()
  });

  Then("Validate Search Bar is dislayed", () => {
    MTNPlayHomepage.validateSearchBar()
  });

  When("user enters partner name in search bar", () => {
    MTNPlayHomepage.seachBarValidation()
  });

  When("user clicks partner name in search results", () => {
    MTNPlayHomepage.clickOnSearchResult()
  });

  Then("Validate partner landing page is displayed", () => {
    MTNPlayHomepage.partnerLandingPageValidation()
  });

  When("user clicked on MTN logo", () => {
    MTNPlayHomepage.clickOnMTnLogo()
  });

  Then("validate home page is displayed", () => {
    MTNPlayHomepage.validateMtnLogo()
  });

  Then("validate shop,business,play,offers,exploreMtn and mpulse links displayed in header", () => {
    MTNPlayHomepage.validateMtnLogo()
  });

  When("user selects the dark theme icon", () => {
    MTNPlayHomepage.themeIconValidation()
  });
  
  Then("validate theme changed to light theme mode", () => {
    MTNPlayHomepage.validateLightthemeBtn()
  });

  When("user selects the light theme icon", () => {
    MTNPlayHomepage.themeValidation()
  });

  Then("validate theme changed to dark mode", () => {
    MTNPlayHomepage.validateDarkthemeBtn()
  });

  Then("validate What's New section is displayed in home page", () => {
    MTNPlayHomepage.validateWhatsnewSection()
  });

  Then("validate video,music,lifestyle,game sections are displayed in whats new section", () => {
    MTNPlayHomepage.validateSectionsunderwhatsnew()
  });

  Then("Validate video's,Music,Lifestyle,Games sections are displayed under whats new section", () => {
    MTNPlayHomepage.validateWhatsNewsections()
  });

  Then("click on view all text in whats new section", () => {
    MTNPlayHomepage.validateViewallWhatsnew()
  });
  
  Then("validate whats new view all section is displayed", () => {
    MTNPlayHomepage.validateWhatsNewViewAllPage()
  });

  When("user clicks on home breadcrumb link", () => {
    MTNPlayHomepage.clickOnBreadcrumbHome()
  });

  Then("validate Whats trending section is displayed", () => {
    MTNPlayHomepage.validateWhatsTrending()
  });

  Then("validate video,music,lifestyle,game sections are displayed in whats Trending section", () => {
    MTNPlayHomepage.validateWhatsTrendingSection()
  });

  When("user click on Whats Trending section view all button", () => {
    MTNPlayHomepage.validateWhatsTrendingViewAll()
  });

  Then("verify whats trending view all page", () => {
    MTNPlayHomepage.validateWhatstrendingViewAllPage()
  });

  Then("Validate Just4U section is displayed in homepage", () => {
    MTNPlayHomepage.validateJust4Usection()
  });

  When("user clicks on just4U section view all button", () => {
    MTNPlayHomepage.validateJust4Uviewall()
  });

  Then("validate just4U viewall page is displayed", () => {
    MTNPlayHomepage.validateJust4UviewAllPage()
  });

  Then("valiadte MySubscription section is displaying", () => {
    MTNPlayHomepage.validateMySubscriptions()
  });

  






  