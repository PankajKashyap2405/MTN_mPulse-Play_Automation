import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/mPulseParentDashboard.json";
import commonpage from "../pages/commonPage"


export class MTNmPulseParentDashboard {


//Locators
public parentDboard:string=".white-active-pagination"
public name:string="div[class='pare_profile-detail'] h6"
public number:string="div[class='pare_profile-detail'] small"
public data:string="div[class='tariff_data'] p[class='t_data-title']"
public airtime:string="div[class='tariff_airtime'] p[class='t_data-title']"
public buybndle:string="#block-selfservice-content > div.block__content > div:nth-child(1) > div > div > div > div > div > div.col-md-8.col-sm-8.col-12.mt-2 > div > div > div > div:nth-child(2) > div > div > a"
public rechrge:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)"
public tarif:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > span:nth-child(1)"
public acnttype:string="div[class='parent-t_announcement-box'] span[class='parent-tarif']"
public parentacnt:string="div[class='parent-t_announcement-box'] span[class='parent-tarif-b']"
public editProfile:string=".t_edit-profile"
//edit profile page
public edtprfl:string=".white-active-pagination"
public upldpictr:string="#edit-profile-pic--label"
public firstname:string="label[for='edit-field-first-name']"
public lstname:string="label[for='edit-field-last-name']"
public emlfield:string="label[for='edit-field-email-address']"
public closebtn:string="#edit-skip"
public updteprofl:string="#edit-submit"
public fstnme:string="#edit-field-first-name"
public succesmsg:string=".messages__container"
public buybundle:string="h2[class='titleHeadings']"
public mtnlogo:string="a[class='navbar-brand'] img[alt='MTN logo']"
public recrgePage:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
























//Methods

//Dashboard
 validateParentDashboard(){
    expect(Basepage.elementVisibleContainsText(this.parentDboard,testdata.home.Header.parntdshbrd)).to.be.ok
 }

 validateDashboardCompnents(){
    //expect(Basepage.elementVisibleContainsText(this.name,testdata.home.Header.name)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.number,testdata.home.Header.number)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.data,testdata.home.Header.data)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.airtime,testdata.home.Header.airtme)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.buybndle,testdata.home.Header.bybndle)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.rechrge,testdata.home.Header.rechrge)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.tarif,testdata.home.Header.tarif)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.acnttype,testdata.home.Header.acnttype)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.parentacnt,testdata.home.Header.parntAcnt)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.editProfile,testdata.home.Header.editprfl)).to.be.ok
 }
    
 //editProfilepage
    clickOnEditProfilePage(){
        cy.get(this.editProfile).click()
    }

    validateEditProfilePageisDsiplayed(){
        expect(Basepage.elementVisibleContainsText(this.edtprfl,testdata.home.Header.edtprfl)).to.be.ok
    }
    
    validateEditProfilepageComponents(){
        expect(Basepage.elementVisibleContainsText(this.upldpictr,testdata.home.Header.upldprfpic)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.firstname,testdata.home.Header.firstnme)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.lstname,testdata.home.Header.lstnme)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.emlfield,testdata.home.Header.emlfld)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.closebtn,testdata.home.Header.clsbtn)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.updteprofl,testdata.home.Header.updtPrf)).to.be.ok
    }
    
    updateTheFirstnamefield(){
        cy.get('#edit-field-first-name').clear({force:true}).type('maheshhh');
        cy.get(this.updteprofl).click()
    }
    
    valiadateSuccesMsg(){
    expect(Basepage.elementVisibleContainsText(this.succesmsg,testdata.home.Header.sucssmsg)).to.be.ok
    }
      
    validateFirstname(){
    expect(Basepage.elementVisibleContainsText(this.name,testdata.home.Header.name)).to.be.ok
    }
      
    clickOnBuyBndle(){
    cy.get(this.buybndle).click({force:true})
    }

    validateBuybundlePageisDisplayed(){
    expect(Basepage.elementVisibleContainsText(this.buybundle,testdata.home.Header.buybndle)).to.be.ok
    }
      
    ClickOnRechargeButn(){
     cy.get(this.mtnlogo).click()
     cy.wait(3000)
     cy.get(this.rechrge).click()
    }
    
    ValidateRechragePageIsDsiplayed (){
        expect(Basepage.elementVisibleContainsText(this.recrgePage,testdata.home.Header.airtmerechrge)).to.be.ok
    }
     
    navigateToHomepage(){
        cy.get(this.mtnlogo).click()
    }



































}

export default new MTNmPulseParentDashboard();