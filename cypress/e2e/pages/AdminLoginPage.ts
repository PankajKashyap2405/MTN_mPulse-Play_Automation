import {Basepage} from "../../support/basepage";
import Data from "../../fixtures/Admin.json"

export class AdminLoginPage
{

    public roleName:string="input[placeholder='Enter role name']"
    public mobileNumber:string="input[placeholder='Enter mobile number']"
    public loginButton:string=".p-button-label.ng-star-inserted"
    public dashboard:string ="div[class='col-12 sidee mt-2 mb-2 ng-tns-c17-2 active'] div span[class='sidehead']"
    public logOut:string = "div[class='col-12 sidee mt-1 ng-tns-c17-2'] div span[class='sidehead']"
    public confirmation: string  = ".p-dialog-title.ng-tns-c20-4.ng-star-inserted"
    public yesButton:string = "body > app-root > app-inner > div > div.col-sm-12.col-md-12.col-lg-12.col-xl-2 > app-side-bar > div > p-confirmdialog > div > div > div.p-dialog-footer.ng-tns-c20-4.ng-star-inserted > button.p-element.p-ripple.ng-tns-c20-4.p-confirm-dialog-accept.p-button.p-component.ng-star-inserted > span.p-button-label"
    public adminLoginLabel:string = "h1[class='text-center']"

  
    AdminLogin(){
        if(cy.get(this.roleName).should('be.visible')){
            console.log("Admin text field is available")
            cy.get(this.roleName).should('have.attr', 'placeholder','Enter role name')
        //cy.get(this.roleName).should('have.text', 'Enter role name')
        cy.get(this.roleName).clear()
        Basepage.enterText(this.roleName, "ADMIN")
        }
        const mobile = "78993 34249"
        if(cy.get(this.mobileNumber).should('be.visible')){
        cy.get(this.mobileNumber).should('have.attr','placeholder','Enter mobile number')
        cy.get(this.mobileNumber).clear()
        Basepage.enterText(this.mobileNumber, mobile)
        console.log(mobile)
        }
        //Basepage.enterText(this.mobileNumber, "78993 34249")
        Basepage.clickElement(this.loginButton)

    }
    ValidateUserlogin(){
        expect(Basepage.elementVisibleContainsText(this.dashboard, Data.Admin.dashboard)).to.be.ok
    }

    AdminLogout (){
        Basepage.clickElement(this.logOut)
        //expect(Basepage.elementVisibleContainsText(this.confirmation, Data.Admin.confirmation)).to.be.ok
        cy.get(".p-dialog-title.ng-tns-c20-4.ng-star-inserted").then(($data)=>{
            const val = $data.text()
            if( val == "Confirmation")
             {
              Basepage.clickElementForce(this.yesButton)
             }
            })
    }
    ValidateAdminLoginScreen(){
        expect(Basepage.elementVisibleContainsText(this.adminLoginLabel, Data.Admin.adminLoginLabel)).to.be.ok
    }
}
export default new AdminLoginPage();