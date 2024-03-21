import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/loginUIEle.json";
import homePage from "./homePage";

export class Kart{
    
 public Broadbandbutton: string ="a[title='5G Broadband Router'] div[class='trending-block mf-initial']"
 public Adding: string="#product-addtocart-button"
 public  iconbutton: string="a[aria-label='Minicart']"
 public  cartiteams: string="#maincontent"


Onclick5GBroadband(){
    Basepage.clickHiddenElement(this.Broadbandbutton)  
    //cy.get(this.Broadbandbutton).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.Broadbandbutton, testdata.HomePage.Account.Data12)).to.be.ok
}
Onclickadding(){
    //cy.get(this.Adding).click({force:true})
    Basepage.clickHiddenElement(this.Adding)  

}
onclickiconbutton(){
    Basepage.clickHiddenElement(this.iconbutton)  
    //cy.get(this.iconbutton).click({force:true})
}
validatecartiteam(){
    cy.get(this.cartiteams).click({force: true})
    expect(Basepage.elementTextContains(this.cartiteams, testdata.HomePage.Account.Cartitem)).to.be.ok

}
}
export default new Kart();