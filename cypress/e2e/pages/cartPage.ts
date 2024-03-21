import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/cart.json";
import homePage from "../pages/homePage";
import 'cypress-iframe';
import 'cypress-plugin-tab'


export class cartPage{

//public cartIcon: string ="a[class='action showcart']"

public items:string =".cart-hd.font-17.font-wg500.black-color.pb-3.mb-3"
public order:string ="#maincontent > div.columns > div > div.row > div > div"
public noItems:string="div[class='page-wrapper'] p:nth-child(1)"
public continue:string="div[class='page-wrapper'] p:nth-child(2)"
public promo:string="#block-discount-heading"
public apply:string="button[value='Apply'] span"
public proceedPay:string="button[title='Proceed to pay']"
public continueShop:string="li[class='item'] a"
public paymentOptions:string=".text-center.font-13"



// Digital product
public dataTab:string="span[class='mtn-service-img'] i[class='data-icon-mtn']"
public plan:string="span[class='base']"
public Wechat:string="a[title='50MB Wechat Weekly Plan'] h2"
public productPage:string=".pd-hd"
public number:string="#block-simple-text-2-186-tab"
public mobile:string=".input-label"
public numberfield:string="#mob-mobile-186"
public eligibility:string="div[class='form-group enter-m'] span[class='mobile_msg']"
public mbileNumber:string="#block-simple-text-1-186-tab"
public congrts:string="div[id='block-simple-text-1-186'] span[class='mobile_msg']"
public buyNow:string="#buy_btn_186"
public ship:string="span[class='step-title']"
public checkoutpgee=".mtn-section-title"
public emailID:string="div[class='field required'] div[class='control _with-tooltip']"
public firstnme:string="div[name='billingAddressshared.firstname']"
public lastnme:string="div[name='billingAddressshared.lastname'] div[class='control']"
public addres:string="div[name='billingAddressshared.street.0'] div[class='control']"
public updte:string="button[class='action action-update'] span"
public contnue:string=".checkout-action-btn.mtn-primary[data-toggle='collapse'][data-target='#collapseFour']"
public prcdtpay:string="#checkout-payment-method-load > div > div > div.payment-method.payment-method-npg._active > div.payment-method-content > div.actions-toolbar > div > button"
public paymnt:string="div.pt-4 > app-pg-home > mat-card > mat-card-content > mat-list > mat-card-title"
public card:string = "#checkout-payment-method-load > div > div > div.payment-method.payment-method-npg._active > div.payment-method-title.field.choice.pay-option-wrap > div > label"
public cardMethod :string ="app-pg-home > mat-card > mat-card-content > mat-list > div:nth-child(2) > mat-list-item > span > p"
public savedCard: string ="#mat-radio-1"
public payyy:string="body > app-root > app-root > app-payment-gateway > div > div:nth-child(2) > div > div > div.cards.ng-star-inserted > div.cards-wrapper-2 > mat-card > mat-card-content > div > div > app-pg-card > div > div > button"
public passwrd:string="#submitForm > div.inputGroup > section"
public pwd :string ="#submitForm > div.inputGroup > section > input[type=password]"
public newCard:string="#mat-expansion-panel-header-0 > span > mat-panel-title"
public newNumber:string="#mat-input-0"
public expirydte:string="#mat-input-1"
public cvv:string="#mat-input-2"
public savecard:string="#mat-expansion-panel-header-1 > span > mat-panel-title"
public userCheckout :string ="#checkout > div.checkout-top-info-container.mf-initial > div.title-wrapper.mf-initial > h1"
public thankYou:string ="#maincontent > div.columns.mf-initial > div > div.page-title-wrapper.mf-initial > h1 > span"
public continueeee:string=".checkout-action-btn.mtn-primary[data-toggle='collapse'][data-target='#collapseFour']"
public successPayment: string = "h1[class='!text-base md:!text-2xl !text-green-600 !mb-8 ng-star-inserted']"


//methods
clickOncartIoc(){
homePage.clickOnCartIcon()
}

cartItem(){
    expect(Basepage.elementVisibleContainsText(this.items,testdata.CartPage.Cartdetails.CartItems)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.order,testdata.CartPage.Cartdetails.orderSumary)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.noItems,testdata.CartPage.Cartdetails.noItemsInCart)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.continue,testdata.CartPage.Cartdetails.continueshopping)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.promo,testdata.CartPage.Cartdetails.promoCode)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.apply,testdata.CartPage.Cartdetails.ApplyButton)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.proceedPay,testdata.CartPage.Cartdetails.ProceedtoPay)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.continueShop,testdata.CartPage.Cartdetails.continueWithShopping)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.paymentOptions,testdata.CartPage.Cartdetails.payWithBelowOptions)).to.be.ok
}
// validate digital product
dataIcon(){
    cy.get(this.dataTab).click({force:true})
}
 plans(){
    expect(Basepage.elementVisibleContainsText(this.plan,testdata.CartPage.Cartdetails.Planss)).to.be.ok
 }
