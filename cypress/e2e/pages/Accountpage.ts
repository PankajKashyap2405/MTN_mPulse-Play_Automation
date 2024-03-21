import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/loginUIEle.json";
 export class Accountpage
 {
    public account:string=".login-icon-text"
    public login:string="a[title='Login/Sign Up']"
    public validateLoginButton:string="#btn-login"

    clickonaccount(){
        cy.get(this.account).click({force:true})
            }
    clickonlogin(){
        cy.get(this.login).click({force:true})
    }        

validateLoginbutton(){
 expect(Basepage.elementVisibleContainsText(this.validateLoginButton, testdata.HomePage.Account.loginpage)).to.be.ok
}
 }
 export default new Accountpage();