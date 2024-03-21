import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/loginUIEle.json"



export class MTNhomepage{


    public clickOnWishlistButton:string= "#layerednav-list-products > div.products.wrapper.products-grid.grid.mf-initial > div > div:nth-child(1) > div > div.wishlist-compare-wrap.mf-initial > div:nth-child(1) div a"
    public clickOnHereButton:string="#html-body > div.page-wrapper.mf-initial > div.page-main.mf-initial > div > div:nth-child(2) > div > div > div > a"
    public clickOnAddtocartButton:string="button[title='Add to Cart']"
    public validateAddToCartPopUp:string="#maincontent > div.page.messages.container.mf-initial > div:nth-child(2) > div > div > div"
    public clickOnDeviceButton:string="#maincontent > div.columns.mf-initial > div > div.test.mf-initial > div > div.mtn-services-center > div > div > div > div > div.owl-stage-outer > div > div:nth-child(1) > div > div > a > span.mtn-service-img"
    public Device:string = "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)"
    public sort:string="#layerednav-list-products > div.toolbar.toolbar-products.mf-initial > div.toolbar-sorter.sorter.mf-initial"
    public highToLow:string="div[class='toolbar-sorter sorter mf-initial'] option[value='high_to_low']"
    public lowToHigh:string="div[class='toolbar-sorter sorter mf-initial'] option[value='low_to_high']"
    public mostPopular:string="div[class='toolbar-sorter sorter mf-initial'] option[value='most_popular']"
    public wishlist:string="a[id='wishlist_btn_155'] img[alt='Add to Wish List'][class='mf-initial mf-loaded']"
       
clickOnWishListButton(){
   // cy.viewport(1040,640)
    
   // cy.get("a[id='wishlist_btn_155'] img[alt='Add to Wish List']").scrollIntoView()

    //cy.get("a[id='wishlist_btn_155'] img[alt='Add to Wish List']").click()
    //cy.get(this.clickOnWishlistButton).click()
    cy.get(this.wishlist).click({scrollBehavior:false})

}

clickOnHerebutton(){
    cy.get(this.clickOnHereButton).click({force:true})
}

ClickOnAddToCartButton(){
    cy.get(this.clickOnAddtocartButton).click({force:true})
}

ValidateAddtoCartPopup(){
    expect(Basepage.elementVisibleContainsText(this.validateAddToCartPopUp,testdata.HomePage.Account["Validat add to cart pop up"])).to.be.ok
}

ClickOnDeviceButton(){
    cy.get(this.clickOnDeviceButton).click({force:true})
}

MTNuserLoginWithEmail(){
cy.get("#email").type(Cypress.env('auth_username'))
cy.get("#password").type(Cypress.env('auth_password'))
cy.get("#btn-login").click()
cy.wait(1000)
}
             
// MTN purchase 
clickOnSortAndValidate3categories(){
    cy.viewport(1240,900)
    cy.get('select#sorter option:selected').should('contain.text', 'Lowest to highest price')
    cy.get('select').eq(1).select('high_to_low',{ force: true });
    cy.get('select#sorter option:selected').should('contain.text', 'Highest to lowest price')
    //cy.get('select').eq(2).select('most_popular',{ force: true });
    //cy.get('select#sorter option:selected').should('contain.text', 'Most popular')
    cy.get('select').eq(3).select('position',{ force: true });
    cy.get('select#sorter option:selected').should('contain.text', 'Best sellers')
    cy.get('select').eq(0).select('low_to_high',{ force: true });
    cy.get('select#sorter option:selected').should('contain.text', 'Lowest to highest price')
    
    
}
}
export default new MTNhomepage();