wechat50Mb(){
    cy.get(this.Wechat).click({force:true})
}
 detailPage(){
    expect(Basepage.elementVisibleContainsText(this.productPage,testdata.CartPage.Cartdetails.wechat)).to.be.ok
 }
mobileNumber(){
    cy.get(this.number).click({force:true})
}
mobileField(){
    expect(Basepage.elementVisibleContainsText(this.mobile,testdata.CartPage.Cartdetails.mbfield)).to.be.ok
}
enterMTNMobile(){
    cy.get("#mob-mobile-186").type(Cypress.env('auth_mobile'),{force:true})
}
eligibiltyCheck(){
    expect(Basepage.elementVisibleContainsText(this.eligibility,testdata.CartPage.Cartdetails.eligibiltyNumber)).to.be.ok
}

mNumber(){
    cy.get(this.mbileNumber).click({force:true})
}

eligbltyNum(){
    expect(Basepage.elementVisibleContainsText(this.congrts,testdata.CartPage.Cartdetails.elgbltyNmbr)).to.be.ok
}
buYNowBtn(){
    cy.get(this.buyNow).click({force:true})
}
 
ValidateGustCheckoutpge(){
    expect(Basepage.elementVisibleContainsText(this.checkoutpgee,testdata.CartPage.Cartdetails.gustchckt)).to.be.ok
    cy.get(this.continueeee).click({force:true})

}

ValidateUserCheckoutpge(){
    expect(Basepage.elementVisibleContainsText(this.userCheckout,testdata.CartPage.Cartdetails.userchckt)).to.be.ok
}
enterEmailD(){
    cy.get("#mtnbot-container > div.balloon > a").click()
    cy.get(".mtn-section-title").scrollIntoView()
    cy.get("#customer-email-fieldset div div input[name='username']").type('mahesh@gmail.com',{force :true})
    cy.get("#billingAddress div[id='headingThree']").click({force:true})
    cy.get("div[name='billingAddressshared.firstname']").scrollIntoView()
    cy.get("div[name='billingAddressshared.firstname'] div input[name='firstname']").type('Mahesh',{force :true})
    cy.get("div[name='billingAddressshared.lastname'] div input[name='lastname']").type('Kari',{force :true})
    cy.get("div[name='billingAddressshared.street.0'] div input[name='street[0]']").type("Palm beach",{force :true})
    cy.get("div[name='billingAddressshared.street.1'] div input[name='street[1]']").scrollIntoView()
    cy.get("div[name='billingAddressshared.street.1'] div input[name='street[1]']").type("Palm beach",{force :true})
    cy.get("#billingAddress select[name='region_id']").select('Abuja', { force: true })
    cy.get("#billingAddress select[name='city_id']").select('Abaji', { force: true })
    cy.get("#billingAddress input[name='telephone']").type(Cypress.env('auth_mobile'),{force:true})
    cy.get(this.updte).click({force:true})
    cy.get(this.contnue).click({force:true})
    cy.get(this.prcdtpay).click({force:true})
    }


    validatePaymentGatwewayWithPassword() {
    cy.get(this.contnue).click({force:true})
    cy.get(this.prcdtpay).click({force:true})
       cy.wait(20000)
       cy.on('uncaught:exception', (e) => {
            if (e.message.includes("Cannot read properties of undefined (reading 'toString')")) {
             return false
           }
        })
        cy.get(this.card).click({force:true})
        cy.get(this.prcdtpay).click({force:true})
              cy.get('#cp-frame-component').then(($iframe) => {
                let src = $iframe.attr('src')
                 var npgurl = src as string
                 console.log(npgurl)
                 cy.visit(npgurl)
              
              })
              cy.wait(5000)
              cy.get(this.cardMethod).click()
              cy.get("#mat-input-0").type("5100000000005007")
              cy.get("#mat-input-1").type("0825")
              cy.get("#mat-input-2").type("000")
              cy.get(this.payyy).click()
              cy.wait(30000)
              
              cy.get('#mat-dialog-0 > app-iframe-modal > div > div > iframe')
                .then($iframe => {
                 const $body = $iframe.contents()
                                      .find("iframe[width='100%']")
                                      .contents()
                                      .find('body')
                cy.wait(1000)                   
                cy.wrap($body)
                  .find('input[type=password]')
                  .eq(0)
                  .type('123456',{force: true})
                cy.wait(1000)  
                cy.wrap($body)
                  .find('button')
                  .eq(1)
                  .click({force: true})

              })
              //expect(Basepage.elementVisibleContainsText(this.thankYou,"Thank you for your purchase!")).to.be.ok
                     
        }            
}

export default new cartPage();