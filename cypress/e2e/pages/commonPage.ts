import {Basepage} from "../../support/basepage";
import { recurse } from "cypress-recurse";
import testdata from "../../fixtures/loginUIEle.json";
import '../../support/commands';
import testdataSSP from "../../fixtures/self_service.json";
import 'cypress-iframe'



export class CommonPage{
/**
 * Page Elements
 */
   public account:string       =".login-icon-text"
   public signUpBtn : string   = "a[title='Login/Sign Up']"
   public emailTxtBox: string    ="#email"
   public passwordTxtBox: string ="#password"
   public loginBtn: string       ="#btn-login"
   public logoutBtn: string       ="li[data-label='or'] a"
   public actionBtn:string = ".cus tomer-first-name"
   public logoutMessage : string ="span[class='base']"
   public username:string ="#edit-name"
   public password:string ="#edit-pass"
   public playSubmit:string ="#edit-submit"
   public errorMessage:string ="#error-message"
   public signInWithGoogleBtn :string = "#mplusebtn-googlelogin"
   public signINPageLabel:string =".hd-login.text-center.mb-2"
   public mPulseLoginbtn:string ="div[class='search-login'] img[alt='Cart']"
   public mPulseLogoutBtn:string ="div[class='dropdown-menu profile-menu-dropdown show'] a:nth-child(2)"
   public userAccount:string ="div[class='nav-wrapper'] p:nth-child(1)"
   public mPulseLogoutMsg :string = "div[class='owl-item active'] strong:nth-child(1)"

   //selfservice elements
   public enterpriseBusinessPage :string = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)"
   public selectAccountID :string = "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)"
   public accountIDtxtbox :string = "#ai-account-id"
   public clickonContinue :string = "button[type='submit']"
   public successMsg :string = "div[role='status']"
   //Element for PaymentGateway Testpay.mtn.ng
   public debitCardOption: string = "body > app-root:nth-child(1) > app-root:nth-child(2) > app-payment-gateway:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-pg-home:nth-child(1) > mat-card:nth-child(1) > mat-card-content:nth-child(1) > mat-list:nth-child(1) > div:nth-child(2) > mat-list-item:nth-child(1)"
  public cardDetails: string = "#new"
  public enterCardNumber: string = "#mat-input-0"
  public cardExpiryDate: string =  "#mat-input-1"
  public cvvNumber: string = "#mat-input-2"
  public payButton: string = "button[class='mat-focus-indicator !block !text-[0.825rem] !w-[15rem] cursor-pointer bg-yello border border-gray-500 !py-0 !rounded-full !mx-auto mb-2 mat-flat-button mat-button-base ng-star-inserted']"
  public successPayment: string = "h1[class='!text-base md:!text-2xl !text-green-600 !mb-8 ng-star-inserted']"
  public transactionID: string =  "body > app-root:nth-child(1) > app-root:nth-child(2) > app-payment-gateway:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-pg-success:nth-child(2) > mat-card:nth-child(1) > mat-card-content:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h2:nth-child(2)"
  public receiptNo1RCT:string = "div[class='relative col-span-7 -m-6 rounded-br-xl rounded-tr-xl bg-white p-4 md:py-12 md:pl-14'] p:nth-child(6) span"
  public paymentSuccessMsg:string = "div[class='w-full py-4 px-8'] div:nth-child(2) div:nth-child(2) p:nth-child(1)"
  public receiptAmount:string = "div[class='flex items-end pb-1'] b"
  public serviceAccount:string = "div[class='flex items-center justify-between py-6']:nth-child(4) p:nth-child(2)"
  public backToHome: string = "div[class='text-center mt-5 text-[#29668B] underline'] a"
/**
 * Navigate to Application url
 */ 
   navigateToAplication() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
      Basepage.visit('/')
      cy.wait(5000)
   }

/**
 * Login to MTN Application with registered Email 
 */ 
   loginMTNApplicationWithEmail(){
    this.emailAauthentication()
  }

  /**
   * login to mtn appliction with invalid email *
   * 
   */
  loginMTNApplicationWithiInvalidEmail(){
    this.emailAauthentication()
  }

  /* Login to MTN Application with Google Account 
  */ 
    loginMTNApplicationWithGoogleAccount(){
     this.googleAccountAauthentication()
   }       
