import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/loginUIEle.json"
//import { replace, subtract } from "cypress/types/lodash";
//import "cypress-real-events/support";

//import { } from  "../../support/index"

export class homepage{
/**
 * Page Elements
 */
public accountHeadersLinks: string = "div[class='customer-menu'] ul[class='header links']"
public userManageAccount:string = "div.manag-account-list ul li:nth-child(1)"
public userMyOrders:string = "div.manag-account-list ul li:nth-child(2)"
public userManageSubscriptions:string = "div.manag-account-list ul li:nth-child(3)"
public userManageNumbers:string = "div.manag-account-list ul li:nth-child(4)"
public userManageAddress:string = "div.manag-account-list ul li:nth-child(5)"
public userTransactionHistroy:string = "div.manag-account-list ul li:nth-child(6)"
public userWishList:string = "div.manag-account-list ul li:nth-child(7)"
public userLogout:string = "div.manag-account-list ul li:nth-child(9)"
public cartIcon:string = "a[aria-label='Minicart']"
public orderSummary: string = "button[title='Proceed to pay'] span"
public allProducts:string = "a.level-top"
public dataBundles:string = "div.magicmenu.clearfix > ul > li > div > div > div > div > div > div > ul"
public searchBar:string ="#search[name='q']"
public searchSuggestion:string = "li[id='qs-option-0']"
public productNameValidate:string = "span[class='base']"
public errMessage:string ="div[class='message notice'] div"
public dataButton:string = "div[class='service-block sev-2 mf-initial'] a"
//public errrMessage:string ="div[class='message notice mf-initial'] div[class='mf-initial']"
//public dataaButton:string = "div[class='service-block sev-1'] a"
public productName:string = "#layerednav-list-products > div.products.wrapper.grid.products-grid > div:nth-child(1) > div > div:nth-child(2) > div.col-md-3.sel-lis.text-right > div > div >a"
public addtoCartButton:string = "div[class='actions user-buy-action-wrap'] button[id='product-addtocart-button']"
public cartDrpdn:string ="#form-validate div div div:nth-child(2) div.mid-quant-control-wrap"
public cartDrpdnValue:string ="select[title='Quantity'] option:nth-child(3)"
public imgLogo :string = "div.header.content a img"
public cartElement:string = "#form-validate > div.cart.table-wrapper > div > div > div > div.cart-hd.font-17.font-wg500.black-color.pb-3.mb-3"
public aboutLink:string = "a[title='About MTN']"
public staticLabel:string="#main > section:nth-child(3) > div.container-fluid > div > div > div > div > h4"
//public cartIcon:string = "a[aria-label='Minicart'][class='action showcart']" //"a[aria-label='Minicart']" 
//public orderSummary:string = "#maincontent div.columns div div.row div div"
public productListingPage:string = "body div:nth-child(8) main:nth-child(5) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(4) div:nth-child(1) div:nth-child(3) label:nth-child(1)"
public selectButton:string = "a[title='5G Broadband Router'] h2"////"body div div div div div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(3) div:nth-child(1) div:nth-child(1) a:nth-child(1)"
public productDetailsPage:string="span[class='base']"
public addTOCartButton:string = "div[class='actions user-buy-action-wrap'] button[id='product-addtocart-button']"
public productValidateToCart:string = "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']"
public deviceButton:string = "div[class='service-block sev-1 mf-initial'] a"
public homePageLink:string = "a[title='Go to Home Page']" 
//public dataButton:string = "div[class='service-block sev-2'] a"
public dataBundleListingPage:string = "#layerednav-list-products > div.plans-block > a:nth-child(3)"
public enterpriseButton:string = "div[class='service-block sev-3 mf-initial'] a"
public clickOnUserAccount:string=".customer-first-name"
public clickOnOrder:string="li.link.my-orders a"
public validateActive:string ="a[id='processing-tab']"
public validateCompleted:string="a[id='complete-tab']"
public validateCancelled:string="a[id='canceled-tab']"
public validateDevicePrice:string="span[id='product-price-155'] span[class='price']"
public validateDeviceDescription:string="a[role='button'][href='#list-more-155']"
public clickProcedToPayButton:string="button[title='Proceed to pay'] span" 
public validateStorePickUp : string="#pickup-tab"
public clickOnSelectStoreButton:string="button[class='button action']"
public clickOnShipHere:string="tbody tr:nth-child(1) td:nth-child(2) div:nth-child(1) button:nth-child(1) span:nth-child(1)"
public clickOnContinue:string="button[class='button action continue primary btn btn-mtn-primary-ye'] span span"
public clickOnPickinStore:string="#label_method_pickup_instore"
public validateDataPrice:string="span[class='data-lim'] span[id='product-price-166'] span[class='price']"
public validateDataDescription:string=".font-13.blue-color.more-down-icon[href='#list-more-166']"
public dataSelectButton:string="#layerednav-list-products > div.products.wrapper.grid.products-grid > div:nth-child(1) > div > div:nth-child(2) > div.col-md-3.sel-lis.text-right > div > div >a"
public clickOnEnterNumber:string=".text-buy"
public validateWrongNumberErrorMsg:string="div[class='form-group enter-m'] span[class='mobile_msg']"
public entermobilenumber:string="#mob-mobile-166"
public addtocart:string="#cart_btn_166"
public buynow:string="button[class='btn mtn-primary-ye-new tocart buynow primary']"//"#buy_btn_166"
public signInErrorMsg="#maincontent div.page.messages.container div:nth-child(2) div div div"
public validatnumbereMsg:String="div[class='form-group enter-m'] span[class='mobile_msg']"
public clickOnMakePaymentButton:string="button[title='Make Payment']"
public validateOnLinkToAddItems:string= "#form-validate > div.cart.table-wrapper > div > div > div > div.cart-empty > p:nth-child(2)"//"div[class='cart-empty'] p a"
public hereLink:string = "div[class='cart-empty'] p a"
public validateCartItems:string="#form-validate > div.cart.table-wrapper > div > div > div > div.cart-hd.font-17.font-wg500.black-color.pb-3.mb-3"//".cart-hd.font-17.font-wg500.black-color.pb-3.mb-3"
public clickOnItem:string="div[class='owl-item active'] div[class='banner-h-mtn']"
public clickOnTCbutton:string="#options_3_2" 
public validateQuantity:string="div.mid-cart-item-innner-wrap.col-md-4.col-lg-4  div  span"
public clickOnRemovebutton:string="a[title='Remove']"
public clickOnNextButton:string="section[class='mtn-hm-banner'] div[class='owl-dots'] button:nth-child(2)"
public clickOnColorButton:string="#option-label-color-93-item-152"
public validateProceedToCheckout:string="#buy_btn_166 > span" 
public proceedtoby:string="button[title='Proceed to Checkout'] span"
public checkoutPge:string="#checkout > div.checkout-top-info-container.mf-initial > div.title-wrapper.mf-initial > h1"
public UsethisAddrs:string="#ship-this-add"
public jumiaShip:string="#onepage-checkout-shipping-method-additional-load > div > div.logistic-partners > div > label > div.d-info-wrap"
public shipaddresss:string=".button.action.continue.primary"
public continueCntcinfo:string=".checkout-action-btn.mtn-primary[data-toggle='collapse'][data-target='#collapseFour']"
public proceedtopayy:string="button[title='Make Payment']"
public validateBuyNowButton:string="button[id='buy-now'] span"
public playSuccessMsg: string ="#content > div.container.mtn-notification > div > div > div > p"
public playLabel:string = "#mega-menu > li:nth-child(2) > a > span"
public Accountbtn:string =".btn.dropdown-toggle"
public PlayLogoutbtn:string ="div[class='cart-search-login-prt'] li:nth-child(3) a:nth-child(1)"
public errorMeesegeForInvalideEmail: string ="#error-message"

//Product validate 5G
public profileIcon: string=".login-icon-text"
public loginbutton:string="a[title='Login/Sign Up']"
public productValidate: string= "span[class='mtn-service-img'] i[class='device-icon-mtn']"  
public productDetailPage: string ="div[class='toolbar-sorter sorter mf-initial'] label[for='sorter']"//"div[class='column main'] div:nth-child(1) div:nth-child(3) label:nth-child(1)"
public fivegBroadband  : string = "[data-ui-id='page-title-wrapper']"
public checkBox      : string ="input[type='checkbox']"
public blackColour: string ="#option-label-color-93-item-152"
public plusicon : string ="button[title='increase']"
public addToCart  : string ="button[id='product-addtocart-button'] span"
public successMessage : string="div[data-bind='html: $parent.prepareMessageForHtml(message.text)']"










public delete : string ="a[title='Remove']"
public emptyCart : string ="div[class='cart-dt col-md-8 mf-initial'] p:nth-child(1)"
public validateCart : string=".cart-p.font-17.font-wg500"
public mpulseLogoutbtn : string="div[class='dropdown-menu profile-menu-dropdown show'] a:nth-child(2)"
public mPulseStaticLabel :string ="//h2[@class='al']"
public mPulseRegisterLabel:string ="#block-selfservice-breadcrumbs > div > div > div > div > div > span:nth-child(3) > a"
public mPulseStudentDashboard:string =".white-active-pagination"

 


/***
 * Click on Manage Profile and Validate user dashboard after Login 
 */
   clickOnAccountAtLoginUser() {
   cy.get(".customer-first-name").click({force: true})
   cy.get(".account-link-toplink").click({force: true})
    Basepage.wait()
    expect(Basepage.elementVisibleContainsText(this.userManageAccount, testdata.HomePage.Account.AccountHeaderLink1)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.userMyOrders, testdata.HomePage.Account.AccountHeaderLink2)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.userManageSubscriptions, testdata.HomePage.Account.AccountHeaderLink3)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.userManageNumbers, testdata.HomePage.Account.AccountHeaderLink4)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.userManageAddress, testdata.HomePage.Account.AccountHeaderLink5)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.userTransactionHistroy, testdata.HomePage.Account.AccountHeaderLink6)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.userWishList, testdata.HomePage.Account.AccountHeaderLink7)).to.be.ok
    //expect(Basepage.elementVisibleContainsText(this.userLogout, testdata.HomePage.Account.AccountHeaderLink8)).to.be.ok

}
 //validate error message when user enters ivalid email
 validateErrorMessage()
 {
  expect(Basepage.elementVisibleContainsText(this.errorMeesegeForInvalideEmail, testdata.HomePage.Account.ErrorMsgForInvalidEmail)).to.be.ok
 }
 


