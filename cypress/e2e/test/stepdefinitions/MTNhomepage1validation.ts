import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import homepage from "../../pages/homepageS1";
import homepageS1 from "../../pages/homepageS1";
import {Basepage} from "../../../support/basepage";

import homepageS2 from "../../pages/homepageS2";




Then("validate the header section", () => {
    homepageS1.validateHeaderSection()
    
});

Then("validate that in home page ,the banners should be display", () =>
{
    homepageS1.validateBanners()
});

//Then("validate that in the home page, Best Selling products should be displayed", () => {
   // homepageS1.validateBestSellingProducts()
//});

Then("validate that in home page,featured products should be displayed", () => {
    homepageS1.validateFeaturedProducts()

});
     
Then("validate that in home page,information boxes should be displayed", () => {
    homepageS1.validatingInfoBox()
});

//Then("validate that in home page,partners should be displayed", () => {
   // homepageS1.validatingPartners()
//});

Then("validate the footer section", ()=> {
    homepageS2.validateFooterSection()
   // homepageS2.validatingFooterLinks()
    homepageS2.validateFooterLinkAboutMTN()
    //homepage.navigateToTabAndClose()
    commonPage.navigateToAplication()
    homepageS2.validateFooterLinkCOdeOfEthics()
    commonPage.navigateToAplication()
    homepageS2.validateFooterLinkCOdeOfPrivacy()
    commonPage.navigateToAplication()
    homepageS2.validateFooterLinkCOdeOfMomo()
    commonPage.navigateToAplication()
    homepageS2.validateFooterLinkCOdeOfBusines()
    commonPage.navigateToAplication()
    homepageS2.validateFooterLinkCOdeOfCookies()
    commonPage.navigateToAplication()
   homepageS2.validateFooterLinkCOdeOfTerms()
   commonPage.navigateToAplication()
    homepageS2.validateFooterLinkCOdeOfReturnPolicy()
    commonPage.navigateToAplication()
    homepageS2.validateFooterLinkCOdeOfDeliveryPolicy()
   commonPage.navigateToAplication()

});
