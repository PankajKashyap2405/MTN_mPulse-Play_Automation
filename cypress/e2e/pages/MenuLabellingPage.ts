import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/MenuLabelling.json";
import homePage from "./homePage";

export class MenuLabellingPage {

    //create locators for elements
    public cartIcon:string =  "a[aria-label='Minicart']"
    public Account:string = ".login-icon-text"
    public Login:string = "a[title='Login/Sign Up']"


    //Action methods

    ValidatecartIcon(){
        Basepage.elementVisible(this.cartIcon)  
    }

    ClickonAccount(){
        Basepage.clickElementNoWait(this.Account)
    }

    ValidateLogin(){
        Basepage.elementVisible(this.Login)
        expect(Basepage.elementVisibleContainsText(this.Login, testdata.MenuLabellingPage.MenuLabellingdetails.Login))
    }    

}
export default new MenuLabellingPage();