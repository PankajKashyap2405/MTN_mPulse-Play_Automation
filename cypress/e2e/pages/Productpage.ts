import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/loginUIEle.json";


export class Productpage {

    public searchBar:string ="#search"
    public searchproduct:string=".base[data-ui-id='page-title-wrapper']"

    SearchProduct()
    {
        cy.get(this.searchBar).click({force:true})
        cy.get(this.searchBar).type("5G Router")
        cy.get(this.searchBar).type('{enter}')    

    }
    ProductResultpage(){
       expect(Basepage.elementVisibleContainsText(this.searchproduct,testdata.HomePage.Account.productvalidate)).to.be.ok
    }


}
export default new Productpage();
