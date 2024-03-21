import { Basepage } from "../../support/basepage";

import Registrationpage from "../../fixtures/MTNNewuserRegistration.json"

export class MTNNewuserRegistration {

// Create locator for element
public Accountoption:string = "#taskList > span"
public login:string = "#customSelect > div > ul > li > a" 
public loginwithFacebook:string = "#btn-facebook" 
public loginwithGoogle:string = "#btn-google"
public loginwithMobileNumber:string = "#btnusingMobile"  
public loginWithExistingUser:string = "#btn-login"
public registerNewUser:string = "#loginContent1 > div > div > div.col-md-6.col-lg-6.col-sm-12.login-text-wp > form:nth-child(2) > div > div.reg-visiable > a"
public clicksonRegisterNow:string = "#loginContent1 > div > div > div.col-md-6.col-lg-6.col-sm-12.login-text-wp > form:nth-child(2) > div > div.reg-visiable > a" 
public kYCInformation:string = "#reg-heading-title"
public provideTheirEmail:string = "#regemail"
public mandatoryInformationUserName:string = "#username"
public mandatoryInformationPassword:string = "#step-1 > div > div:nth-child(4) > div:nth-child(1)"
public mandatoryInformationConfirmPassword:string = "#step-1 > div > div:nth-child(4) > div:nth-child(2)"
public mandatoryInformationFirstName:string = "#name"
public mandatoryInformationLastName:string = "#lastname" 
public noOption:string = "#businessNo"
public clickOnContinue:string = "#btn-signup"
public SoftwareDigitalService:string = "#step-2 > div.row.my-3.px-2 > ul > li:nth-child(4) > label > img"
public teamsandCondition:string = "#terms" 
public submissionofDetails:string = "#btnsignupsubmit"
public emailAddressisAlreadyinUse:string = "#error-message-reg"
public backButtonIcon:string = "#loginContent1 > div > div > div.col-md-6.col-lg-6.col-sm-12.login-text-wp > div.register-screen-2.show-block > div.login-header.mb-2 > div.back-block > a" 
public rigisterNow:string = "#loginContent1 > div > div > div.col-md-6.col-lg-6.col-sm-12.login-text-wp > form:nth-child(2) > div > div.reg-visiable > a" 
public emailAddressThatHaveNotBeUsedPreviously:string = "#regemail"
public Username:string = "#username" 
public Password:string = "#step-1 > div > div:nth-child(4) > div:nth-child(1)" 
public confirmPassword:string = "#step-1 > div > div:nth-child(4) > div:nth-child(2)" 
public firstName:string = "#step-1 > div > div:nth-child(5) > div:nth-child(1)"
public lastName:string = "#step-1 > div > div:nth-child(5) > div:nth-child(2)"   
public businessnoOption:string = "#businessNo"
public continueOption:string = "#btn-signup"
public socialMedia:string = "#step-2 > div.row.my-3.px-2 > ul > li:nth-child(5) > label > img"
public clickonTheTermsandCondition:string = "#terms" 
public submissionofdetails:string = "#btnsignupsubmit"  
public verifyTheEmailAddress:string = "#m_387320485305937109bodyCell > div > p:nth-child(4) > a"


//Create all action methods 
clicksonAccountoption() {
    Basepage.clickElement(this.Accountoption)

}  
clicksonlogin() {
    Basepage.clickElement(this.login)

}
viewloginwithFacebook() {
    Basepage.elementVisible(this.loginwithFacebook)

}
viewloginwithGoogle() {
    Basepage.elementVisible(this.loginwithGoogle)

}
viewloginwithMobileNumber() {
    Basepage.elementVisible(this.loginwithMobileNumber) 

}
viewloginWithExistingUser() {
    Basepage.elementVisible(this.loginWithExistingUser)

}
viewregisterNewUser() {
    Basepage.elementVisible(this.registerNewUser)

}
 selectclicksonRegisterNow() {
    Basepage.clickElement(this.clicksonRegisterNow)

 }
 viewkYCInformation() {
Basepage.elementVisible(this.kYCInformation)

}
testprovideTheirEmail() {
    Basepage.enterText(this.provideTheirEmail,"seg2real@gmail.com")

    }
    testmandatoryInformationUserName() {
        Basepage.enterText(this.mandatoryInformationUserName,"Segzy")

    }
    testmandatoryInformationPassword() {
        Basepage.enterText(this.mandatoryInformationPassword,"Love@123")

    }
    testmandatoryInformationConfirmPassword() {
        Basepage.enterText(this.mandatoryInformationConfirmPassword,"Love@123")

    }
    testmandatoryInformationFirstName() {
        Basepage.enterText(this.mandatoryInformationFirstName,"Segun")

    }
    testmandatoryInformationLastName() {
        Basepage.enterText(this.mandatoryInformationLastName,"Ogunfowote")

    }
    selectnoOption() {
        Basepage.clickElement(this.noOption)

    } 
    userclickOnContinue() {
        Basepage.clickElement(this.clickOnContinue)

    }
    selectSoftwareDigitalService() {
        Basepage.clickElement(this.SoftwareDigitalService)

    }
    clickteamsandCondition() {
        Basepage.clickElement(this.teamsandCondition)

    }
    clicksubmissionofDetails() {
        Basepage.clickElement(this.submissionofDetails)

    }
    validateemailAddressisAlreadyinUse() {
        expect(Basepage.elementVisibleContainsText(this.emailAddressisAlreadyinUse,Registrationpage.userRegistrationpage.userinformation.Errormessage)).to.be.ok
        

    }
    clickbackButtonIcon() {
        Basepage.clickElement(this.backButtonIcon)

    }
    clickrigisterNow() {
        Basepage.clickElement(this.rigisterNow)

    }
    inputemailAddressThatHaveNotBeUsedPreviously() {
        Basepage.enterText(this.emailAddressThatHaveNotBeUsedPreviously,"segunautomation001@gmail.com")

    }
    provideUsername() {
        Basepage.enterText(this.Username,"Segzy")

    }
    providePassword() {
        Basepage.enterText(this.Password,"Love@123")

    }
    provideconfirmPassword() {
        Basepage.enterText(this.confirmPassword,"Love@123")

    }
    providefirstName() {
        Basepage.enterText(this.firstName,"Segun")

    }
    providelastName() {
        Basepage.enterText(this.lastName,"Ogunfowote")

    }
    selectbusinessnoOption() {
        Basepage.clickElement(this.businessnoOption)
       
    }
    clickcontinueOption() {
        Basepage.clickElement(this.continueOption)

    }
    clicksocialMedia() {
        Basepage.clickElement(this.socialMedia)

    }
    thenclickonTheTermsandCondition() {
        Basepage.clickElement(this.clickonTheTermsandCondition)

    }
    clicksubmissionofdetails() {
        Basepage.clickElement(this.submissionofdetails)
        
    }

}
export default new MTNNewuserRegistration();