clickOnCartIcon() {
   Basepage.clickElement(this.cartIcon)
   const var1 = "Cannot read properties of undefined (reading 'quoteData')"
   Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes(var1))
    {
       return false
     }
   })
}

  
validateOrdersummaryLabel() {
 cy.wait(1000)
 expect(Basepage.elementVisibleContainsText(".hd-pmt-dt.font-17.font-wg500.mb-3", "Your order summary")).to.be.ok

}

mouseHover() {
    cy.get(this.allProducts).first().trigger('mouseover',{force: true}).click({force: true})
    .wait(1000)
  

}

enterProduct(element: string , value:string){ 
  Basepage.enterText(element,value)
  cy.get(element).type('{enter}')
}

clickOnSearchBar(searchValue1:string){
  cy.get(this.searchBar).should('be.visible')
  Basepage.clearText(this.searchBar)
  this.enterProduct(this.searchBar,searchValue1) 
//cy.get(this.searchBar).should('be.visible') 
//Basepage.clearText(this.searchBar) 
//this.enterProduct(this.searchBar,productName)

}
  

  
enterTheProductNameOnSearchBar(searchValue2:string){
    Basepage.clearText(this.searchBar)
    this.enterProduct(this.searchBar,searchValue2)
}

errorMessageValidation(){ 
  expect(Basepage.elementVisibleContainsText(this.errMessage,testdata.HomePage.Account.invalidProductErrMsg)).to.be.ok
}

