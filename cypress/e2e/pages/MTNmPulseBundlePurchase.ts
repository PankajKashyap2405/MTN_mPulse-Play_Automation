import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/MTNmPulseBundlePurchase.json";
import commonpage from "../pages/commonPage"



export class MTNmPulseBundlePurchase {

//Locators

public profilename:string="div[class='nav-wrapper'] p:nth-child(1)"
public bundlexplore:string="#block-selfservice-content > section.everything-slider-wrap > div.container > div > div > div.owl-carousel.everything-slide.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child(3) > div > div > div > a > button"
public bundlePage:string="h2[class='titleHeadings']"
public dailyBundle:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3)"
public buynow:string="#block-selfservice-content > div > div:nth-child(5) > div.row > div:nth-child(1) > div > div.d-flex.align-items-center.justify-content-between > div"
public buynwPopup:string="div[class='rb-container'] h5"
public buybtn:string="#buy_now_data_cart"
public cart:string=".white-active-pagination"
public payment:string="#procced-payment"
public checkoutPage:string=".mb-4"
public paywithAirtime:string="a[role='tab'][href='#bank-direct-dabit']"
public pay:string="#pay-now-airtime"
public invoice:string=".white-active-pagination"
public Successmessage:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)"
public backtoHome:string=".link-color"










//methods

Profile(){
    expect(Basepage.elementVisibleContainsText(this.profilename,testdata.Home.Bundle.Profilename)).to.be.ok
}

clickOnExplore(){
    cy.get(this.bundlexplore).click()
}

buyBndlePage(){
    expect(Basepage.elementVisibleContainsText(this.bundlePage,testdata.Home.Bundle.buybundle)).to.be.ok
}

daillyBundle(){
    expect(Basepage.elementVisibleContainsText(this.dailyBundle,testdata.Home.Bundle.dailybndle)).to.be.ok
}

clickOnBuyNOw(){
    cy.get(this.buynow).click()
}   

buynwPopupp(){
    expect(Basepage.elementVisibleContainsText(this.buynwPopup,testdata.Home.Bundle.bynowPopup)).to.be.ok
}

clickOnbuybtn(){
    cy.get(this.buybtn).click()
}

 validateCartpage(){
    expect(Basepage.elementVisibleContainsText(this.cart,testdata.Home.Bundle.cart)).to.be.ok
 }

 clickOnPayment(){
    cy.get(this.payment).click()
 }
 
 validateCheckOutPage(){
    expect(Basepage.elementVisibleContainsText(this.checkoutPage,testdata.Home.Bundle.checkout)).to.be.ok
 }

 clickOnPaywithAirtime(){
    cy.get(this.paywithAirtime).click()
 }
 
 clickOnPaynow(){
    cy.get(this.pay).click()
 }

validateSuccesspage(){
    expect(Basepage.elementVisibleContainsText(this.invoice,testdata.Home.Bundle.invoice)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.Successmessage,testdata.Home.Bundle.successmsg)).to.be.ok
    cy.wait(3000)
    cy.get(this.backtoHome).click()
}



}
export default new  MTNmPulseBundlePurchase();