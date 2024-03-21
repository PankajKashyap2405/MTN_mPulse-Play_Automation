import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/Cartandcheckoutpage.json";
import homePage from "./homePage";

export class Cartandcheckoutpage{

    //Create loctor for elements 
    public MTNBroadbandmifi: string = "a[title='MTN Broadband MiFi']"
    public addToCart: string = "#product-addtocart-button"
    public cartIcon: string = "a[aria-label='Minicart']"
    public deleteIcon: string = "a[title='Remove']" 
    public cart0: string = "div.cart-hd.font-17.font-wg500.black-color.pb-3.mb-3.mf-initial"
    public shoppingCartEmpty: string = "div.cart-empty.mf-initial > p:nth-child(1)"
    //Create Action Methods
    clickonMTNBroadbandmifi(){
        Basepage.clickHiddenElement(this.MTNBroadbandmifi)  
    
    }

    clickonaddtocart(){
        Basepage.clickHiddenElement(this.addToCart)
    }

    clickonCartIcon(){
        Basepage.clickElement(this.cartIcon)
    }

    clickondeleteIcon(){
        Basepage.clickElementForce(this.deleteIcon)
    }

    Validateproductincart(){
        Basepage.elementVisible(this.cart0)
        cy.get(this.cart0).scrollIntoView() 
        expect(Basepage.elementVisibleContainsText(this.cart0, testdata.Cartandcheckoutpage.Cartandcheckoutdetails.Cart)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.shoppingCartEmpty, testdata.Cartandcheckoutpage.Cartandcheckoutdetails.shoppingCartEmpty)).to.be.ok

    }

} 
export default new Cartandcheckoutpage();