productNameValidation(){ 
  expect(Basepage.elementVisibleContainsText(this.productNameValidate,testdata.HomePage.Account.ProductName)).to.be.ok
}

selectProduct()
{
  cy.get(this.dataButton).should('be.visible') 
  cy.get(this.dataButton).click()
  cy.get(this.productName).click({force:true})
  cy.get(this.addtoCartButton).click({force:true})
  

}
cartQuantityIncrease(){
  Basepage.clickElement(this.cartIcon)
  Basepage.selectByValueItem(this.cartDrpdn,this.cartDrpdnValue,3)
}

validateLogo(){
  cy.get('.logo').find('img').should('be.visible')
}


validateCartElements(compareVal: string){
  cy.get(this.cartElement).should(($input) => {
  const val = $input.val()
  expect(val).to.eql(compareVal)
})
}
validateCartElement(){ 
 expect(Basepage.elementVisibleContainsText(this.cartElement,testdata.HomePage.Account.cart)).to.be.ok
}

/*validatePNInSearchResults() {
  Basepage.wait()
  cy.get(this.cartElement).each(($propertyNumberColumnValue, index, list) => {
      var propertyNumberColumnVal= $propertyNumberColumnValue.text()
      expect(String(propertyNumberColumnVal).match(this.propertyNum)).to.be.ok
  })
}*/

