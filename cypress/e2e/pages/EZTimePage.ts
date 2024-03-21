import {Basepage} from "../../support/basepage";
import Data from "../../fixtures/eztime.json"

export class EZTimePage
{

    public emailId:string="div[class='col-5 p-h'] input[placeholder='Enter Email Id']"
    public password:string="div[class='col-5 p-h'] input[placeholder='Enter Password']"
    public loginButton:string="body > app-login > div.container-fluid.webView > div > div > div.col-5.p-h > div > div > div > form > div:nth-child(3) > div > button"
    public userIcon:string = ".avatar-img.ng-star-inserted"
    public dashBoard:string ="div[class='col-sm-6 px-4'] h1"
    public logOut:string = "body > app-default-layout > div > app-default-header > c-container > c-header-nav.ms-3.header-nav > c-dropdown > ul > li:nth-child(4) > div > a > span"
    public logoutConfirmation: string  = "body > ngb-modal-window > div > div > app-generic-delete > div > div.modal-header > h4"
    public yesButton:string = "body > ngb-modal-window > div > div > app-generic-delete > div > div.modal-footer.justify-content-center > button.mat-focus-indicator.act-btn.mat-raised-button.mat-button-base.mat-primary > span.mat-button-wrapper"
    public LoginLabel:string = ".head-txt"

  
    EztimeApplicationLogin(){
        Basepage.enterText(this.emailId, "Supriya@ekfrazo.in")
        Basepage.enterText(this.password, "Supriya@123")
        Basepage.clickElement(this.loginButton)

    }
    Validateeztimelogin(){
        expect(Basepage.elementVisibleContainsText(this.dashBoard, Data.Admin.dashboard)).to.be.ok
    }

    eztimeApplicationLogout (){
        Basepage.clickElement(this.userIcon)
        Basepage.clickElement(this.logOut)
        Basepage.clickElement(this.yesButton)
     
    }
    ValidateLoginBackScreen(){
        expect(Basepage.elementVisibleContainsText(this.LoginLabel, Data.Admin.adminLoginLabel)).to.be.ok
    }
}
export default new EZTimePage();