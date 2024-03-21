import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/playAccountpage.json";
import commonpage from "../pages/commonPage"


export class MTNPlayAccountPage {


//locaters
public profiledropdown:string=".btn.dropdown-toggle"
public myaccount:string="div[class='cart-search-login-prt'] li:nth-child(1) a:nth-child(1)"
public MyAccount:string=".nav-link.active-pagination-link"
public Myaccountmenu:string="div[class='manage-account-tabs'] h6[class='manage-account-heading']"
public contactinfo:string="a[id='v-pills-home-tab'] p[class='m-u-text']"
public interests:string="a[id='v-pills-profile-tab'] p[class='m-u-text']"
public managesubs:string="a[id='v-pills-messages-tab'] p[class='m-u-text']"
public myProfile:string="div[id='v-pills-home'] h6[class='contact-info-heading']"
public frstname:string="div[class='row'] div[class='row'] label[for='edit-first-name']"
public lstname:string="div[class='row'] div[class='row'] label[for='edit-last-name']"
public nicknme:string="div[class='row'] div[class='row'] label[for='edit-nick-name']"
public emailAddrs:string="div[class='row'] div[class='row'] label[for='edit-email']"
public moblnmber:string="div[class='row'] div[class='row'] label[for='edit-mobile']"
public editicon:string=".user-info-edit"
public cancelBtn:string="div[class='row'] form[id='user-account-form'] div[class='col-md-12 col-lg-8 col-xl-8 col-12'] div[class='row'] div[class='col-md-12 text-center'] div a[class='cancel-edit']"
public saveBtn:string="body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(9) > div:nth-child(2) > input:nth-child(1)"
public nicknamefield:string="body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > input:nth-child(2)"
public updatedname:string="div[class='user-account-left'] p[class='user-name']"
public interestSection:string="div[id='v-pills-profile'] div[class='contact-info-box'] p"
public selectinterestText:string="div[class='user-info-change-container'] p[class='interest-selection-guide']"
public musicbtn:string="div[class='user-interest-box'] span[value='Music']"
public videobtn:string="div[class='user-info-change-container'] span[value='Videos']"
public newstrndsbtn:string="div[class='user-info-change-container'] span[value='News & Trends']"
public lifestylebtn:string="div[class='user-info-change-container'] span[value='Lifestyle & Fashion']"
public health:string="#v-pills-profile > div > div.user-info-change-container > div > div > div:nth-child(5) > span"
public gamesbtn:string="#v-pills-profile > div > div.user-info-change-container > div > div > div:nth-child(6) > span"
public foodbtn:string="div[class='user-info-change-container'] span[value='Food & Culinary']"
public eductnbtn:string="div[class='user-info-change-container'] span[value='Education & Learning']"
public Msubscriptions:string="#v-pills-messages-tab > div > p"
public mSubscriptionpage:string=".nav-link.active-pagination-link"
public nicknameUpdate:string="#block-selfservice-content > div > div > div.row.user-account-desktop > div.col-md-12.col-lg-4.col-xl-4 > div > div.user-profile-card > div.user-profile-details > p"

























//methods
  
clickOnProfileDropdown(){
    cy.get(this.profiledropdown).click()
}

clickOnMyAccount(){
    cy.get(this.myaccount).click()
}

validateMyAccountPage(){
    expect(Basepage.elementVisibleContainsText(this.MyAccount,testdata.home.Accountpage.myaccount)).to.be.ok
}

Validatemyaccountmenu(){
    expect(Basepage.elementVisibleContainsText(this.Myaccountmenu,testdata.home.Accountpage.menuAccount)).to.be.ok

}

validateMyaccountMenuSections(){
    expect(Basepage.elementVisibleContainsText(this.contactinfo,testdata.home.Accountpage.contactinf)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.interests,testdata.home.Accountpage.interest)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.managesubs,testdata.home.Accountpage.Managesubscptn)).to.be.ok
}

ValidateMyProfilepage(){
    expect(Basepage.elementVisibleContainsText(this.myProfile,testdata.home.Accountpage.myProfile)).to.be.ok
}

valiadteContactInfoElements(){
    expect(Basepage.elementVisibleContainsText(this.frstname,testdata.home.Accountpage.frstnme)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.lstname,testdata.home.Accountpage.lstnam)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.nicknme,testdata.home.Accountpage.nckname)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.emailAddrs,testdata.home.Accountpage.emailAdrs)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.moblnmber,testdata.home.Accountpage.mblenmbr)).to.be.ok
}

clickOnEditIcon(){
    cy.get(this.editicon).click({force:true})
}

validateTheNicknameField(){
    cy.get(this.nicknamefield).scrollIntoView()
    cy.get(this.nicknamefield).clear()
    Basepage.enterText(this.nicknamefield,'maheshhh')
}

validateCancelandSavebtn(){
    expect(Basepage.elementVisibleContainsText(this.cancelBtn,testdata.home.Accountpage.cancl)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.saveBtn,testdata.home.Accountpage.save)).to.be.ok
}

clickONSaveBtn(){
    cy.get(this.saveBtn).click()
}

validateNicknameUPdated(){
    expect(Basepage.elementVisibleContainsText(this.nicknameUpdate,testdata.home.Accountpage.profilename)).to.be.ok
}

 clickONInterestSelection(){
    cy.get(this.interests).click({force:true})
 }

 validateINtersetSection(){
    expect(Basepage.elementVisibleContainsText(this.interestSection,testdata.home.Accountpage.IntrestSection)).to.be.ok
 }
  
 ValidateTextinInterestSection(){
    expect(Basepage.elementVisibleContainsText(this.selectinterestText,testdata.home.Accountpage.IntrestSectionText)).to.be.ok
 }

 validateInterstCategories(){
    expect(Basepage.elementVisibleContainsText(this.musicbtn,testdata.home.Accountpage.music)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.videobtn,testdata.home.Accountpage.videos)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.newstrndsbtn,testdata.home.Accountpage.newsTrends)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.lifestylebtn,testdata.home.Accountpage.lifestyle)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.health,testdata.home.Accountpage.helath)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.gamesbtn,testdata.home.Accountpage.games)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.foodbtn,testdata.home.Accountpage.food)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.eductnbtn,testdata.home.Accountpage.eductaion)).to.be.ok
 }

  clickOnInterestcategory(){
    cy.get(this.gamesbtn).click({force:true})
    cy.wait(2000)
    cy.get(this.health).click({force:true})
    cy.wait(2000)
    cy.get(this.gamesbtn).click({force:true})
    cy.wait(2000)
    
  }
 
  clickOnManageSubscriptionTab(){
    cy.get(this.Msubscriptions).click()
  }

  validateMySubscriptionPage(){
    expect(Basepage.elementVisibleContainsText(this.mSubscriptionpage,testdata.home.Accountpage.msubscription)).to.be.ok
  }


























































}
 
export default new MTNPlayAccountPage();