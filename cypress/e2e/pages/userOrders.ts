import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/ordersUIEle.json";


export class userOreders{

    //create locators for elements
    public userOrder:string = "li.link.my-orders a"
    public myOrderLabel:string = "div.col-md-8.col-sm-12 div h6"

    //Action methods

   clickonUserOrders(){
   
    cy.get(this.userOrder).click({force:true})
    //Basepage.clickHiddenElement(this.userOrder)   
   }

   validateMyOrderLabel(){
    Basepage.elementVisible(this.myOrderLabel)
    expect(Basepage.elementVisibleContainsText(this.myOrderLabel,testdata.ordersPage.OrderDetails.myOrders)).to.be.ok
   }
}
export default new userOreders();