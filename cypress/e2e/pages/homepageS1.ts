import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/homepageval.json";
import { test } from "mocha";






export class homepage{
    public mtnLogo:string = "#html-body > div > div.main-header.cart-header-label > header > div.header.content > a"
    public allProductsMenu:string = "body > div:nth-child(8) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(1)"
    public cartIcon:string = "header > div.header.content > div.container > div > a"
    public profileIcon:string = "#taskList"
    public accountDropdown:string = "#taskList > span"
    public theamIcon:string = "div.header.content ul div:nth-child(1) div div div div div ul li img.dark-theme-icon"
   // static public var1: string ;
   //For validating banners
   public banner1:string = "section.mtn-hm-banner > div > div.owl-dots > button:nth-child(1) > span"
   public banner2:string = "section.mtn-hm-banner > div > div.owl-dots > button:nth-child(2) > span" 
   public banner3:string = "section.mtn-hm-banner > div > div.owl-dots > button:nth-child(3) > span"  
   public banner4:string = "section.mtn-hm-banner > div > div.owl-dots > button.owl-dot.active > span" 
   public heading:string = "section.mtn-trending > div.mtn-container > div > div:nth-child(1) > h2"

   //banners 
   public bannerImg1:string = "#html-body > div.page-wrapper > div.bedcum-wrapper > div > ul > li.item.home > a"
   public bannerImg2:string = "div.owl-stage-outer > div > div:nth-child(4) > div > a > div > div > div > div.mtn-banner-t-b"
   public bannerImg3:string = "div.owl-stage-outer > div > div:nth-child(5) > div > a > div > div > div > div.mtn-banner-t-b"
   public bannerImg4:string = "div.owl-stage-outer > div > div:nth-child(6) > div > a > div > div > div > div.mtn-banner-t-b"
   public homeLink:string = "a[title='Go to Home Page']"
   

 public featuredProductsHeading:string = "section.mtn-featured-product > div > div.mtn-row.fp-hd > div > h2"
 public fpDevices:string = "#horizontalTab > ul > li:nth-child(1) > button"
 public fpDataBundles:string = "#horizontalTab > ul > li:nth-child(2) > button"
 public fpEnterpriseServices:string = "#horizontalTab > ul > li:nth-child(3) > button"
 public fpAirTimeRecharge:string = "#horizontalTab > ul > li:nth-child(4) > button"
 public fpDevice1:string = "#tab-1 > div > div.mtn-col-5.pd-r-10.pd-l-10.pos-1 > div > a > div.fp-name"
public fpProductListingPage:string = "div.col-md-8 > div > div.page-title-wrapper.product > h1 > span"
public fpDataBundle1:string = "#tab-2 > div > div.mtn-col-5.pd-r-10.pd-l-10.pos-6 > div > a > div.fp-name"
public dataBundleListingPage:string  = "div.container.pdp-bundle > div > div > div.right-main-wrapper.mtn-bundle-right > div > span"
public enterPrise1:string = "a[aria-label='SMB Lite'] div[class='fp-name']"
public enterpriseServicesPage:string = "div.container.pdp-bundle > div > div > div.right-main-wrapper.mtn-bundle-right > div > span"
public recharge1:string = "#tab-4 > div > div > div > a > div.fp-name"
public rechargePage:string = "div.container.pdp-bundle > div > div > div.right-main-wrapper.mtn-bundle-right > div > span"

//validation of infobuttons
public infoBox1:string = "div > div > div > div:nth-child(1) > div > div.delivery-box-text > div.dev-hd"
public infoBox2:string = "div > div > div > div:nth-child(2) > div > div.delivery-box-text > div.dev-hd"
public infoBox3:string = "div > div > div > div:nth-child(3) > div > div.delivery-box-text > div.dev-hd"

//checking in home pagewheather  partners are displayed
public partnerText:string =".mtn-hd1.text-center" //""section.our-part-ners > div > div > div > h2"
public partner1:string = "section.our-part-ners > div > div > ul > li:nth-child(1)"
public partner2:string = "section.our-part-ners > div > div > ul > li:nth-child(2)"
public partner3:string = "section.our-part-ners > div > div > ul > li:nth-child(3)"









