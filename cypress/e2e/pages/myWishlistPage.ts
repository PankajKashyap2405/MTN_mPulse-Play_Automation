import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/mywishlist.json";
import homePage from "./homePage";

export class mywishlistPage {

   //create locators for elements
   public Wishlist:string = "#html-body > div.page-wrapper.mf-initial > div.main-header.cart-header-label.mf-initial > header > div.header.content.mf-initial > ul > li > div > ul > li.link.wishlist > a"
   public Price:string = "#product-price-197 > span"
   public Details:string = "#item_987 > div > div.col-md-12.more-txt.mt-2.mf-initial > a"
   public bundleDescription:string = "#list-more-197 > span"
   public Data:string = "#item_987 > div > div.pro-wish-name.font-15.black-color.mf-initial > strong > a"
   public Bundle:string = "#item_987 > div > div.wish-data.mf-initial > div > ul > li > span"
   public adddToCartButton:string = "#item_987 > div > div.product-item-inner.mf-initial > div.box-tocart.mf-initial > fieldset > div > div > button > span"
   public enterNumber:string = "#block-simple-text-2-197-tab > span.text-buy"
   public phoneNumber:string = "#mob-mobile-197"
   public Cart:string = "#cart_btn_197"
   public cartIcon:string = "a[aria-label='Minicart']"
   public Item:string = "#form-validate > div.cart.table-wrapper.mf-initial > div > div > div > div:nth-child(3) > div > div.cart-data-b-box.pt-3.pb-3.mf-initial > div"
   


  //Action methods 

  clickonWishlist(){
    Basepage.wait()
    Basepage.wait()
    Basepage.wait()
    Basepage.clickElementNoWait(this.Wishlist)
    Basepage.wait()
    Basepage.wait()
    Basepage.wait()
 }

  validatePrice(){
    Basepage.elementVisible(this.Price)
    expect(Basepage.elementVisibleContainsText(this.Price, testdata.myWishlistPage.myWishlistdetails.Price))
 }

 clickonDetails(){
    Basepage.clickElementNoWait(this.Details)
 }

  validatebundleDescription(){
    Basepage.elementVisible(this.bundleDescription)
    expect(Basepage.elementVisibleContainsText(this.bundleDescription, testdata.myWishlistPage.myWishlistdetails.bundleDescription))
 }

  validateData(){
    Basepage.elementVisible(this.Data)
    expect(Basepage.elementVisibleContainsText(this.Data, testdata.myWishlistPage.myWishlistdetails.Data))
 }

  validateBundle(){
    Basepage.elementVisible(this.Bundle)
    expect(Basepage.elementVisibleContainsText(this.Bundle, testdata.myWishlistPage.myWishlistdetails.Bundle))
 }

 clickonaddToCartButton(){
    Basepage.clickElementNoWait(this.adddToCartButton)
}

 clickOnenterNumber(){
    Basepage.clickElementNoWait(this.enterNumber)
}

clickOnphoneNumber() {
    Basepage.clearText(this.phoneNumber).type(testdata.myWishlistPage.myWishlistdetails.phoneNumber)
 }

 clickonCart(){
    Basepage.clickElementNoWait(this.Cart)
}

 clickOncartIcon(){
    Basepage.clickElementNoWait(this.cartIcon)
}

 validateItem(){
    Basepage.elementVisible(this.Item)
    expect(Basepage.elementVisibleContainsText(this.Item, testdata.myWishlistPage.myWishlistdetails.Item))
 }

}
export default new mywishlistPage();