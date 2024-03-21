import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/Subscriptions.json";
import homePage from "./homePage";

export class ManageSubscriptionPage2 {

//create locators for elements
    public Subscription:string = "a[href='https://mymtnngnxtgen-shop-staging.mtnnigeria.net/mtn_mysubscriptions/customer/index/']"
    public newUser:string = "div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2"

 //Action methods

 clickonSubscription(){
    Basepage.clickElementNoWait(this.Subscription)
 }
 
 validatenewUser(){
    expect(cy.get(this.newUser).contains(testdata.ManageSubscriptionsPage.ManageSubscriptionsdetails.newUser))
}


}
export default new ManageSubscriptionPage2();