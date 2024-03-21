import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/playhomepage.json"
import { basePlacements } from "@popperjs/core";

export class PlayFooter{
    //footer section 
    public shopPage:string = "#block-shop-menu"
    public mobileServicesLink:string = "div[class='region region--footer-first grid-full layout--pass--content-medium ie11-autorow'] li:nth-child(1) a:nth-child(1)"
    public ictLink:string = "div[class='region region--footer-first grid-full layout--pass--content-medium ie11-autorow'] li:nth-child(2) a:nth-child(1)"
    public broadBandLink:string = "div > div.mtn-footer-link > div > div:nth-child(1) > div > ul > li:nth-child(3) > a"
    public businessSolutions:string = "#block-businesssolution-menu"
    public broadBandLink1:string = "div > footer > div > div.mtn-footer-link > div > div:nth-child(2) > div > ul > li > a"
    public legalPage:string = "#block-legal-menu"
    public termsAndConditionsLink:string = "div[class='region region--footer-third'] li:nth-child(1) a:nth-child(1)"
    public privacyPolicyLink:string = "div > footer > div > div.mtn-footer-link > div > div:nth-child(3) > div > ul > li:nth-child(2) > a"
    public helpPage:string = "#block-help-menu"
    public contactUs:string = "div > footer > div > div.mtn-footer-link > div > div:nth-child(4) > div > ul > li:nth-child(1) > a"
    public feedBack:string = " div > footer > div > div.mtn-footer-link > div > div:nth-child(4) > div > ul > li:nth-child(2) > a"
    public fAQ:string = " div > footer > div > div.mtn-footer-link > div > div:nth-child(4) > div > ul > li:nth-child(3) > a"
    public mtnNigeriaPage:string = "#block-mtnnigeria-menu"
    public mtnBussinessLink:string = "div > footer > div > div.mtn-footer-link > div > div:nth-child(5) > div > ul > li:nth-child(1) > a"
    public forInvestorsLink:string = "div > footer > div > div.mtn-footer-link > div > div:nth-child(5) > div > ul > li:nth-child(2) > a"
    public mtnFoundationsLink:string = "div > footer > div > div.mtn-footer-link > div > div:nth-child(5) > div > ul > li:nth-child(3) > a"
    public careersLink:string = "div > footer > div > div.mtn-footer-link > div > div:nth-child(5) > div > ul > li:nth-child(4) > a"
    public mobileservicesLandingPage:string = "#page-title-heading"
    //public homePageButton:string = ".item.home"
    public ictLandingPage:string = "#page-title-heading > span"
    public broadBandLandingPage:string = "#page-title-heading > span"
    public broadBandLandingPage1:string = "#page-title-heading > span"
    public termsLandingPage:string = "#tat > app-terms-condition > div > div.main-cont > div > div:nth-child(2) > p:nth-child(1)"
    public privacyPolicyLandingPage:string = "#main > div.slideshow-404 > div > div.error-banner-heading-section > h1"
    public facebookLink:string = "div > div.col-md-6.mtn-nigeria > div.mtn-social-link.order-suc-social > ul > li:nth-child(1) > a"
    public twitterLink:string = "div.col-md-6.mtn-nigeria > div.mtn-social-link.order-suc-social > ul > li:nth-child(2) > a > i"
    public instaLink:string = "div.col-md-6.mtn-nigeria > div.mtn-social-link.order-suc-social > ul > li:nth-child(3) > a > i"
    public linkdinLink:string = "div.col-md-6.mtn-nigeria > div.mtn-social-link.order-suc-social > ul > li:nth-child(4) > a > i"
    public youtubeLink:string = "div.col-md-6.mtn-nigeria > div.mtn-social-link.order-suc-social > ul > li:nth-child(5) > a > i"

validateShopFooterLinks()
{
    cy.get(this.shopPage).should('be.visible')
    expect(Basepage.elementVisibleContainsText(this.shopPage, testdata.HomePage.ShopPageFooter)).to.be.ok
    cy.get(this.mobileServicesLink).should('be.visible')
    cy.get(this.ictLink).should('be.visible')
    cy.get(this.broadBandLink).should('be.visible')
}
validatebusinessSolutionsLinks()
{
    cy.get(this.businessSolutions).should('be.visible')
    expect(Basepage.elementVisibleContainsText(this.businessSolutions, testdata.HomePage.BusinessSolutionPage)).to.be.ok
    cy.get(this.broadBandLink1).should('be.visible')
}
validatelegalPageLinks()
{
    cy.get(this.legalPage).should('be.visible')
    expect(Basepage.elementVisibleContainsText(this.legalPage, testdata.HomePage.LegalPageFooter)).to.be.ok
    cy.get(this.termsAndConditionsLink).should('be.visible')
    cy.get(this.privacyPolicyLink).should('be.visible')
}
validateHelpPageLinks(){
    cy.get(this.helpPage).should('be.visible')
    expect(Basepage.elementVisibleContainsText(this.helpPage, testdata.HomePage.HelpPage)).to.be.ok
    cy.get(this.contactUs).should('be.visible')
    cy.get(this.feedBack).should('be.visible')
    cy.get(this.fAQ).should('be.visible')
}
validateMtnNigeriaLinks(){
    cy.get(this.mtnNigeriaPage).should('be.visible')
    expect(Basepage.elementVisibleContainsText(this.mtnNigeriaPage, testdata.HomePage.MtnNigeriaPage)).to.be.ok
    cy.get(this.mtnBussinessLink).should('be.visible')
    cy.get(this.forInvestorsLink).should('be.visible')
    cy.get(this.mtnFoundationsLink).should('be.visible')
    cy.get(this.careersLink).should('be.visible')
}

validateMobileServiceLinkNavigation()
{
    cy.get(this.mobileServicesLink).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.mobileservicesLandingPage, testdata.HomePage.MobileServicesLandingPge)).to.be.ok
    cy.go('back')
    cy.viewport(1200,1000)  
    expect(Basepage.elementVisibleContainsText(this.mobileServicesLink, testdata.HomePage.MobileServicesLink)).to.be.ok
}
validateICTLinkNavigation(){
    cy.get(this.ictLink).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.ictLandingPage, testdata.HomePage.IctLandingPage)).to.be.ok
    cy.go('back')
    cy.viewport(1200,1000) 
    expect(Basepage.elementVisibleContainsText(this.ictLink, testdata.HomePage.ICTLink)).to.be.ok
}
validateBroadBandLinkNavigation(){

  cy.get(this.broadBandLink).click({force:true})
  expect(Basepage.elementVisibleContainsText(this.broadBandLandingPage, testdata.HomePage.BroadBandLandingPage)).to.be.ok
  cy.go('back')
  cy.viewport(1200,1000)
  expect(Basepage.elementVisibleContainsText(this.broadBandLink, testdata.HomePage.BroadBandLink)).to.be.ok
}

