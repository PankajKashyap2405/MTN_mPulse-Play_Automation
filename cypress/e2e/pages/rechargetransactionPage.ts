import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/rechargeTransaction.json";

export class rechargetransactionPage{

    //create locators for element    
    public username:string = "#html-body > div.page-wrapper.mf-initial > div.main-header.cart-header-label.mf-initial > header > div.header.content.mf-initial > ul > li > span > button"
    public manageprofile:string = "#html-body > div.page-wrapper.mf-initial > div.main-header.cart-header-label.mf-initial > header > div.header.content.mf-initial > ul > li > div > ul > li.link.my-account-link > a"
    public mytransactionhistory:string = "#maincontent > div.columns.mf-initial > div > div > div.row.mf-initial > div.col-md-4.col-sm-12.mf-initial > div > div.manag-account-list.mf-initial > ul > li:nth-child(6) > a"
    public recharge:string = "#maincontent > div.columns.mf-initial > div.column.main.mf-initial > div.container.mf-initial > div > div.col-md-8.col-sm-12.mf-initial > div > div > div.row.mf-initial > div > ul > li:nth-child(2) > a"

    //Action methods

    clickOnusername(){
        Basepage.clickElementNoWait(this.username) 
     }

    clickOnmanageprofile(){
        Basepage.clickElementNoWait(this.manageprofile) 
     }

     clickOnmytransactionhistory(){
        Basepage.clickElementNoWait(this.mytransactionhistory) 
     }

     clickOnrecharge(){
        Basepage.clickElementNoWait(this.recharge) 
     }

     validateRechargetransactionDetails(){
       // Basepage.elementVisible(this.RechargetransactionDetails)
       // expect(Basepage.elementVisibleContainsText(this.RechargetransactionDetails,testdata.rechargetransactionPage.RechargetransactionDetails.RechargetransactionDetails))
          }
}
export default new rechargetransactionPage();