navigateToTabAndClose(){

  cy.get("a[title='Code of Ethics']")
  .should('have.attr', 'href')
  .and('include', 'https://www.mtn.ng/about-us/who-we-are/our-code-of-ethics/')
}

validateFooterLinkAboutMTN(){
  cy.origin('https://www.mtn.ng/about-us', () => {
  cy.on('uncaught:exception', (err) => {
      return false
    })
  })
  cy.get(this.aboutLink).invoke('removeAttr', 'target').click()
  cy.origin('https://www.mtn.ng/about-us', () => {
  cy.wait(10000)
  cy.get("#main > section:nth-child(3) > div.container-fluid > div > div > div > div > h4").should('be.visible')
  })
}

validateFooterLinkCOdeOfEthics(){
  cy.origin('https://www.mtn.ng/about-us', () => {
  cy.on('uncaught:exception', (err) => {
      return false
    })
  })
  cy.get("a[title='Code of Ethics']").invoke('removeAttr', 'target').click()
  cy.origin('https://www.mtn.ng/about-us', () => {
  cy.wait(10000)
  cy.get("#content > div.mtn-banner.mtn-header-page > div.mtn-banner__bg > div > div > div > div:nth-child(2) > h1").should('be.visible')
  })
}

//home page validation
 
clickOnDeviceButton(){
  cy.get(this.deviceButton).click({force:true})
   }
  
 validateProductListingPage(){
   expect(Basepage.elementVisibleContainsText(this.productListingPage,testdata.HomePage.Account.ProductListingPage)).to.be.ok
   }
   
 
 validateDifferentProductsButtonsOnHomePage(){
   expect(Basepage.elementVisibleContainsText(this.deviceButton,testdata.HomePage.Account.button1)).to.be.ok
   expect(Basepage.elementVisibleContainsText(this.dataButton,testdata.HomePage.Account.button2)).to.be.ok
   expect(Basepage.elementVisibleContainsText(this.enterpriseButton,testdata.HomePage.Account.button3)).to.be.ok
   }
   
 clickOnHomePageLink(){
   cy.get(this.homePageLink).click({force:true}) 
    }
   
 clickOnDataButton(){
  cy.get(this.dataButton).click({force:true})
   }
   
 validateDataBundleListingPage(){
   expect(Basepage.elementVisibleContainsText(this.dataBundleListingPage,testdata.HomePage.Account.DataBundleListingPage)).to.be.ok
   }
 
   //validating order history
  clickOnAccount(){
   cy.get(this.clickOnUserAccount).click({force: true})
   }

 clickOnOrders(){
   cy.get(this.clickOnOrder).click({force: true})
   }
   
 validateActiveCompletedCanceledOrder(){
 expect(Basepage.elementVisibleContainsText(this.validateActive,testdata.HomePage.Account.Active)).to.be.ok
 expect(Basepage.elementVisibleContainsText(this.validateCompleted,testdata.HomePage.Account.Completed)).to.be.ok
 expect(Basepage.elementVisibleContainsText(this.validateCancelled,testdata.HomePage.Account.Cancelled)).to.be.ok
 }
 

 //Device Purchase validation
 validateDeviceButton(){ 
   expect(Basepage.elementVisibleContainsText(this.deviceButton,testdata.HomePage.Account.button1)).to.be.ok
 }
 
 validateDevicePriceDescripton(){
    expect(Basepage.elementVisibleContainsText(this.validateDevicePrice,testdata.HomePage.Account.Price)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.validateDeviceDescription,testdata.HomePage.Account.Description)).to.be.ok
 
 }
 clickOnSelectButton(){
  cy.get(this.selectButton).click({force:true})
     //Basepage.clickElement(this.selectButton)
   }
   
 validateProductDetailsPage(){
   expect(Basepage.elementVisibleContainsText(this.productDetailsPage,testdata.HomePage.Account.ProductDetailsPage)).to.be.ok
   }
   
 clickOnAddToCartButton(){
   cy.get(this.addTOCartButton).click({force:true})
   }
 
 validateCarticon(){
   cy.get(this.cartIcon).should('be.visible')
 }
  
 /*validateProductValidateToCart(){
    expect(Basepage.elementVisibleContainsText(this.productValidateToCart,testdata.HomePage.Account.ProductValidateToCart)).to.be.ok
   }*/
 
 clickOnProcedToPayButton(){
   //Basepage.clickElement(this.clickProcedToPayButton)
     //cy.wait(30000) 
     cy.get(this.clickProcedToPayButton).click({force:true})
 }
 validateStorePickup(){
   expect(Basepage.elementVisibleContainsText(this.validateStorePickUp,testdata.HomePage.Account.StorePickUp)).to.be.ok
 }
 
 clickOnStorepickup(){
   // Basepage.clickElement(this.validateStorePickUp)
   cy.get(this.validateStorePickUp).click({force:true})
 }
 
 clickOnSelectStore(){
   //Basepage.clickElement(this.clickOnSelectStoreButton)
   cy.get(this.clickOnSelectStoreButton).click({force:true})
 }
 
 clickOnShipHereButton(){
   Basepage.clickElement(this.clickOnShipHere)
 }
 
 clickOnContinueButton(){
   Basepage.clickElement(this.clickOnContinue)
 }
 
 clickOnPickInStore(){
   //Basepage.clickElement(this.clickOnPickinStore)
   cy.get(this.clickOnPickinStore).click({force:true})
 }
 
 //data bundle purchase
 validateDataPriceDescription(){
    expect(Basepage.elementVisibleContainsText(this.validateDataDescription,testdata.HomePage.Account.DataDescription)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.validateDataPrice,testdata.HomePage.Account.DataPrice)).to.be.ok
    }
 
 clickOndataSelectButton(){
   //Basepage.clickElement(this.dataSelectButton)
   cy.get(this.dataSelectButton).click({force:true})
 }
 
 clickOnEnternumber(){
    //Basepage.clickElement(this.clickOnEnterNumber)
    cy.get(this.clickOnEnterNumber).click({force:true})
 }
 
 clickOnEnterMobileNumber(){
   cy.get(this.entermobilenumber).click({force:true})
 }
 enterMobileNumber(){
   //Basepage.clearText(this.entermobilenumber)
   cy.get("#mob-mobile-166").clear({force:true})
   Basepage.wait()
   cy.get("#mob-mobile-166").scrollIntoView()
  cy.get("#mob-mobile-166").type(Cypress.env('auth_mobile'),{force:true})
 
 }
 
 enterWrongMobileNumber(){
   cy.get("#mob-mobile-166").type(Cypress.env('auth_wrongmobile'),{force:true})
 }
 
 validateWrongNumbererrorMsg(){
   Basepage.wait()
  expect(Basepage.elementVisibleContainsText(this.validateWrongNumberErrorMsg,testdata.HomePage.Account.WrongNumberErrorMsg)).to.be.ok
 }
 
 validateAddtoCart(){
   expect(Basepage.elementVisibleContainsText(this.addtocart,testdata.HomePage.Account.Addtocart)).to.be.ok
  // expect(Basepage.elementVisibleContainsText(this.buynow,testdata.HomePage.Account.Buynow)).to.be.ok
 }
 
 //clickOnBuynow(){
  // cy.wait(30000)
  // cy.get(this.buynow).click({force:true})
 //}
 validateSignInErrormsg(){
   expect(Basepage.elementVisibleContainsText(this.signInErrorMsg,testdata.HomePage.Account.SignInmsg)).to.be.ok
 }
 clickOnMakePaymentbutton(){
   cy.get(this.clickOnMakePaymentButton).click({force:true})
 }
 //cart validation
 validateOnLinkToAdditems(){
   expect(Basepage.elementVisibleContainsText(this.validateOnLinkToAddItems,testdata.HomePage.Account.ValidateClickheretoadditems)).to.be.ok
   //Basepage.clickElement(this.hereLink)
   cy.get(this.hereLink).click({force:true})
   //cy.wait(10000)
 }
 
 validateCartItem(){
   expect(Basepage.elementVisibleContainsText(this.validateCartItems,testdata.HomePage.Account.ValidateCart)).to.be.ok
 }
 clickOnItems(){
  // cy.wait(10000)
   cy.get(this.clickOnItem).click({force:true})
 }
 
 clickOnTcbutton(){
   cy.get(this.clickOnTCbutton).click({force:true})
   cy.get(this.clickOnColorButton).click({force:true})
 }
 
 validateQuantitybutton(){
   //cy.get(this.validateQuantity).click({force:true})
   expect(Basepage.elementVisibleContainsText(this.validateQuantity,testdata.HomePage.Account.Quantity)).to.be.ok
 }
 clickOnRemove(){
  cy.get(this.clickOnRemovebutton).click({force:true})
 }
 clickOnNextbutton(){
   cy.get(this.clickOnNextButton).click({force:true})
 }
 
 validateProceedToCheckoutbutton(){
   expect(Basepage.elementVisibleContainsText(this.validateProceedToCheckout,testdata.HomePage.Account.Buynow)).to.be.ok
   cy.get(this.validateProceedToCheckout).click({force:true})
   cy.wait(5000)
 }
 
 validateBuyNowButtonAndClick(){
   expect(Basepage.elementVisibleContainsText(this.validateBuyNowButton,testdata.HomePage.Account.ProceedTocheckoutbutton)).to.be.ok
   cy.get(this.validateBuyNowButton).click({force:true})
 }
 validateProductValidateToCart()
  {
    expect(Basepage.elementVisibleContainsText(this.productValidateToCart,testdata.HomePage.Account.ProductValidateToCart)).to.be.ok
   
  }

