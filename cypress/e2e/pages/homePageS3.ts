import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/homepageval.json";
import { test } from "mocha";
//we can't able to automate dynamic data
export class homepageS3{
    //for validating best selling products
public product1:string = "a[title='ThryveTalk 1500'] div[class='trending-hd']"
public product2:string = "a[title='360GB SME Data Plan'] div[class='trending-hd']"
public product3:string = "a[title='25TB SME Data Plan'] div[class='trending-hd']"
public product4:string = ""
public product5:string = ""
public nextButton:string = "section.mtn-trending > div.trending-wp > div > div > div.owl-nav > button.owl-next > span"
public previousButton:string = "section.mtn-trending > div.trending-wp > div > div > div.owl-nav > button.owl-prev > span"
public viewAllButton:string = "section.mtn-trending > div.mtn-container > div > div.mtn-col-2.txt-align-right > a"
public productListingPage:string = "#layerednav-list-products > div:nth-child(1) > div.toolbar-sorter.sorter > label"
public homeLink:string = "a[title='Go to Home Page']"
public heading:string = "section.mtn-trending > div.mtn-container > div > div:nth-child(1) > h2"

//for validating best selling products and that pages
public productPage1:string = "div.container.pdp-bundle div div.col-md-8.col-sm-12.right-main-wrapper div span"
public productPage2:string = "div[class='container pdp-bundle'] div[class='btm-validity-info'] span:nth-child(1)"
public productPage3:string = "div[class='container pdp-bundle'] div[class='btm-validity-info'] span:nth-child(1)"
public productPage4:string = "div[class='container pdp-bundle'] div[class='btm-validity-info'] span:nth-child(2)"//validate wheather trending  products are displayied 
validateBestSellingProducts()
{
   expect(Basepage.elementVisibleContainsText(this.heading,testdata.HomePage.Heading)).to.be.ok
   expect(Basepage.elementVisibleContainsText(this.product1,testdata.HomePage.Product1)).to.be.ok
   expect(Basepage.elementVisibleContainsText(this.product2,testdata.HomePage.Product2)).to.be.ok
   expect(Basepage.elementVisibleContainsText(this.product3,testdata.HomePage.Product3)).to.be.ok
   expect(Basepage.elementVisibleContainsText(this.product4,testdata.HomePage.Product4)).to.be.ok
cy.get(this.nextButton).click({force:true})
cy.get(this.nextButton).click({force:true})
cy.get(this.previousButton).click({force:true})
cy.get(this.viewAllButton).click({force:true})
expect(Basepage.elementVisibleContainsText(this.productListingPage,testdata.HomePage.AllProductsListingPage)).to.be.ok
cy.get(this.homeLink).click({force:true})


//check wheather products r clickable and validate that page
cy.get(this.product1).click({force:true})
expect(Basepage.elementVisibleContainsText(this.productPage1,testdata.HomePage.ProductPage1)).to.be.ok
cy.get(this.homeLink).click({force:true})
cy.get(this.product2).click({force:true})
expect(Basepage.elementVisibleContainsText(this.productPage2,testdata.HomePage.ProductPage2)).to.be.ok
cy.get(this.homeLink).click({force:true})
cy.get(this.product3).click({force:true})        
expect(Basepage.elementVisibleContainsText(this.productPage3,testdata.HomePage.ProductPage3)).to.be.ok
cy.get(this.homeLink).click({force:true})
cy.get(this.product4).click({force:true})
expect(Basepage.elementVisibleContainsText(this.productPage4,testdata.HomePage.ProductPage4)).to.be.ok
cy.get(this.homeLink).click({force:true})

}

}
export default new homepageS3();

