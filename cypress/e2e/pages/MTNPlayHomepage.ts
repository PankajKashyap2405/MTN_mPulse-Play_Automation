import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/PlayHome.json";
import commonpage from "../pages/commonPage"


export class MTNPlayHomepage {

    //locators
    public MTNlogo:string="a[class='navbar-brand'] img[alt='MTN logo']"
    public searchbar:string="div[class='search-prt new-search mtn-search'] img"
    public searchbartext:string="#edit-keyword"
    public searchResults:string=".autocomplete-suggestion-label"
    public landingPage:string=".partner-title-name"
    public shoptext:string="#mega-menu > li:nth-child(1) > a > span"
    public playtext:string="#mega-menu > li:nth-child(2) > a > span"
    public business:string="#mega-menu > li:nth-child(3) > a > span"
    public offers:string="#mega-menu > li:nth-child(4) > a > span"
    public mpulse:string=".append_token.secondary-nav__menu-links.secondary-nav__menu-links--link.secondary-nav__menu-links--level-1"
    public exploreMTN:string="a[class='secondary-nav__menu-links secondary-nav__menu-links--link secondary-nav__menu-links--level-1']"
    public themeIcon:string="ul > li.web-theme > a.dark-theme-btn"
    public lightThemeIcon:string="li[class='web-theme'] a[class='light-theme-btn']"
    public darkThemeIcon:string="li[class='web-theme'] a[class='dark-theme-btn']"
    public whatsnew:string="#block-selfservice-content > div > div:nth-child(3) > div:nth-child(1) > div > h5 > span"
    public whatsnewVideo:string="#block-selfservice-content > div > div:nth-child(3) > div:nth-child(2) > div > ul > li:nth-child(1) > a"
    public whatsnewMusic:string=".what-new[href='#2']"
    public whatsnewLifestyle:string=".what-new[href='#30']"
    public whatsnewGame:string=".what-new[href='#3']"
    public viewallwhatsnew:string="#block-selfservice-content > div > div:nth-child(3) > div:nth-child(2) > div > ul > div > a"
    public whatsNewViewAll:string=".nav-link.active-pagination-link"
    public homeBreadcrumb:string=".nav-link.breadcrumb__link"
    public whatsTrending:string="div:nth-child(5) div:nth-child(1) div:nth-child(1) h5:nth-child(1) span:nth-child(1)"
    public whatsTrendVideo:string="#block-selfservice-content > div > div:nth-child(5) > div:nth-child(2) > div > ul > li:nth-child(1) > a"
    public whatsTrendMusic:string=".trending[href='#2']"
    public WhatsTrendLifestyle:string=".trending[href='#30']"
    public WhatsTrendGame:string=".trending[href='#3']"
    public whatsTrendingViewall:string=".play-color[href='/play/whats-trending']"
    public viewallWhatrending:string="#block-selfservice-content > div > div > div:nth-child(1) > div > h5 > span"
    public just4Usection:string="div:nth-child(4) div:nth-child(1) div:nth-child(1) h5:nth-child(1)"
    public just4Uviewallbtn:string="#block-selfservice-content > div > div:nth-child(4) > div > div.col-md-12.d-flex.justify-content-between.align-items-center > span > a"
    public just4UviewallPage:string="h5[class='text-title-name mt-1'] span"
    public mysubscriptions:string=".text-title-name.mb-4.d-block"
    public mysubscriptonViewAll:string="#block-selfservice-content > div > div:nth-child(2) > div > div.col-md-12.d-flex.justify-content-between.align-items-center > span > a"



 



    //methods
  validateMtnLogo(){
    cy.get('.navbar-brand').find('img').should('be.visible') 
  }

  validateSearchBar(){
    cy.get('.search-icon').find('img').should('be.visible')
  }
   
   seachBarValidation(){
    cy.get('#edit-keyword').clear({force:true}).type('Tapestry');
   }
   clickOnSearchResult(){
    cy.get(this.searchResults).click({force:true})
   }
   
   partnerLandingPageValidation(){
    expect(Basepage.elementVisibleContainsText(this.landingPage,testdata.home.Header.partnername)).to.be.ok
   }
   