/**
 * Authentication via Email */

   emailAauthentication(){
   cy.get(this.account).click()
   cy.get(this.signUpBtn).click()
   cy.wait(5000)
     Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
   cy.origin('https://testauth.mtnonline.com', () => {
    cy.on('uncaught:exception', (e) => {
     if (e.message.includes('Things went bad')) {
     // we expected this error, so let's ignore it`
      // and let the test continue`
      return false
    }
  })
     
      cy.get("#email").type(Cypress.env('auth_username'))
      cy.get("#password").type(Cypress.env('auth_password'))
      cy.get("#btn-login").click()
    })
      cy.wait(5000)
      cy.visit('/')
      cy.wait(5000)
      cy.get(this.account).click()
      cy.get(this.signUpBtn).click()
      cy.get("h2.popup-title").then(($input)=>{
        const val = $input.text()
        if( val == "Subscribe to Our Newsletter!")
        {
             cy.get("button[class=action-close]").click()
        }
        })

  }

  /** 
  *invalid emailAauthentication 
  **/
  invalidEmailAauthentication(){
    cy.get(this.account).click()
    cy.get(this.signUpBtn).click()
    cy.wait(10000)
      Cypress.on('uncaught:exception', (err, runnable) => {
     return false;
   });
    cy.origin('https://testauth.mtnonline.com', () => {
     cy.on('uncaught:exception', (e) => {
      if (e.message.includes('Things went bad')) {
       return false
     }
    })
    cy.origin('https://testauth.mtnonline.com', () => {
      cy.get("#email").type(Cypress.env('invalid_username'))
       cy.get("#password").type(Cypress.env('invalid_password'))
       cy.get("#btn-login").click()
     })
    })
       //cy.wait(10000)



   }
 

   

  /**
 * Authentication via Mobile number */

  mobileNumberAauthentication(){
    cy.get(this.account).click()
    cy.get(this.signUpBtn).click()
    cy.wait(1000)
    cy.origin('https://testauth.mtnonline.com', () => {
       cy.get("#btnusingMobile[type='submit']").click()
       cy.get("#txtEmailMobileNumForEM").type(Cypress.env('auth_mobile'))
       cy.get("#enterOtpIconForEM[style='display: block;']").click()
       expect(cy.get("#showResMessageForEM[style='display: block;']").contains(testdata.HomePage.Account.OTPSentToEmail).should('be.visible')).to.be.ok
     })
       cy.wait(10000)
       cy.visit('/')
   }
 
  /**
 * Authentication via google account */
  
  googleAccountAauthentication(){
    console.log(Cypress.browser)
    cy.get(this.account).click()
    cy.get(this.signUpBtn).click()
    cy.wait(1000)
      //Cypress.on('uncaught:exception', (err, runnable) => {
      //return false;
      //});
     cy.origin('https://testauth.mtnonline.com', () => {
       cy.get("#btn-google").click()
       cy.wait(1000)
  })

      cy.get('#af-error-container > p:nth-child(2) > b')
      cy.url().then(url => {
      cy.log(url);
      cy.visit(url,{ failOnStatusCode: false })
      });
    
     // let v1 = cy.url() 
      //var v = v1.toString()
      
      

      //cy.origin('https://accounts.google.com', () => {
       cy.get("#identifierId").type(Cypress.env('auth_googleAccountid'))
       cy.get("#identifierNext").click()
       const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/ 
       Cypress.on('uncaught:exception', (err) => 
       { if (resizeObserverLoopErrRe.test(err.message)) { 
        return false } })
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        })
  
       cy.get("input[type='password']").type(Cypress.env('auth_googleAccountpwd'))
       cy.get("#passwordNext").click()   
      //})
     
   
      cy.wait(50000)
       //cy.visit('/')
   }     
       
 
/**
 * Authentication via facebook account */

