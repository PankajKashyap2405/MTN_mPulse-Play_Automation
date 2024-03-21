import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/Wishlist.json";
import homePage from "./homePage";
import myWishlistPage from "./myWishlistPage";

export class WishlistValidationPage {

    
   //create locators for elements
   public Data:string = "span[class='mtn-service-img'] i[class='data-icon-mtn']"
   public wishlistIcon:string = "#wishlist_btn_197"
   public addToCartIcon:string = "#item_987 > div > div.product-item-inner.mf-initial > div.box-tocart.mf-initial > fieldset > div > div > button > span"
   public Wishlist:string = "#html-body > div.page-wrapper.mf-initial > div.main-header.cart-header-label.mf-initial > header > div.header.content.mf-initial > ul > li > div > ul > li.link.wishlist > a"
   public enterNumber:string = "#block-simple-text-2-197-tab"
   public MSISDN:string = "#mob-mobile-197"
   public Item:string = "#block-simple-text-2-197 > div > span"

   //Action methods 
     
   clickonData(){
      Basepage.wait()
      Basepage.wait()
      Basepage.clickElementNoWait(this.Data)
      Basepage.wait()
      Basepage.wait()
   }

   clickonwishlistIcon(){
      Basepage.clickElementNoWait(this.wishlistIcon)
   }

   clickonWishlist(){
      Basepage.clickElementNoWait(this.Wishlist)
   }

   clickonaddToCart(){
      Basepage.clickElementNoWait(this.addToCartIcon)
  }

  clickonenterNumber(){
   Basepage.clickElementNoWait(this.enterNumber)
  }
  
   clickonMSISDN() {
      Basepage.clearText(this.MSISDN).type(testdata.WishlistPage.Wishlistdetails.MSISDN)
   }

   validateItem(){
      Basepage.elementVisible(this.Item)
      expect(Basepage.elementVisibleContainsText(this.Item, testdata.WishlistPage.Wishlistdetails.Item))
  }


}
export default new WishlistValidationPage();
