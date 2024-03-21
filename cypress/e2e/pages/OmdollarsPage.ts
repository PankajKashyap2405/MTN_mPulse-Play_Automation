import {Basepage} from "../../support/basepage";
import Data from "../../fixtures/Omdollars.json"

export class OmdollarsPage
{

    public emailId:string="input[placeholder='Email Id']"
    public password:string="input[placeholder='Password']"
    public loginButton:string="button[type='submit'] div"
    public userIcon:string = "body > app-root > app-project > mat-sidenav-container > mat-sidenav-content > div > mat-toolbar > div > div > div > div > button > div > div.col.text-start.pl-0"
    public projectOwner:string ="mat-sidenav-container[class='mat-drawer-container mat-sidenav-container container-fluid p-0'] p:nth-child(2)"
    public logOut:string = "li[data-bs-target='#logoutModal'] a[class='dropdown-item']"
    public confirmation: string  = "#exampleModalLabel > b"
    public yesButton:string = "#logoutModal > div > div > div.modal-footer > button.btn.btn-primary"
    public LoginLabel:string = "div[class='col-12'] h1"

  
    OmdollarsProjectOwnerLogin(){
        Basepage.enterText(this.emailId, "manoj@ekfrazo.in")
        Basepage.enterText(this.password, "12345")
        Basepage.clickElement(this.loginButton)

    }
    ValidateProjectOwnerlogin(){
        expect(Basepage.elementVisibleContainsText(this.projectOwner, Data.ProjectOwner.Supervisor.ProjectOwner)).to.be.ok
    }

    OmdollarsLogout(){
        Basepage.clickElement(this.userIcon)
        Basepage.clickElement(this.logOut)
        Basepage.clickElement(this.yesButton)
     
    }
    ValidateLoginScreen(){
        expect(Basepage.elementVisibleContainsText(this.LoginLabel, Data.ProjectOwner.Supervisor.LoginLabel)).to.be.ok
    }
}
export default new OmdollarsPage();