facebookAccountAauthentication(){
  cy.get(this.account).click()
  cy.get(this.signUpBtn).click()
  cy.wait(1000)
  cy.origin('https://testauth.mtnonline.com', () => {
     cy.get("#btn-facebook").click()
     cy.origin('https://www.facebook.com', () =>{
     cy.get("#email").type(Cypress.env('auth_facebookid'))
     cy.get("#pass").type(Cypress.env('auth_facebookpwd'))
     cy.get("#loginbutton").click()
     })
     
   })
     cy.wait(20000)
     cy.visit('/')
 }   

 /* User Logout */
 logoutApplication(){
  cy.get("h2.popup-title").then(($input)=>{
    const val = $input.text()
    if( val == "Subscribe to Our Newsletter!")
    {
         cy.get("button[class=action-close]").click()
    }
    })
    cy.wait(5000)
  Basepage.clickElementForce(this.actionBtn)
  Basepage.clickElementForce(this.logoutBtn)
  expect(Basepage.elementVisibleContainsText(this.logoutMessage,testdata.HomePage.Account.LogoutMessage)).to.be.ok
 }
/**
 * Select Date, Month and Year in the Date Picker
 * Month and Year ar in the format of next and previous
 * @param eleDatePicker 
 * @param eleMonth 
 * @param eleDate 
 * @param eleYear 
 * @param elePrevious 
 * @param inputMonth 
 * @param inputDate 
 * @param inputYear 
 */
selectDate(eleDatePicker:string, eleMonth:string, eleDate:string, eleYear: string, elePrevious:string, inputMonth:string, inputDate: string, inputYear:string) {
  Basepage.clickElement(eleDatePicker)
  //Year
      recurse(
        () => cy.get(eleYear).invoke("text"),
        (n) => {
          if (!n.includes(inputYear)) {
            Basepage.clickElementNoWait(elePrevious)
            return false;
          }
          return true;
        },
        {
          limit: 50,
          timeout: 1000000, 
          delay: 300, 
      }
      );
  //Month
      recurse(
          () => cy.get(eleMonth).invoke("text"),
          (x) => {
          if (!x.includes(inputMonth)) {
              Basepage.clickElementNoWait(elePrevious)
              return false;
          }
          return true;
      },
      {
          limit: 50,
          timeout: 1000000, 
          delay: 300, 
      }
    );

  //Date
  Basepage.clickElementwithText(eleDate,inputDate )
}


/**
 * Select Date, Month and year from drop down in the calender picker
 * @param eleDatePicker 
 * @param eleMonth 
 * @param eleDate 
 * @param eleYear 
 * @param elePrevious 
 * @param inputMonth 
 * @param inputDate 
 * @param inputYear 
 */
  selectDateWithDropDown(eleDatePicker:string, eleMonth:string, eleDate:string, eleYear: string, elePrevious:string, 
    inputMonth:string, inputDate: string, inputYear: number) {
    
    //Selecting the Date Picker element
      Basepage.clickElement(eleDatePicker)

    //Select Year in the Drop Down
      Basepage.selectByValue(eleYear, inputYear)
    
    //Select Month in the Drop Down
      Basepage.selectByText(eleMonth, inputMonth)

    //Click on date
      Basepage.clickElementwithText(eleDate, inputDate)
  }

/**
 * Validate Export As text display in the Drop Down
 * @param element 
 */
  validateExportText(element:string) {
    //expect(Basepage.elementVisibleContainsText(element, testdata.CommonText.ExportAs))
  }

/**
 * Validate Export Drop Down values contains CSV or Excel
 * @param element 
 */
  validateExportDropDownOptions(element :string, value:string) {
      expect(Basepage.elementDisplayBasedonTxt(element, value))
  }

/**
 * Select value in the export Drop down
 * @param element 
 * @param selectele 
 * @param value 
 */
  selectValueInExportDropDown(element: string, selectele: string, value: string) {
      Basepage.clickElement(element)
      Basepage.wait()
  //select the csv or excel option
      Basepage.clickElementwithText(selectele,value)
      Basepage.wait()
  }

/**
 * Click on Download Button
 * @param element 
 */
  clickDownloadButton(element: string) {
      Basepage.clickElement(element)
  }
