import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/mifiBundle.json";

export class mifibundlePage{

    //create locators for element    
    public databutton:string = "span[class='mtn-service-img'] i[class='data-icon-mtn']"
    public broadbandbundles:string = "a[href='https://mymtnngnxtgen-shop-staging.mtnnigeria.net/shop/data-bundles.html?cat=46']"
    public mifibundles:string = "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(3) > a"
    public databundleResults:string = "#layerednav-list-products > div.products.wrapper.products-grid.grid.mf-initial > div > div:nth-child(1) > div > div.h-fe-block.mf-initial > div.h-fe-block-text.mf-initial"

    //Action methods

    clickOndatabutton(){
        Basepage.clickElementNoWait(this.databutton) 
     }

    clickOnbroadbandbundles(){
        Basepage.clickElementNoWait(this.broadbandbundles) 
     }

     clickOnmifibundles(){
        Basepage.clickElementNoWait(this.mifibundles) 
     }

     validateDatabundleResults(){
        Basepage.elementVisible(this.databundleResults)
        expect(Basepage.elementVisibleContainsText(this.databundleResults,testdata.MifiBundlePage.MifiBundleDetails.DataBundleResults))
          }
}
export default new mifibundlePage();