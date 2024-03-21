import {Basepage} from "../../support/basepage";

import testdata from "../../fixtures/myorders.json";


export class myOrdersPage{
  
    public accountHeader: string = "header > div.header.content.mf-initial > ul > li > span > button"
    public yourAccount: string = "header > div.header.content.mf-initial > ul > li > div > ul > h3"
    public myOrders: string = "header > div.header.content.mf-initial > ul > li > div > ul > li.link.my-orders > a"
   public canceled: string = "#canceled-tab"


    //methods for validating the payment pending orders

    clickOnAccountHeader(){
        cy.get(this.accountHeader).click({force:true})
        //expect(Basepage.elementVisibleContainsText(this.yourAccount,testdata.HomePage.YourAccount)).to.be.ok
        cy.get(this.myOrders).click({force:true})
        cy.get(this.canceled).click({force:true})
    
        expect(Basepage.elementVisibleContainsText(this.myOrders,testdata.HomePage.MyOrders)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.canceled,testdata.HomePage.Cancelled)).to.be.ok

        
    }
    


}
export default new myOrdersPage();