/**
 * navigateToSelfServiceAplication*/
  navigateToSelfServiceAplication() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
      cy.visit('https://selfservicepreprod.mtn.ng/')
      cy.wait(5000)
      cy.get(".text-sm.font-normal.leading-5[href='https://shop.mtn.ng/']").click({force:true})
   }
// navigateTomPulseAplication
   navigateTomPulseAplication() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
      cy.visit('https://mpulsepreprod.mtn.ng/')
      cy.wait(5000)
      cy.get("#navbarSupportedContent > ul > li:nth-child(1) > a").click({force:true})
   }
//emailAauthenticationforeShopThroughSelfService
   emailAauthenticationforeShopThroughSelfService(){
    cy.get(this.account).click()
    cy.get(this.signUpBtn).click()
    cy.wait(10000)
      Cypress.on('uncaught:exception', (err, runnable) => {
     return false;
   });
   cy.origin('https://auth.mtnonline.com', () => {
       cy.get("#email").type(Cypress.env('auth_username'))
       cy.get("#password").type(Cypress.env('auth_password'))
       cy.get("#btn-login").click({force:true})
       cy.wait(10000)
    }) 
   //})
   
       cy.wait(10000)
       //cy.visit('/')
   }
  
   //emailAauthenticationforeShopThroughmPulse

   emailAauthenticationforeShopThroughmPulse(){
    cy.get(this.account).click()
    cy.get(this.signUpBtn).click()
    cy.wait(10000)
      Cypress.on('uncaught:exception', (err, runnable) => {
     return false;
   });
   cy.origin('https://auth.mtnonline.com', () => {
       cy.get("#email").type(Cypress.env('auth_username'))
       cy.get("#password").type(Cypress.env('auth_password'))
       cy.get("#btn-login").click({force:true})
       cy.wait(10000)
    }) 
   //})
   
       cy.wait(10000)
       //cy.visit('/')
   }

  /**
 * navigateToPlayAplication*/
  navigateToPlayAplication() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
      cy.visit('https://playpreprod.mtn.ng/user')
      cy.wait(5000)
      
   } 
     /**
 * navigateToPlayAplication*/
  userAuthenticationToPlayAplication() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    
      Basepage.enterText(this.username,Cypress.env('playauth_username'))
      Basepage.enterText(this.password,Cypress.env('playauth_password'))
      cy.get(this.playSubmit).click({timeout:100})
   } 

/*
Method for clicking Register link for new user */
clickRegisterlink(){
  cy.get(this.account).click()
   cy.get(this.signUpBtn).click()
   cy.wait(10000)
     Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
   cy.origin('https://testauth.mtnonline.com', () => {
    cy.on('uncaught:exception', (e) => {
     if (e.message.includes('Things went bad')) {
     // we expected this error, so let's ignore it`
      // and let the test continue`
      return false
    }
  })
  cy.get(".reg-log-txt.font-wg500").click()
   })
}
 
/**
 * Login to MTN Application with registered Email 
 */ 