 validateHeaderSection()
 {
    cy.get('.logo').find('img').should('be.visible') 
    //cy.get('').select(var).should("val")
    expect(Basepage.elementVisibleContainsText(this.allProductsMenu,testdata.HomePage.AllProductsMenu)).to.be.ok
    //cy.get('.logo').find('img').should('be.visible')
    cy.get(this.cartIcon).should('be.visible')
    cy.get(this.profileIcon).should('be.visible')
    expect(Basepage.elementVisibleContainsText(this.accountDropdown,testdata.HomePage.AccountDropdown)).to.be.ok
    cy.get(this.theamIcon).should('be.visible')
    cy.get(this.theamIcon).click({force:true})
    cy.get(this.theamIcon).click({force:true})

 }
  validateBanners()
{
    cy.get(this.banner1).click({force:true})
   //expect(Basepage.elementVisibleContainsText(this.banner1,testdata.HomePage.Banner1)).to.be.ok
   cy.get(this.banner2).click({force:true})
   cy.get(this.banner3).click({force:true})
   cy.get(this.banner4).click({force:true})
   //cy.get(this.banner4).should('be.visible')
   

}



   




validateBannerImg()
{
   cy.get(this.bannerImg1).click({force:true})
   cy.get(this.bannerImg2).click({force:true})
   cy.get(this.bannerImg3).click({force:true})
   cy.get(this.bannerImg4).click({force:true})
   
}

validateFeaturedProducts(){
   expect(Basepage.elementVisibleContainsText(this.featuredProductsHeading,testdata.HomePage.FeaturedHeading)).to.be.ok
   cy.get(this.fpDevices).click({force:true})
   expect(Basepage.elementVisibleContainsText(this.fpDevice1,testdata.HomePage.FpDevice1)).to.be.ok
   cy.get(this.fpDevice1).click({force:true})
   expect(Basepage.elementVisibleContainsText(this.fpProductListingPage,testdata.HomePage.FpProductListingPage)).to.be.ok
   cy.get(this.homeLink).click({force:true})
   cy.get(this.fpDataBundles).click({force:true})
   expect(Basepage.elementVisibleContainsText(this.fpDataBundle1,testdata.HomePage.FpDataBundle1)).to.be.ok
   cy.get(this.fpDataBundle1).click({force:true})
   expect(Basepage.elementVisibleContainsText(this.dataBundleListingPage,testdata.HomePage.DataBundleListingPage)).to.be.ok
   cy.get(this.homeLink).click({force:true})
   cy.get(this.fpEnterpriseServices).click({force:true})
   expect(Basepage.elementVisibleContainsText(this.enterPrise1,testdata.HomePage.Enterprise1)).to.be.ok
   cy.get(this.enterPrise1).click({force:true})
   expect(Basepage.elementVisibleContainsText(this.enterpriseServicesPage,testdata.HomePage.ServicesListingPage)).to.be.ok
   cy.get(this.homeLink).click({force:true})
   cy.get(this.fpAirTimeRecharge).click({force:true})
   expect(Basepage.elementVisibleContainsText(this.recharge1,testdata.HomePage.Recharge1)).to.be.ok
   cy.get(this.recharge1).click({force:true})
   expect(Basepage.elementVisibleContainsText(this.rechargePage,testdata.HomePage.RechargePage)).to.be.ok
   cy.get(this.homeLink).click({force:true})
}

   validatingInfoBox()
   {
       //cy.get(this.infoBox1).should('be.visible')
       cy.get(this.infoBox1).contains("Secure Online Payments").should('be.visible');
       //expect(Basepage.elementVisibleContainsText(this.infoBox1,testdata.HomePage.InfoButton1)).to.be.ok
       expect(Basepage.elementVisibleContainsText(this.infoBox2,testdata.HomePage.InfoButton2)).to.be.ok
       expect(Basepage.elementVisibleContainsText(this.infoBox3,testdata.HomePage.InfoButton3)).to.be.ok
       
   }

   validatingPartners()
   {
      cy.wait(10000)
      cy.get(this.partnerText).scrollIntoView()
      cy.wait(1000)
      expect(Basepage.elementVisibleContainsText(this.partnerText,testdata.HomePage.Partners)).to.be.ok
      cy.get(this.partner1).should('be.visible')
      cy.get(this.partner2).should('be.visible')
      cy.get(this.partner3).should('be.visible')
   }
}






export default new homepage();
