import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/ProductListingfn.json"

export class ProductListPgFn {

//Locators
 public dataButton : string = ".sev-2 > a:nth-child(1)"
 public dataBundle : string = "span.base"
 public whishlistButton: string = "a#wishlist_btn_178"
 public compareButton: string = "div.list-loop-prt:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)"
 public SuccessMessage: string = ".mf-initial[data-bind='html: $parent.prepareMessageForHtml(message.text)']"





//Methods

clickonDataButton (){
    cy.get(this.dataButton).click({force:true});
}

validateDataBundleListingPage(){
    expect(Basepage.elementVisibleContainsText(this.dataBundle,testdata.plistpage.PrductListingfn.DataBundleText)).to.be.ok
    }


    clickonwhishlistButton (){
        cy.get(this.whishlistButton).click({force:true});
    }

    validateSuccessMessage(){
        expect(Basepage.elementVisibleContainsText(this.SuccessMessage,testdata.plistpage.PrductListingfn.SuccessMessage)).to.be.ok
        }







}
export default new ProductListPgFn();