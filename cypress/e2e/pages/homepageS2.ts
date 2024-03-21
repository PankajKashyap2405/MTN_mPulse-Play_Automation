import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/homepageval.json";
import { test } from "mocha";

export class homepageS2{
    public footer1:string = "div.main-footer > div.mtn-get-touch > div:nth-child(1) > div.support-description > h3 "
    public footer2:string = "div.main-footer > div.mtn-get-touch > div:nth-child(2) > div.support-description > h3 "
    public footerH1:string = "#accordion4 > div:nth-child(1)"
    public footerH2:string = "#accordion4 > div:nth-child(2)"
    public footerH3:string = "#accordion4 > div:nth-child(3)"
    public footerH4:string = "#accordion4 > div:nth-child(4)"
    public aboutLink:string = "#ft-c > li:nth-child(1) > a"
    public ethics:string = "#ft-c > li:nth-child(2) > a"
    public privacy:string = "#ft-c > li:nth-child(3) > a"
    public momo:string = "#ft-c > li:nth-child(4) > a"
    public business:string = "#ft-c > li:nth-child(5) > a"
    public cookies:string = "#ft-b > li:nth-child(1) > a"
    public terms:string = "#ft-b > li:nth-child(2)"
    public returnPolicy:string = "#ft-b > li:nth-child(3)"
    public deliveryPolicy:string = "#ft-b > li:nth-child(4)"
    public broadBand:string = "#ft-d > li:nth-child(1) > a"
    public dataBundle:string = "#ft-d > li:nth-child(2) > a"
    public airtimeRecharge:string = "#ft-d > li:nth-child(3) > a"
    public faqs:string = "#ft-e > li:nth-child(1) > a"
    public helpCenter:string = "#ft-e > li:nth-child(2) > a"
    public serviceCenter:string = "#ft-e > li:nth-child(3) > a"
    public coverageMap:string = "#ft-e > li:nth-child(4) > a"
    public timeLine:string = "#ft-e > li:nth-child(5) > a"
    public deviceManagement:string = "#ft-e > li:nth-child(6) > a"
    public cookiesPolicy:string = "#maincontent > div.page-title-wrapper > h1 > span"





    validateFooterSection()
    {
        expect(Basepage.elementVisibleContainsText(this.footer1,testdata.HomePage.Footer1)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.footer2,testdata.HomePage.Footer2)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.footerH1,testdata.HomePage.FooterH1)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.footerH2,testdata.HomePage.FooterH2)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.footerH3,testdata.HomePage.FooterH3)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.footerH4,testdata.HomePage.FooterH4)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.aboutLink,testdata.HomePage.About)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.ethics,testdata.HomePage.Ethics)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.privacy,testdata.HomePage.Privacy)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.momo,testdata.HomePage.Momo)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.business,testdata.HomePage.Business)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.cookies,testdata.HomePage.Cookies)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.terms,testdata.HomePage.Terms)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.returnPolicy,testdata.HomePage.ReturnPolicy)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.deliveryPolicy,testdata.HomePage.DeliveryPolicy)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.broadBand,testdata.HomePage.BroadBand)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.dataBundle,testdata.HomePage.DataBundles)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.airtimeRecharge,testdata.HomePage.Airtime)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.faqs,testdata.HomePage.Faq)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.helpCenter,testdata.HomePage.Helpcenter)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.serviceCenter,testdata.HomePage.ServiceCenters)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.coverageMap,testdata.HomePage.Map)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.timeLine,testdata.HomePage.Timeline)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.deviceManagement,testdata.HomePage.Management)).to.be.ok

 }

validateFooterLinkAboutMTN(){
  //cy.get(this.aboutLink).click({force:true})
    cy.origin('https://www.mtn.ng/about-us', () => {
    cy.on('uncaught:exception', (err) => {
     return false
       })
  })
   cy.get(this.aboutLink).invoke('removeAttr', 'target').click()
   cy.origin('https://www.mtn.ng/about-us', () => {
   cy.wait(10000)
   cy.get("div.container-fluid > div > div > div > div > h4").should('be.visible')
  })
}

