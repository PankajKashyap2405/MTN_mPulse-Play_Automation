import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/mPulseParentAirtimeRcg.json"
import commonPage from "./commonPage";



export class MTNmPulseParentAirtimeRcg {


//locaters
public rechrage:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)"
public rechrgePage:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
public AirtimeDesc:string=".mb-3"
public mobileNumrLabel:string="label[for='edit-recharge-mobile']"
public mobilenmbrField:string="#edit-recharge-mobile"
public amountLabel:string="label[for='edit-amount']"
public amountField:string="#edit-amount"
public airtimeAmnt200:string="#airtime-form > ul > li:nth-child(1)"
public airtimeAmnt300:string="#airtime-form > ul > li:nth-child(2)"
public airtimeAmnt400:string="#airtime-form > ul > li:nth-child(3)"
public airtimeAmnt500:string="#airtime-form > ul > li:nth-child(4)"
public airtimeAmnt600:string="#airtime-form > ul > li:nth-child(5)"
public airtimeAmnt700:string="#airtime-form > ul > li:nth-child(6)"
public airtimeAmnt800:string="#airtime-form > ul > li:nth-child(7)"
public airtimeAmnt1000:string="#airtime-form > ul > li:nth-child(8)"
public rechargeBtn:string="#recharge-recharge-btn"
public rechargeSelectAmnt:string="h6[class='m-0']"
public val:string =""
public val1:string =""
public cart:string=".white-active-pagination"
public prdct:string=".cart-p.font-17.font-wg500"




















//methods
clickOnRechargeBtn(){
    cy.get(this.rechrage).click()
}

validateRechrgePageIsDisplayed(){
    expect(Basepage.elementVisibleContainsText(this.rechrgePage,testdata.Home.rechrge.rchrge)).to.be.ok
}

ValiadteRechargePageElements(){
    expect(Basepage.elementVisibleContainsText(this.AirtimeDesc,testdata.Home.rechrge.rechrgeDesc)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.mobileNumrLabel,testdata.Home.rechrge.mobilenmbrLabel)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.amountLabel,testdata.Home.rechrge.amountLabel)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.airtimeAmnt200,testdata.Home.rechrge.Artm200)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.airtimeAmnt300,testdata.Home.rechrge.Artm300)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.airtimeAmnt400,testdata.Home.rechrge.Artm400)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.airtimeAmnt500,testdata.Home.rechrge.Artm500)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.airtimeAmnt600,testdata.Home.rechrge.Artm600)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.airtimeAmnt700,testdata.Home.rechrge.Artm700)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.airtimeAmnt800,testdata.Home.rechrge.Artm800)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.airtimeAmnt1000,testdata.Home.rechrge.Artm1000)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.rechargeBtn,testdata.Home.rechrge.RechrgeBtn)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.rechargeSelectAmnt,testdata.Home.rechrge.SelectAmntText)).to.be.ok
}
 ClickOn200Btn(){
    cy.get(this.airtimeAmnt200).click()
 }

 
 ValiadteSelectedAmountisDisplayed(){
    cy.get(this.airtimeAmnt200).then(($input)=>{
         this.val = $input.text().trim().replace('₦',"")
         cy.log(this.val)
    })
    cy.get(this.amountField).then(($input)=>{
        this.val1 = $input.text().trim()
        cy.log(this.val1)
   })

   if(this.val == this.val1){
    cy.log('Pass')
   }
   else{
    cy.log('Fail')
   }
   
 }
    clickOnRchrgeBtn(){
    cy.get(this.rechargeBtn).click()
 }

validateCartPageisDisplayed(){
    expect(Basepage.elementVisibleContainsText(this.cart,testdata.Home.rechrge.cartt)).to.be.ok
}

//checkoutPage

ValidateAirtimeRechargeProduct(){
    expect(Basepage.elementVisibleContainsText)
}


























}

export default new MTNmPulseParentAirtimeRcg()