loginMTNApplicationWithInvalidEmail(){
  this.validateErrorMessageForInvalidemailAuthentication()
}
validateErrorMessageForInvalidemailAuthentication(){
  cy.get(this.account).click()
  cy.get(this.signUpBtn).click()
  cy.wait(10000)
  
Cypress.on('uncaught:exception',(err, runnable) => {
  return false;
});
cy.origin('https://testauth.mtnonline.com', () => {
  cy.on('uncaught:exception', (e) => { 
    if(e.message.includes('Things went bad')){
      //we expected this error ,so lets ignore it
      //and let the test continue
      return false
       
    }
  })

//cy.origin('https://testauth.mtnonine.com', () => {
  cy.get("#email").type('invalidUser@in')
  cy.get("#password").type('invalidpassword')
  cy.get("#btn-login").click()
  cy.wait(1000)
  cy.get("#error-message").contains("Wrong email or password.").should('be.visible');
})
cy.wait(10000)
}
 /**
 * navigateTomPulseAplicationURL*/
  navigateTomPulseAplicationURL() {
    cy.get(this.mPulseLoginbtn).click({force:true})
    cy.origin('https://testauth.mtnonline.com', () => {
    cy.get(".hd-login.text-center.mb-2").contains('Choose your preferred login').should('be.visible')
      cy.get("#mplusebtn-googlelogin").click()
    })
     
    /*cy.get('#navbarDropdownMenuLink div div p:nth-child(2) small').invoke('text').then((txt) => {
      if (txt.includes('ekfrazo.in')) {
        //trim() == 'American English') {
      //Do Something
      expect(cy.get('.white-active-pagination').should('be.visible')).to.be.ok
      } 
      else {
      //Do Something*/
      cy.origin('https://accounts.google.com', () => {
       cy.get("#identifierId").type(Cypress.env('auth_googleAccountid'))
       cy.get("#identifierNext").click()
       
     const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/ 
       Cypress.on('uncaught:exception', (err) => 
       { if (resizeObserverLoopErrRe.test(err.message)) { 
        return false } })
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        })
  
       cy.get("input[type='password']").type(Cypress.env('auth_googleAccountpwd'))
       cy.get("#passwordNext").click()
      })
      cy.wait(10000)
      }
  
  /* Login to mPulse Application with registered Google Account 
  */ 
    loginmPulseApplicationWithGoogleAccount(){
     this.mPulseAauthenticationWithGoogleAccount()
   }
   mPulseAauthenticationWithGoogleAccount(){
       cy.get("#edit-name").type(Cypress.env('auth_mpulse_username'))
       cy.get("#edit-pass").type(Cypress.env('auth_mpulse_password'))
       cy.get("#edit-submit").click()
      }
 /**
 * navigateToSelfServiceBulkSMSCorporateAplicationURL*/
 navigateToSelfServiceBulkSMSCorporateAplicationURL() {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
    cy.visit('https://bulkmessagingpreprod.mtn.ng/')
    
 } 

/* Login to SelfServiceBulkSMS Application with registered Google Account 
*/ 
validateloginSelfServiceBulkSMSCorporateApplicationWithGoogleCredentials(){
   this.SelfServiceBulkSMSAauthenticationWithCredentials()
   
 }
 SelfServiceBulkSMSAauthenticationWithCredentials(){
  cy.get(".mr-3.cursor-pointer").click()
  cy.wait(2000)
  cy.get("button[type='submit']").then(($input)=>{
    const val = $input.text()
    if(expect(val).eqls('Sign in with Auth0')){
      cy.get("button[type='submit']").dblclick({force:true})
  }
})
  cy.origin('https://testauth.mtnonline.com', () => {
  cy.get("#email-bulksmsCorporate").type(Cypress.env('bulkemailID'))
  cy.get("#password-bulksmsCorporate").type(Cypress.env('bulkemailPassword'))
    cy.get("#btn-login-bulksmsCorporate").click()
  })
  
   const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/ 
     Cypress.on('uncaught:exception', (err) => 
     { if (resizeObserverLoopErrRe.test(err.message)) { 
      return false } })
     Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
      })

    cy.wait(3000)
    //validate login
      cy.get("h6[class='text-sm text-black font-semibold leading-4 flex items-center flex-row'] span[class='mr-2']").then(($input)=>{
      const val = $input.text()
      expect(val).to.be.eql('Pankaj')
      })
   }
      
  /**navigate To Self Service Portal
  */
  navigateTo_SelfService_URL() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;   
    }); 
      cy.visit('https://selfservicepreprod.mtn.ng/')
      cy.wait(1000)
  } 
/* Users login to SelfService EB -Bill Payment Application with Account ID
*/ 
loginSSP_EnterprisesBusinessApplicationWithAccountID()
{
  this.redirectOnWebBillPage()
}

redirectOnWebBillPage()
{
    cy.get(this.enterpriseBusinessPage).click({force: true})
    cy.wait(2000)
    cy.contains('Pay bill').click({force:true}).should('have.text', 'Pay bill')
    cy.wait(1000)
  }