validateFooterLinkCOdeOfEthics(){
 // cy.get(this.ethics).click({force:true})
   cy.origin('https://www.mtn.ng/about-us', () => {
   cy.on('uncaught:exception', (err) => {
    return false
  })
  })
  cy.get("#ft-c > li:nth-child(2) > a").invoke('removeAttr', 'target').click()
  //cy.get("a[title='Code of Ethics']").invoke('removeAttr', 'target').click()
  cy.origin('https://www.mtn.ng/about-us', () => {
  cy.wait(10000)
  cy.get("div:nth-child(2) > h1").should('be.visible')
  })
}
validateFooterLinkCOdeOfPrivacy(){
    cy.origin('https://www.mtn.ng/about-us', () => {
    cy.on('uncaught:exception', (err) => {
     return false
   })
   })
   cy.get(this.privacy).invoke('removeAttr', 'target').click()
   cy.origin('https://www.mtn.ng/about-us', () => {
   cy.wait(10000)
   cy.get("div:nth-child(2) > div > div:nth-child(1) > h5:nth-child(2)").should('be.visible')
   })
 }

 validateFooterLinkCOdeOfMomo(){
    cy.origin('https://www.momoagent.com.ng/', () => {
    cy.on('uncaught:exception', (err) => {
     return false
   })
   })
   cy.get(this.momo).invoke('removeAttr', 'target').click()
   cy.origin('https://www.momoagent.com.ng/', () => {
   cy.wait(10000)
   cy.get("div.container > div > div > div > h4").should('be.visible')
   })
}

   validateFooterLinkCOdeOfBusines(){
    cy.origin('https://www.mtn.ng/business/', () => {
    cy.on('uncaught:exception', (err) => {
     return false
   })
   })
   cy.get(this.business).invoke('removeAttr', 'target').click()
   cy.origin('https://www.mtn.ng/business/', () => {
   cy.wait(10000)
   cy.get("div.container-fluid > div > div > div > div.mtn-title > h4").should('be.visible')
   })
  }
//when the link is opening in the same browser
  validateFooterLinkCOdeOfCookies(){
    cy.get(this.cookies).click({force:true})
    //cy.get("#maincontent > div.page-title-wrapper > h1 > span").should('be.visible')
    expect(Basepage.elementVisibleContainsText(this.cookies,testdata.HomePage.Cookies)).to.be.ok

  }
  validateFooterLinkCOdeOfTerms(){
    cy.get(this.terms).click({force:true})
    cy.get("#maincontent > div.columns > div > div:nth-child(4) > div > div > div > div > div > div > div > div > h2").should('be.visible')

  }
  validateFooterLinkCOdeOfReturnPolicy(){
    cy.get(this.returnPolicy).click({force:true})
    cy.get("#maincontent > div.page-title-wrapper > h1 > span").should('be.visible')

  }
  validateFooterLinkCOdeOfDeliveryPolicy(){
    cy.get(this.deliveryPolicy).click({force:true})
    cy.get("#maincontent > div.page-title-wrapper > h1 > span").should('be.visible')

  }





  // validateFooterLinkCOdeOfCookies(){
   // cy.origin('https://mymtnngnxtgen-shop-staging.mtnnigeria.net/', () => {
   // cy.on('uncaught:exception', (err) => {
  //   return false
   //})
   //})
   //cy.get(this.cookies).invoke('removeAttr', 'target').click()
  // cy.origin('https://mymtnngnxtgen-shop-staging.mtnnigeria.net/', () => {
  // cy.wait(10000)
   //cy.get("#maincontent > div.page-title-wrapper > h1 > span").should('be.visible')
   //})
  //}

  

   
  
  



































   
  
  




}

export default new homepageS2();