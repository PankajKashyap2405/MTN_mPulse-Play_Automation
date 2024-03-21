import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/BillingAddress.json";
import homePage from "./homePage";

export class customerBillingAddressPage {

    //create locators for elements
    public Account:string = "button[aria-label='customer-menu']"
    public manageProfile:string = ".account-link-toplink"
    public manageAddress:string = "a[href='https://mymtnngnxtgen-shop-staging.mtnnigeria.net/manage/address/index/']"
    public billingAddress:string = "#billing-address-tab"
    public addNewAddress:string = "#add-address"
    public firstName:string = "#firstname"
    public lastName:string = "#lastname"
    public streetAddress:string = "#street_1"
    public stateSelect: string = "#shipping-new-address-form > div.field.region.required > div>select"
    public citySelect: string = "#shipping-new-address-form > div.field.city.required > div>select"
    public phoneNumber:string = "#telephone"
    public addNewBtn:string = "button[class='btn btn-mtn-primary-ye'] span"
    public allSectionLink:string = "#all-address-tab"
    public Address:string = "#all-address > div:nth-child(1) > div.address-dt-time.mf-initial > div.dt-add-name.mf-initial"
    public Edit:string = "#all-address > div:nth-child(1) > div.address-dt-edit.mf-initial > div > a"
    public editFirstName:string = "#firstname"
    public saveBtn:string = "button[class='btn btn-mtn-primary-ye'] span"
    public editedAddress:string = "#all-address > div:nth-child(1) > div.address-dt-time.mf-initial > div.dt-add-name.mf-initial"
    public Remove:string = "#removeCustomform_849 > a"
    public okBtn:string = "button[class='action-primary action-accept'] span"
    public Deleted:string = "#maincontent > div.page.messages.container.mf-initial > div:nth-child(2) > div > div > div"
    

    //Action methods 

    clickonAccount(){
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
        Basepage.clickElementNoWait(this.Account)
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
     }

     
    clickonmanageProfile(){
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
        Basepage.clickElementNoWait(this.manageProfile)
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
     }
    
    clickonmanageAddress(){
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
        Basepage.clickElementNoWait(this.manageAddress)
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
     }

     clickonbillingAddress(){
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
        Basepage.clickElementNoWait(this.billingAddress)
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
     }

     clickonaddNewAddress(){
      Basepage.clickElementNoWait(this.addNewAddress)
   }

     clickOnFirstName() {

        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
        Basepage.clearText(this.firstName).type(testdata.customerBillingAddressPage.customerBillingAddressdetails.firstName)
  
      
     }
  
     clickOnLastName() {
        Basepage.clearText(this.lastName).type(testdata.customerBillingAddressPage.customerBillingAddressdetails.lastName)
  
     }

     clickOnstreetAddress() {
        Basepage.clearText(this.streetAddress).type(testdata.customerBillingAddressPage.customerBillingAddressdetails.streetAddress)
     }
  
  
     clickOnState() {
        cy.get(this.stateSelect).select(27, { force: true }).should('have.value', '1195')
  
  
     }
     clickOnCity() {
        cy.get(this.citySelect).select(14, { force: true }).should('have.value', 'Ajao Estate')
        
     }
  
     clickOnphoneNumber() {
        Basepage.clearText(this.phoneNumber).type(testdata.customerBillingAddressPage.customerBillingAddressdetails.phoneNumber)

     }

     clickOnaddNewBtn(){
      Basepage.wait()
      Basepage.wait()
      Basepage.clickElementNoWait(this.addNewBtn)
      Basepage.wait()
      Basepage.wait()
      Basepage.wait()
      
  }

  clickOnallSectionLink(){
   Basepage.wait()
   Basepage.wait()
   Basepage.clickElementNoWait(this.allSectionLink)
   Basepage.wait()
   Basepage.wait()
   Basepage.wait()
   
}
      validateAddress(){
        Basepage.elementVisible(this.Address)
        expect(Basepage.elementVisibleContainsText(this.Address, testdata.customerBillingAddressPage.customerBillingAddressdetails.Address))
     }

     clickonEdit(){
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
        Basepage.clickElementNoWait(this.Edit)
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
     }
  
      clickOneditFirstName() {
  
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
        Basepage.clearText(this.editFirstName).type(testdata.customerBillingAddressPage.customerBillingAddressdetails.editFirstName)
      }
  
      clickOnsaveBtn(){
         Basepage.wait()
         Basepage.wait()
         Basepage.clickElementNoWait(this.saveBtn)
         Basepage.wait()
         Basepage.wait()
         Basepage.wait()
         
     }

     validateeditAddress(){
        Basepage.elementVisible(this.editedAddress)
        expect(Basepage.elementVisibleContainsText(this.editedAddress, testdata.customerBillingAddressPage.customerBillingAddressdetails.editAddress))
     }
     
    clickonRemove(){
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
        Basepage.clickElementNoWait(this.Remove)
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
     }
  
      clickonokBtn(){
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
        Basepage.clickElementNoWait(this.okBtn)
        Basepage.wait()
        Basepage.wait()
        Basepage.wait()
     }
  
      validateDeleted(){
        Basepage.elementVisible(this.Deleted)
        expect(Basepage.elementVisibleContainsText(this.Deleted, testdata.customerBillingAddressPage.customerBillingAddressdetails.Deleted))
    }


}
export default new customerBillingAddressPage();