enterWebBillsAccountID(){
    cy.get(this.selectAccountID).click({force:true})
    //expect(Basepage.checkRediobuttonSelected(this.selectAccountID)).to.be.true
    //cy.get(this.AccountID).should('be.enabled')
    Basepage.enterText(this.accountIDtxtbox,Cypress.env('accountID'))
    cy.wait(2000)
    cy.contains('Continue').click()
    cy.wait(1000)
  }
  validateSSP_EnterprisesBusinessLoginSuccess()
{
  expect(Basepage.elementVisibleContainsText(this.successMsg, testdataSSP.Billpayment.commonDetails.successNotification)).to.be.ok

}
enterCardDetailsWithPIN_TestPayMTN_SSP()
{
  cy.wait(6000)
  cy.get(this.debitCardOption).click({force:true})
  cy.wait(6000)
  cy.get(this.cardDetails).click()
  Basepage.enterText(this.enterCardNumber, testdataSSP.MasterDebitCardPIN1.CardNumber)
  Basepage.enterText(this.cardExpiryDate, testdataSSP.MasterDebitCardPIN1.ExpiryDate)
  Basepage.enterText(this.cvvNumber, testdataSSP.MasterDebitCardPIN1.CVV)
  cy.get(this.payButton).should('be.visible').click()
  cy.wait(25000)
  
  cy.get('#mat-dialog-0 > app-iframe-modal > div > div > iframe').should('exist').then($iframe => {
          const $body = $iframe.contents()
                                      .find("iframe[width='100%']")
                                      .contents()
                                      .find('body')
                cy.wait(1000)                   
                cy.wrap($body)
                  .find('input[type=password]')
                  .eq(0)
                  .type(testdataSSP.MasterDebitCardPIN1.PIN,{force: true})
                cy.wait(1000)  
                cy.wrap($body)
                  .find('button')
                  .eq(1)
                  .click() 

              })     
  }
  validatePaymentSuccessMessage(){
      expect(Basepage.elementVisibleContainsText(this.successPayment, testdataSSP.ReceiptDetails.sucessPayment))
  }
public genratedTransactionID: any
captureTransactionID(){
    cy.wait(1000)
    cy.get(this.transactionID).should('be.visible').then(($element)=>{
        this.genratedTransactionID = $element.text().trim()
    cy.log("Transaction ID:", this.genratedTransactionID)
    })
}
captureReceiptNo1RCT(){
    cy.wait(2000)
    let genrated1RCTNo: any
    cy.get(this.receiptNo1RCT).should('be.visible').then(($element)=>{
        genrated1RCTNo = $element.text().trim()
    cy.log("Generated 1RTC:", genrated1RCTNo)
    })
}

/**
 * navigateTomPulseAplicationUserLogin*/
navigateTomPulseAplicationUserURL() {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
    cy.visit('https://mpulsepreprod.mtn.ng/user/login')
    cy.wait(5000)
 } 

/* Login to mPulse Application with registered User Account 
*/ 
  loginmPulseApplicationWithUserAccount(){
   this.mPulseAauthenticationWithUserAccount()
 }
 mPulseAauthenticationWithUserAccount(){
     cy.get("#edit-name").type(Cypress.env('auth_mpulse_username'))  
     cy.get("#edit-pass").type(Cypress.env('auth_mpulse_password'))
     cy.get("#edit-submit").click({force:true})
     cy.wait(15000)
     expect(cy.get("#block-selfservice-content > div > section.mpulse_cards_hero > div > div > div > div > div > div.owl-stage-outer > div > div:nth-child(2) > a").should('be.visible'))
 }

 // User Logout From mPulse Application

 /* User Logout */
 mPulseUserlogout(){
  cy.wait(2000)
  Basepage.clickElementForce(this.userAccount)
  cy.wait(2000)
  Basepage.clickElementForce(this.mPulseLogoutBtn)
  cy.wait(2000)
  expect(Basepage.elementVisibleContainsText(this.mPulseLogoutMsg,testdata.HomePage.Account.mPulseLogout)).to.be.ok
 } 
 logisticsAdminURLLaunch(){
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
    cy.visit('https://logisticsadmindev.thestorywallcafe.com')
    cy.wait(1000)
 } 
 OmdollarsURLLaunch(){
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
    cy.visit('https://omdollarui.thestorywallcafe.com/')
    cy.wait(10000)
 } 
 
 EztimeURLLaunch(){
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
    cy.visit('https://eztime.thestorywallcafe.com/')
    cy.wait(1000)
 } 

}

export default new CommonPage();