   clickOnMTnLogo(){
    cy.get(this.MTNlogo).click({force:true})
   }

   validateHeaderLinks(){
    expect(Basepage.elementVisibleContainsText(this.shoptext,testdata.home.Header.shopelink)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.shoptext,testdata.home.Header.playlink)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.shoptext,testdata.home.Header.business)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.shoptext,testdata.home.Header.offers)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.shoptext,testdata.home.Header.mpulselink)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.shoptext,testdata.home.Header.exploremtn)).to.be.ok
   }

   themeIconValidation(){
    cy.get(this.themeIcon).click({force:true})
   }

   validateLightthemeBtn(){
    cy.get('.light-theme-btn').find('img').should('be.visible') 
  }
  
   themeValidation(){
    cy.get(this.lightThemeIcon).click({force:true})
   }
 
   validateDarkthemeBtn(){
    cy.get('.dark-theme-btn').find('img').should('be.visible') 
  }

  validateWhatsnewSection(){
    expect(Basepage.elementVisibleContainsText(this.whatsnew,testdata.home.Header.whatsnew)).to.be.ok
  }

  validateSectionsunderwhatsnew(){
    expect(Basepage.elementVisibleContainsText(this.whatsnewVideo,testdata.home.Header.video)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.whatsnewMusic,testdata.home.Header.Music)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.whatsnewLifestyle,testdata.home.Header.lifestyle)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.whatsnewGame,testdata.home.Header.game)).to.be.ok
  }
  validateWhatsNewsections(){
    cy.get(this.whatsnewVideo).click({force:true})
    cy.wait(2000)
    cy.get(this.whatsnewMusic).click({force:true})
    cy.wait(2000)
    cy.get(this.whatsnewLifestyle).click({force:true})
    cy.wait(2000)
    cy.get(this.whatsnewGame).click({force:true})
    cy.wait(2000)

  }

  

  validateViewallWhatsnew(){
    cy.get(this.viewallwhatsnew).click({force:true})
  }
  
  validateWhatsNewViewAllPage(){
    expect(Basepage.elementVisibleContainsText(this.whatsNewViewAll,testdata.home.Header.whatsNewViewALL)).to.be.ok
  }

  clickOnBreadcrumbHome(){
    cy.get(this.homeBreadcrumb).click({force:true})
  }
 
  validateWhatsTrending(){
    expect(Basepage.elementVisibleContainsText(this.whatsTrending,testdata.home.Header.whatsTrending)).to.be.ok
  }
   
  validateWhatsTrendingSection(){
    cy.get(this.whatsTrendVideo).click({force:true})
    cy.wait(2000)
    cy.get(this.whatsTrendMusic).click({force:true})
    cy.wait(2000)
    cy.get(this.WhatsTrendLifestyle).click({force:true})
    cy.wait(2000)
    cy.get(this.WhatsTrendGame).click({force:true})
  }

  validateWhatsTrendingViewAll(){
    cy.get(this.whatsTrendingViewall).click({force:true})
  }
  

  validateWhatstrendingViewAllPage(){
   expect(Basepage.elementVisibleContainsText(this.viewallWhatrending,testdata.home.Header.whatstrenidngviewall)).to.be.ok
  }

  validateJust4Usection(){
    expect(Basepage.elementVisibleContainsText(this.just4Usection,testdata.home.Header.just4u)).to.be.ok
  }
   
  validateJust4Uviewall(){
    cy.get(this.just4Uviewallbtn).click({force:true})
  }

  validateJust4UviewAllPage(){
    expect(Basepage.elementVisibleContainsText(this.just4UviewallPage,testdata.home.Header.just4uviewallapge)).to.be.ok
  }

  validateMySubscriptions(){
    expect(Basepage.elementVisibleContainsText(this.mysubscriptions,testdata.home.Header.mysubscription)).to.be.ok
  }

  validateMysubscriptionViewall(){
    cy.get(this.mysubscriptonViewAll).click()
  }

navigatePlayURLHomePage(){
  cy.visit('https://playpreprod.mtn.ng/')

}





































}
export default new MTNPlayHomepage();