validatePlayLogin()
{

  expect(cy.get("div.cart-search-login-prt div.login-prt").should('be.visible')).to.be.ok
  expect(cy.get(".btn.dropdown-toggle").should('be.visible')).to.be.ok
  
  //expect(Basepage.elementVisibleContainsText(this.playSuccessMsg,testdata.HomePage.Account.PlayloginSuccessMessage)).to.be.ok
}
logoutPlayApplication()
{
  cy.get(this.Accountbtn).click()
  cy.get(this.PlayLogoutbtn).click()
  expect(Basepage.elementVisibleContainsText(this.playLabel,testdata.HomePage.Account.PlayLabel)).to.be.ok
}


// Product purchase 5G 

clickonProfile(){
  cy.get(this.profileIcon).click()
}

clickonLoginBtnn(){
  cy.get(this.loginbutton).click()
}
clickOnDevice() {
cy.get(this.productValidate).click({force:true})
}
validateDevicesLabel() {
  expect(Basepage.elementVisibleContainsText(this.productDetailPage,testdata.HomePage.Account.SortByLabel)).to.be.ok
}

ClickOnSelect(){
  //Basepage.clickElement(this.clickOnselect)
  cy.get(this.selectButton).click({force: true})
}  

validate5gBroadband(){
  expect(Basepage.elementVisibleContainsText(this.fivegBroadband,testdata.HomePage.Account.BroadbandLabel)).to.be.ok
 }
 clickkCheckBox(){
  cy.get(this.checkBox).click({force: true})
 }

 selectColor(){
  cy.get(this.blackColour).click({force:true})
 } 