validateBroadBandLink1Navigation(){

    cy.get(this.broadBandLink1).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.broadBandLandingPage1, testdata.HomePage.BroadBandLandingPage1)).to.be.ok
    cy.go('back')
    cy.viewport(1200,1000)
    expect(Basepage.elementVisibleContainsText(this.broadBandLink, testdata.HomePage.BroadBandLink1)).to.be.ok
  }
  validateTermsConditionsLinkNavigation(){

    cy.get(this.termsAndConditionsLink).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.termsLandingPage, testdata.HomePage.TermsandConditionsLandingPage)).to.be.ok
    cy.go('back')
    cy.viewport(1200,1000)
    expect(Basepage.elementVisibleContainsText(this.termsAndConditionsLink, testdata.HomePage.TermsandConditions)).to.be.ok
  }
  

 
  validatePrivacyPolicyLinkNavigation(){

    cy.get(this.privacyPolicyLink).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.privacyPolicyLandingPage, testdata.HomePage.PrivacyPolicyLandingPage)).to.be.ok
    cy.go('back')
    cy.viewport(1200,1000)
    expect(Basepage.elementVisibleContainsText(this.privacyPolicyLink, testdata.HomePage.PrivacyPolicyLink)).to.be.ok
  }

  validateSocialMediaLinks()
  {
    cy.get(this.facebookLink).should('be.visible')
    cy.get(this.twitterLink).should('be.visible')
    cy.get(this.instaLink).should('be.visible')
    cy.get(this.linkdinLink).should('be.visible')
    cy.get(this.youtubeLink).should('be.visible')
  }









}
export default new PlayFooter();

