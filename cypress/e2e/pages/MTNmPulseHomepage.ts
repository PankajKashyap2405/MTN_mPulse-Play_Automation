import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/mPulseHomepage.json";
import commonpage from "../pages/commonPage"


export class MTNmPulseHomepage {

    //Locators
    //Header
  public Mtnlogo:string="a[class='navbar-brand'] img[alt='MTN logo']"
  public eshoplink:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)"
  public playliink:string="#navbarSupportedContent > ul > li:nth-child(2) > a > span"
  public busineslink:string="#navbarSupportedContent > ul > li:nth-child(3) > a > span"
  public offerlink:string="#navbarSupportedContent > ul > li:nth-child(4) > a > span"
  public seacrBar:string="div[class='search-prt'] span[class='search-icon-page'] img"
  public searchbartext:string="#edit-keyword--2"
  public searchresults:string=".autocomplete-suggestion-label"
  public buyBundlePage:string="h2[class='titleHeadings']"

  //dashboard
  public studentDashboard:string=".white-active-pagination"
  public profilePic:string="div[class='student_profile-image'] img[class='rounded-circle mr-2']"
  public profileName:string="div[class='student_profile-detail'] h6"
  public MblNmbr:string="div[class='student_profile-detail'] span"
  public tariffPlan:string=".tarif"
  public hynetflix:string=".tarif-b"
  public data:string="div[class='tariff_data'] p[class='t_data-title']"
  public Airtime:string="div[class='tariff_airtime'] p[class='t_data-title']"
  public buybndle:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)"
  public rechrge:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > a:nth-child(1)"
  public editProfile:string=".t_edit-btn"
  
  //Footer
  public getYourself:string="div[class='col-md-6 get-text'] h5"
  public purchaseNotificationText:string="div[class='col-md-6 get-text'] p"
  public signupforEmails:string="label[for='edit-email']"
  public emailField:string="#edit-email"
  public enterIcon:string="#edit-submit"
  //shop
  public shop:string="#block-shop-menu"
  public MobileServices:string="body > div:nth-child(2) > footer:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)"
  public business:string="span[class='base']"
  public ict:string="body > div:nth-child(2) > footer:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)"
  public cloud:string="span[class='base']"
  public broadBand:string="body > div.dialog-off-canvas-main-canvas > footer > div.container > div.mtn-footer-link > div > div:nth-child(1) > div > ul > li:nth-child(3) > a"
  public brdbnd:string="a[title='MTN Broadband MiFi'] h2" 

  //Business solution
  public businesSltn:string="#block-businesssolution-menu"
  public brodbnd:string="body > div.dialog-off-canvas-main-canvas > footer > div.container > div.mtn-footer-link > div > div:nth-child(2) > div > ul > li > a"
  
  //Legal
  public legal:string="#block-legal-menu"
  public termsCondtns:string="body > div:nth-child(2) > footer:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)"
  public termsTxt:string="div[class='row rowspace'] div:nth-child(1) p:nth-child(1)"
  public privcaplcy:string="body > div:nth-child(2) > footer:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)"
  public privacy:string="div[class='tab-header-container'] h5"
 
  //Help
  public help:string="#block-help-menu"
  public cntcUs:string="body > div:nth-child(2) > footer:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)"
  public contact:string="span[class='base']"
  public abtmPulse:string="a[title='Migrate to Mpulse']"
  public aboutMplse:string="div[class='about-banner-content text-justify'] h1"
  
  //Mtn Nigeria
  public mtnNigeria:string="#block-mtnnigeria-menu"
  public mtnBusinss:string="div[class='region region--footer-fifth'] li:nth-child(1) a:nth-child(1)"
  public forInvstrs:string="body > div:nth-child(2) > footer:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)"
  public mtnInvest:string="div[id='section-heading-block_c1d9a6f635c9cfb6ab8a144752a2e498'] h3[class='mtn-heading size-Responsive section-heading']"
  public mtnFoundtns:string="body > div:nth-child(2) > footer:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)"
  public foundation:string="div[class='information-block-container heightRegular desktop-only infoDark'] h4[class='information-block-title mtn-heading'] p"
  public carrers:string="div[class='region region--footer-fifth'] li:nth-child(1) a:nth-child(1)"
  public findjobs:string="span[data-bind='text: toggleButtonText']"
  
  //Copyrights and Social media links 
  public cpyrghtText:string=".ft-logo-text"















    //Methods
    validateMtnLogo(){
        cy.get('.navbar-brand').find('img').should('be.visible') 
      }
     //header links
    validateLinksInHeaader(){
    expect(Basepage.elementVisibleContainsText(this.eshoplink,testdata.home.Header.eshplnk)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.playliink,testdata.home.Header.playlnk)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.busineslink,testdata.home.Header.bsnslink)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.offerlink,testdata.home.Header.offrlnk)).to.be.ok
    }
    
    // search bar
    ValidateSearchBar(){
        cy.get('.search-icon-page').find('img').should('be.visible')
    }
    
    seachBarValidation(){
      cy.get('#edit-keyword--2').clear({force:true}).type('buy');
    }
     
    clickOnSearchResult(){
      cy.wait(5000)
      cy.get(this.searchresults).click()
    }

    ValidateBuyBundlePage(){
      expect(Basepage.elementVisibleContainsText(this.buyBundlePage,testdata.home.Header.buybundle)).to.be.ok

    }
    
    clickOnMTNLogo(){
      cy.get(this.Mtnlogo).click()
    }
    
    //dashboard
    ValidateStudentDashboard(){
      expect(Basepage.elementVisibleContainsText(this.studentDashboard,testdata.home.Header.StdntDshbrd)).to.be.ok
    }

    validateProfilePic(){
      cy.get('.student_profile-image').find('img').should('be.visible')
    }
    
    validateProfileNameandNumber(){
      expect(Basepage.elementVisibleContainsText(this.profileName,testdata.home.Header.profileNme)).to.be.ok
      expect(Basepage.elementVisibleContainsText(this.MblNmbr,testdata.home.Header.MblNmbr)).to.be.ok
    }
     
     validateTariffplan(){
      expect(Basepage.elementVisibleContainsText(this.tariffPlan,testdata.home.Header.tarrif)).to.be.ok
      //expect(Basepage.elementVisibleContainsText(this.hynetflix,testdata.home.Header.tarifplan)).to.be.ok
      }
     
      ValidateDataAndAirtimeLabels(){
        expect(Basepage.elementVisibleContainsText(this.data,testdata.home.Header.data)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Airtime,testdata.home.Header.Airtime)).to.be.ok
      }
       
      validateRechargeandBuyBundleandEditprofilebtns(){
        expect(Basepage.elementVisibleContainsText(this.buybndle,testdata.home.Header.buybndle)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.rechrge,testdata.home.Header.rechrge)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.editProfile,testdata.home.Header.editPrfl)).to.be.ok
      }

    //Footer 
    ValidateSignupFOrEmailSection(){
      expect(Basepage.elementVisibleContainsText(this.getYourself,testdata.home.Header.notfiedTxt)).to.be.ok
      expect(Basepage.elementVisibleContainsText(this.purchaseNotificationText,testdata.home.Header.prchseNotf)).to.be.ok
      expect(Basepage.elementVisibleContainsText(this.signupforEmails,testdata.home.Header.signUpEmls)).to.be.ok
      cy.wait(2000)
      cy.get('#edit-email').clear({force:true}).type('mahesh9087@gmail.com');
      cy.get(this.enterIcon).click()
    }

    validateShopFooterLinks(){
      cy.get(this.MobileServices).click()
      expect(Basepage.elementVisibleContainsText(this.business,testdata.home.Header.Moblsrvcs)).to.be.ok
      cy.go('back')
      cy.get(this.ict).click()
      expect(Basepage.elementVisibleContainsText(this.cloud,testdata.home.Header.ict)).to.be.ok
      cy.go('back')
      cy.get(this.busineslink).click()
      cy.go('back')
    }
    
    validateBUsinessSltnFooterlinks(){
      expect(Basepage.elementVisibleContainsText(this.businesSltn,testdata.home.Header.bsnsltn)).to.be.ok
      expect(Basepage.elementVisibleContainsText(this.brodbnd,testdata.home.Header.brdbnd)).to.be.ok
    }
    
    validateLegalFooterLinks(){
      expect(Basepage.elementVisibleContainsText(this.legal,testdata.home.Header.legal)).to.be.ok
      cy.get(this.termsCondtns).click()
      expect(Basepage.elementVisibleContainsText(this.termsTxt,testdata.home.Header.terms)).to.be.ok
      cy.go('back')
      cy.get(this.privcaplcy).click()
      expect(Basepage.elementVisibleContainsText(this.privacy,testdata.home.Header.privacy)).to.be.ok
      cy.go('back')
    }

    valiadteHelpFooterlinks(){
      expect(Basepage.elementVisibleContainsText(this.help,testdata.home.Header.helpp)).to.be.ok
      cy.get(this.cntcUs).click()
      expect(Basepage.elementVisibleContainsText(this.contact,testdata.home.Header.contctUs)).to.be.ok
      cy.go('back')
      cy.get(this.abtmPulse).click()
      expect(Basepage.elementVisibleContainsText(this.aboutMplse,testdata.home.Header.abtmplse)).to.be.ok
      cy.go('back')
    }

    validateMTNnigeriaFooterLinks(){
      expect(Basepage.elementVisibleContainsText(this.mtnNigeria,testdata.home.Header.mtnNigeria)).to.be.ok
      expect(Basepage.elementVisibleContainsText(this.mtnBusinss,testdata.home.Header.mtnBusines)).to.be.ok
      cy.get(this.forInvstrs).click()
      expect(Basepage.elementVisibleContainsText(this.mtnInvest,testdata.home.Header.invest)).to.be.ok
      cy.go('back')
      cy.get(this.mtnFoundtns).click()
      expect(Basepage.elementVisibleContainsText(this.foundation,testdata.home.Header.founddtn)).to.be.ok
      cy.go('back')
      cy.get(this.carrers).click()
      cy.go('back')
    

    }

    validateCopyrightTxt(){
      expect(Basepage.elementVisibleContainsText(this.cpyrghtText,testdata.home.Header.cpyrghtTxt)).to.be.ok
    }

































































































}

export default new MTNmPulseHomepage();