increaseProduct(){
  Basepage.clickElementForce(this.plusicon)
} 

selectAddToCart(){
  cy.get(this.addToCart).click({force:true})
 }

 addedToCart(){
  expect(Basepage.elementVisibleContainsText(this.successMessage,testdata.HomePage.Account.sucessMessageCart)).to.be.ok 
}
productInCart(){
  expect(Basepage.elementVisibleContainsText(this.validateCart,testdata.HomePage.Account.cartProduct)).to.be.ok
}

clickOnPrcdtoBuy(){
  cy.get(this.proceedtoby).click({force:true})
}

validateCheckoutpage(){
  expect(Basepage.elementVisibleContainsText(this.checkoutPge,testdata.HomePage.Account.checkot)).to.be.ok
}
 
clickOnUsethisAddrs(){
  cy.wait(2000)
  cy.get(this.UsethisAddrs).click({force:true})
}
 clickOnShipMthd(){
  cy.wait(2000)
  cy.get(this.jumiaShip).click({force:true})
 }
 SelectShipingMethd(){
  cy.wait(2000)
  cy.get(this.shipaddresss).click({force:true})
 }

 clickOnContinuee(){
  cy.wait(2000)
  cy.get(this.continueCntcinfo).click({force:true})
 }

 clickOnprcdtoPay(){
  cy.get(this.proceedtopayy).click({force:true})
 }





















