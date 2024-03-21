import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/myaccount.json";
import homePage from "./homePage";

export class myAccountPage {

    //create locators for elements
    public Account:string = "button[aria-label='customer-menu']"
    public manageProfile:string = ".account-link-toplink"
    public manageNumber:string = "a[href='https://mymtnngnxtgen-shop-staging.mtnnigeria.net/beneficiary/index/view/']"
    public Number:string = "#all > div > p"
    public addNewNumber:string = "#show-popup-save"
    public Name:string = "#customerName"
    public mobileNumber:string = "#mobileNumber"
    public OTP:string = "#beneficiary > div > div.form-group.col-md-12.otp-block >  div.d-flex.otp-input.digit-group.otp-common > div > img"
    public submitBtn:string = "#modal-benf-number > div > div.modal-content > div > div.modal-footer.btm-fd > button.saveBeneficiary-btn.btn.btn-mtn-primary-ye"
    public User:string = "#all > div > div > div.ben-name.mf-initial"
    public Edit:string = "#all > div > div > div.ben-btn-block.mf-initial > a.btn-2.mr-2"
    public editName:string = "#customerName"
    public submitBtn1:string = "#modal-benf-number > div > div > div > div.modal-footer.btm-fd > button.saveBeneficiary-btn.btn.btn-mtn-primary-ye"
    public Delete:string = "#all > div > div > div.ben-btn-block.mf-initial > a:nth-child(2)"
    public Ok:string = "button[class='action-primary action-accept'] span"
    public userDetails:string = "#all > div > h5"
 

    //Action methods 
     

    clickonAccount(){
        cy.wait(6000)
        Basepage.clickElementNoWait(this.Account)
        cy.wait(6000)
     }

     
    clickonmanageProfile(){
        cy.wait(6000)
        Basepage.clickElementNoWait(this.manageProfile)
        cy.wait(6000)
     }
    
    clickonmanageNumber(){
        cy.wait(6000)
        Basepage.clickElementNoWait(this.manageNumber)
        cy.wait(6000)
        
     }

     validateNumber(){
        Basepage.elementVisible(this.Number)
        expect(Basepage.elementVisibleContainsText(this.Number, testdata.myAccountPage.myAccountdetails.Number))
     }

     
    clickonaddNewNumber(){
        Basepage.clickElementNoWait(this.addNewNumber)
     }

     clickOnName() {

        cy.wait(6000)
        Basepage.clearText(this.Name).type(testdata.myAccountPage.myAccountdetails.Name)
        
     }

     clickOnmobileNumber() {
        Basepage.clearText(this.mobileNumber).type(testdata.myAccountPage.myAccountdetails.mobileNumber)
        

     }

   //   clickOnOTP() {
   //      Basepage.clearText(this.OTP).type(testdata.myAccountPage.myAccountdetails.OTP)

   //   }

     clickOnOTP() {
        cy.wait(100000)

     }

     clickOnsubmitBtn() {
        cy.wait(6000)
        cy.get(this.submitBtn).click({ force: true })
        cy.wait(6000)
    }

     validateUser(){
      expect(cy.get(this.User).contains(testdata.myAccountPage.myAccountdetails.User))
    }

    clickonEdit(){
      cy.wait(6000)
      Basepage.clickElementNoWait(this.Edit)
      cy.wait(6000)
   }

    clickOneditName() {

      cy.wait(6000)
      Basepage.clearText(this.editName).type(testdata.myAccountPage.myAccountdetails.editName)
    }

    clickOnsubmitBtn1() {
      cy.wait(6000)
      cy.get(this.submitBtn1).click({ force: true })
      cy.wait(6000)
   }

    clickonDelete(){
      cy.wait(6000)
      Basepage.clickElementNoWait(this.Delete)
      cy.wait(6000)
   }

    clickonOk(){
      cy.wait(6000)
      Basepage.clickElementNoWait(this.Ok)
      cy.wait(6000)
   }

    validateuserDetails(){
      Basepage.elementVisible(this.userDetails)
      expect(Basepage.elementVisibleContainsText(this.userDetails, testdata.myAccountPage.myAccountdetails.userDetails))
  }

    
  validateNumberConditional(){
   cy.get("div[id='lifestyle-slider'] div:nth-child(2) a:nth-child(1)").then(($input)=>{
       const val = $input.text()
       if( val == "")
       {
        cy.get("div[id='lifestyle-slider'] div:nth-child(2) a:nth-child(1)").click({force:true})

        cy.wait(10000)

        expect(Basepage.elementVisibleContainsText("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)","Bbc podcast")).to.be.ok

       } else {
           cy.get("div[id='lifestyle-slider'] div[class='owl-stage'] div:nth-child(1) a:nth-child(1) div:nth-child(2) p:nth-child(1)").then(($input)=>{

           const val = $input.text()

           if( val == "NewBBC World Service Focus on Africa"|| val == "BBC World Service")

           {
            cy.get("div[id='lifestyle-slider'] div:nth-child(2) a:nth-child(1)").click({force:true})

            cy.wait(10000)

            expect(Basepage.elementVisibleContainsText("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)","Bbc podcast")).to.be.ok
           }
           })
       }
       })

}

}
export default new myAccountPage();