import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/playSubscription.json";
import commonpage from "../pages/commonPage"


export class MTNPlaySubscription {
   
    //locators
    public Video:string="#mega-menu > li:nth-child(1) > a > span"
    public videoCategry="div[class='row '] span:nth-child(1)"
    public wiflix:string="#block-selfservice-content > div > div > div.row.mt-2 > div > div > a:nth-child(9) > div > div.play-category-title-box > span"
    public wiflixpartner:string=".nav-link.active-pagination-link"
    public plandropdown=".fa.fa-angle-up"
    public subscribe:string="#edit-submit"
    public checkout:string=".shopping-cart-heading"
    public paynow:string="div[class='digibox-shopping-cart-right '] div:nth-child(14) div form button"




   








    //methods
    clickOnVideo(){
        cy.get(this.Video).click()
    }
     
    videoCategory(){
        expect(Basepage.elementVisibleContainsText(this.videoCategry,testdata.HomePage.videoo)).to.be.ok
    }

     clickOnWiflix(){
        cy.get(this.wiflix).click()
     }
     
     wiflixpage(){
        expect(Basepage.elementVisibleContainsText(this.wiflixpartner,testdata.HomePage.wiflixx)).to.be.ok
     }
     clickOnPlansDropdown(){
        cy.get(this.plandropdown).click()
     }
     
     clickOnSubscribe(){
        cy.get(this.subscribe).click()
     }

     checkoutPage(){
        expect(Basepage.elementVisibleContainsText(this.checkout,testdata.HomePage.checkout)).to.be.ok
     }

     clickonPayNow(){
        cy.get(this.paynow).eq(0).click({force:true})
     }
















}
export default new MTNPlaySubscription();