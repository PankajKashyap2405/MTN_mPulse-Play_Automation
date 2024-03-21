import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/airtime.json";
import homePage from "../pages/homePage";

export class Emarketpage{
    public clickOnAccountIcon:string=" div.header.content.mf-initial ul li span button img"
    public clickOnSignuplink:string="div[class='customer-menu'] ul[class='header links']"
    public clickOnRegisterLink:string=".reg-log-txt.font-wg500"
    public clickOnEmailfield:string="#regemail"
    public clickUserNamefield:string="#username"
    public clickOnPasswordfield:string="#regpassword"
    public clickOnConfirmPasswordfield:string="#regconfirmpassword"
    public clickOnFirstNamefield:string="#name"
    public clickOnLastNamefield:string="#lastname"
    public clickOnNobutton:string="#businessNo"
    public clickOnContinueButton:string="#btn-signup"
    public validateErrorMsg:string="#error-message-reg"
    public clickOnInterest:string="img[src='https://empnew.thestorywallcafe.com/auth0/softwareBI.svg']"
    public clickOnTerms:string="#terms"
    public clickOnSubmit:string="#btnsignupsubmit"
    public validateConfirmLink:string=".mf-initial[data-bind='html: $parent.prepareMessageForHtml(message.text)']"
    public passwordStrength1:string="#strength"
    public passwordStrength2:string="#nameEmail"    
    public passwordStrength3:string="#length"  
    public passwordStrength4:string="#numberSymbols"
    public errorMagValidate:string="#error-message-reg"
    public clickOnManageprofile:string=".account-link-toplink"
    public clickOnEditbutton:string="body > div:nth-child(2) > main:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > a:nth-child(1)"
    public validateeditmsg:string="#modal-title-20"
    public account:string       =".login-icon-text"
    public signUpBtn : string   = "a[title='Login/Sign Up']"
    public Validatefacebook:string="#btn-facebook"
    public validatesignwithgoogle:string="#btn-google"
    public validateMobilenumber:string="#btnusingMobile"
    public clickOnforgotpassword:string=".fgt"
    public clickOnEnterEmail:string="#reset-email"
    public clickOnsendemail:string="#link-reset"





fillingdetails(){
cy.get("#regemail").type(Cypress.env('user_email'),{force:true})
cy.get("#username").type(Cypress.env('user_name'),{force:true})
cy.get("#regpassword").type(Cypress.env('user_password1'),{force:true})
expect(Basepage.elementVisibleContainsText(this.passwordStrength1, testdata.recharge.Airtime.passwordpopup1)).to.be.ok
expect(Basepage.elementVisibleContainsText(this.passwordStrength2, testdata.recharge.Airtime.passwordpopup2)).to.be.ok
expect(Basepage.elementVisibleContainsText(this.passwordStrength3, testdata.recharge.Airtime.passwordpopup3)).to.be.ok
expect(Basepage.elementVisibleContainsText(this.passwordStrength4, testdata.recharge.Airtime.passwordpopup4)).to.be.ok

cy.get("#regpassword").clear()
cy.get("#regpassword").type(Cypress.env('user_password'),{force:true})

cy.get("#regconfirmpassword").type(Cypress.env('confirm_Password'),{force:true})
cy.get("#name").type(Cypress.env('first_name'),{force:true})
cy.get("#lastname").type(Cypress.env('last_name'),{force:true})
cy.get(this.clickOnNobutton).click({force:true})
cy.get(this.clickOnContinueButton).click({force:true})

}
validateErrorMesage(){
  cy.get(this.clickOnContinueButton).click({force:true}) 
  expect(Basepage.elementVisibleContainsText(this.validateErrorMsg,testdata.recharge.Airtime["error msg"])).to.be.ok
}

clickOnInterestTermsAndSubmit(){
    cy.get(this.clickOnSubmit).click({force:true}) 
    expect(Basepage.elementVisibleContainsText(this.errorMagValidate, testdata.recharge.Airtime.errormag2)).to.be.ok
    cy.get(this.clickOnInterest).click({force:true}) 
    cy.get(this.clickOnTerms).click({force:true}) 
    cy.get(this.clickOnSubmit).click({force:true}) 

}
valiadteSucessmsg(){
    expect(Basepage.elementVisibleContainsText(this.validateConfirmLink,testdata.recharge.Airtime["Success pop up"])).to.be.ok
    cy.get(this.validateConfirmLink).click({force:true})
}

clickOnAccountandvalidatingedit(){
    cy.get(this.clickOnAccountIcon).click({force:true})
    cy.get(this.clickOnManageprofile).click({force:true})
    cy.get(this.clickOnEditbutton).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.validateeditmsg,testdata.recharge.Airtime.editmsg)).to.be.ok

}


//forgot password
clickOnRegisterlink(){
  cy.get(this.account).click()
  cy.get(this.signUpBtn).click()
    
    }

validatesignInwithGoogleFacebook(){
    expect(Basepage.elementVisibleContainsText(this.Validatefacebook,testdata.recharge.Airtime.signinwithfacebook)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.validatesignwithgoogle,testdata.recharge.Airtime.signinwithgoogle)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.validateMobilenumber,testdata.recharge.Airtime.loginwithnumber)).to.be.ok
}

clickOnforgotpd(){
    cy.get(this.clickOnforgotpassword).click()
    
}

enteringEmail(){
    cy.get("#reset-email").type(Cypress.env('forgotpasswordemail'),{force:true})
    cy.get(this.clickOnsendemail).click({force:true})
}}
export default new Emarketpage();