productDelete(){
  //Basepage.clickElement(this.delete)
cy.get("a[class='action action-delete mtncart-action-delete font-13 font-wg500']").click({force : true})
}
cartEmpty(){
  expect(Basepage.elementVisibleContainsText(this.emptyCart,testdata.HomePage.Account.noItemsinCart)).to.be.ok
}
clickOnEnterpriseButton()
{

}
logoutmPulseApplication()
{
  cy.get("li[class='dropdown show'] i[class='fa fa-chevron-down ml-2']").click({force:true})
  cy.get(this.mpulseLogoutbtn).click()
  expect(Basepage.elementVisibleContainsText(this.mPulseStaticLabel,testdata.HomePage.Account.mPulseStaLabel)).to.be.ok
}
ValidateloginmPulseApplication()
{
  expect(Basepage.elementVisibleContainsText(this.mPulseRegisterLabel,testdata.HomePage.Account.mPulseRegisteLabel)).to.be.ok
}

validateBanneronPlayHomePage(){
  cy.get("#block-selfservice-content > div > div:nth-child(6) > div > div > div").should('be.visible')
  cy.get("#block-selfservice-content > div > div:nth-child(6) > div > div > div").scrollIntoView()
  //cy.viewport(1000,800)
  //Cypress.Screenshot.defaults({screenshotOnRunFailure: false
  //cy.get("#block-selfservice-content > div > div:nth-child(6)").first().click({force: true})
  //cy.contains('img', {matchCase: false}).click({force: true}); 
  cy.get("#block-selfservice-content > div > div:nth-child(6) > div > div > div").invoke('show').click({force:true});
  cy.wait(10000)
  //Cypress.Screenshot.defaults({screenshotOnRunFailure: false});
}
validateBannerNavigatedMdundo(){
    /*cy.origin('https://playpreprod.mtn.ng', () => {
    cy.on('uncaught:exception', (err) => {
     return false
   })
   })*/
   cy.origin('https://playpreprod.mtn.ng/mdundo', () => {
    cy.wait(10000)
   // "#block-selfservice-breadcrumbs > div > div > ul > li:nth-child(3)"
    cy.get("#block-selfservice-breadcrumbs > div > div > ul > li:nth-child(3)").should('be.visible')
  })
 }
 navigatetoHomePage(){
  cy.get("div[class='region region--footer-first grid-full layout--pass--content-medium ie11-autorow'] li:nth-child(1) a:nth-child(1)").click({force:true})
  expect(Basepage.elementVisibleContainsText("#page-title-heading > span","Enterprise Services")).to.be.ok 
  cy.go('back')
  cy.viewport(1200,1000)
  expect(Basepage.elementVisibleContainsText("div[class='region region--footer-first grid-full layout--pass--content-medium ie11-autorow'] li:nth-child(1) a:nth-child(1)","Mobile Services")).to.be.ok
 }

 ValidateUserloginmPulseApplicationSucess()
{
  expect(Basepage.elementVisibleContainsText(this.mPulseStudentDashboard,testdata.HomePage.Account.mPulseStudentDashboard)).to.be.ok
}
 


}

export default new homepage();
