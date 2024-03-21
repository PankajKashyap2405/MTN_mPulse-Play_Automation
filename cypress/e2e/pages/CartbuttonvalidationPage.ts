import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/loginUIEle.json";

export  class CartbuttonvalidatonPage{
//page Element
    public  cartbutton: string="a[aria-label='Minicart']"

//Method
clickOnDeviceButton(){
    cy.get(this.cartbutton).click({force:true})
    expect(Basepage.elementTextContains(this.cartbutton,testdata.HomePage.Account.Device3))
}
}
export default new  CartbuttonvalidatonPage();