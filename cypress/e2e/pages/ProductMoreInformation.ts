import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/example.json"

export class ProductMoreInformation{

// capture required locators
public seeMoreDetails: string = "a[role='button']"
public productDetails: string = "div > div.pro-des.font-13.pb-3"
                                

//create action methods

clickSeeMoreDetails()
{
  Basepage.clickElement(this.seeMoreDetails)
  
}

validateProductInfo(){

    expect(Basepage.elementVisibleContainsText(this.productDetails,testdata.data.productDetails)).to.be.ok
}

}   
export default new ProductMoreInformation(); 