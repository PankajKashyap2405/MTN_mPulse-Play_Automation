import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/airtime.json";
import homePage from "../pages/homePage";

export class airtimePage{

    public recharge:string ="span[class='mtn-service-img'] i[class='recharge-icon-mtn']"
    public airtimelist:string="#page-title-heading > span"
    public select:string="#layerednav-list-products > div.products.wrapper.products-grid.grid.mf-initial > div > div > div > div.h-fe-block.mf-initial > div.h-fe-block-text.mf-initial > div.fp-hd.mf-initial > a > h2"
    public airtime:string=".pd-hd"
    public airdescription:string="div[class='pd-des mf-initial'] p"
    public Buyfor:string=".title"
    public desiredAmount:string="div[id='purchase_sms_container_955'] label[class='input-label']"
    public clickOnLogin:string="div[class='login-text mf-initial'] span:nth-child(1)"
    public subTotal:string="div[class='subtotal_minicart mf-initial'] label"
    public mobileNumber:string="#block-simple-text-2-955-tab > span.text-buy > em"
    public enterMobileNumber:string="div[class='form-group enter-m airrecharge'] label[class='input-label']"
    public mobileField:string="#mob-amount-955"
    public congratsMsg:string="div[class='form-group enter-m airrecharge'] span[class='mobile_msg']"
    public enterAmount:string="#amount-955"
    public okbtn:string="#check-amount-955"
    public subttl:string="span[id='product-price-955'] span[class='price']"
    public buyNow:string="button[id='buy_btn_955'] span"
    public orderSummary:string="#checkout > div.checkout-top-info-container.mf-initial > div.title-wrapper.mf-initial > h1"
    public BillAddrs:string="#headingThree > span > span.step-title"
    public editbtn:string="#collapseThree > div.checkout-billing-address > div.billing-address-details > button > span:nth-child(2)"
    public edit:string="#collapseThree > div.checkout-billing-address > div.billing-address-details > button > span:nth-child(2)"
    public adressdrp:string="select[name='billing_address_id']"
    public firstnam:string="#co-payment-form > fieldset > div.custom-billing-address > div.checkout-billing-address > fieldset > div:nth-child(2) > div > form > fieldset > div:nth-child(1) > label > span"
    public fistnam:string="form fieldset div:nth-child(1) div input[name='firstname']"
    public paymenttitle:string=".step-title-custom.step-title"
    public paynowRadi:string="#NPG"
    public makePay:string="button[title='Make Payment']"
    //"div:nth-child(2) > div > form > fieldset > div:nth-child(1) > div > input[name='firstname']"










    //methods
    clickOnrecharge(){
    cy.viewport(1040,680)
    cy.get(this.recharge).click({force:true})
    }
    airtimePlist(){
      expect(Basepage.elementVisibleContainsText(this.airtimelist,testdata.recharge.Airtime.airtimeetxt)).to.be.ok  
    }
    clickOnSelect(){
        cy.get(this.select).click({force:true})
    }
    airtimedetails(){
        expect(Basepage.elementVisibleContainsText(this.airtime,testdata.recharge.Airtime.airtime)).to.be.ok
    }
    airtimePageValidation(){
        expect(Basepage.elementVisibleContainsText(this.airdescription,testdata.recharge.Airtime.description)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Buyfor,testdata.recharge.Airtime.buy)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.desiredAmount,testdata.recharge.Airtime.desiredAmounttoBuy)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.clickOnLogin,testdata.recharge.Airtime.loginToView)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.subTotal,testdata.recharge.Airtime.subTotale)).to.be.ok   
     }
    clickOnMobileNumber(){
        cy.wait(5000)
        cy.get(this.mobileNumber).click({force:true})
    }
    enterMobileNumbe(){
        expect(Basepage.elementVisibleContainsText(this.enterMobileNumber,testdata.recharge.Airtime.eNterMobile)).to.be.ok
    }

    mobileNumberField(){
        cy.get("#mob-amount-955").type(Cypress.env('auth_mobile'),{force:true})
    }

    congratsMessge(){
        expect(Basepage.elementVisibleContainsText(this.congratsMsg,testdata.recharge.Airtime.congMessg)).to.be.ok
    }

    clearAmount(){
        cy.get('#amount-955').clear({force:true}).type('1000');
    }

    clickOnOk(){
        cy.get(this.okbtn).click({force:true});
    }

    subTotale(){
        expect(Basepage.elementVisibleContainsText(this.subttl,testdata.recharge.Airtime.subtotel)).to.be.ok
    }

    clickOnBuyNow(){
        cy.get(this.buyNow).click({force:true})
    }

    orderSmry(){
        cy.wait(5000)
        expect(Basepage.elementVisibleContainsText(this.orderSummary,testdata.recharge.Airtime.ordersmmmry)).to.be.ok
    }

    billingAddress(){
    expect(Basepage.elementVisibleContainsText(this.BillAddrs,testdata.recharge.Airtime.contactInfo)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.editbtn,testdata.recharge.Airtime.editButton)).to.be.ok
    }

    clickOnEdit(){
        cy.get(this.edit).click({force:true})
    }
    
    clickOnDrop(){
        cy.get("select[name='billing_address_id']").select("New Address")
    }

    firstName(){
        expect(Basepage.elementVisibleContainsText(this.firstnam,testdata.recharge.Airtime.firstnam)).to.be.ok
    }

     inputFields(){
        cy.get(this.firstnam).clear({force:true})
        cy.get(this.firstnam).type("kari")
     }

     paymentTit(){
        expect(Basepage.elementVisibleContainsText(this.paymenttitle,testdata.recharge.Airtime.payment)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.makePay,testdata.recharge.Airtime.MakePaym)).to.be.ok
     }
     
     paynowRadio(){
        cy.get('#NPG:checked').should('be.checked')
    
     }
     














    }

    export default new airtimePage();