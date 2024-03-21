import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/bundleCatalogue.json";

export class bundlecataloguePage{

    //create locators for element    
    public databundle:string = "a[id='ui-id-2'] span"
    public databundleResultsLabel:string = "#tab2_content > div > div:nth-child(2) > a > div > div > div.h-fe-block-text > div.fp-hd"
    
    //Action methods

    clickOndatabundle(){
       Basepage.clickElementNoWait(this.databundle) 
    }

       validateDatabundleResultsLabel(){
        Basepage.elementVisible(this.databundleResultsLabel)
        expect(Basepage.elementVisibleContainsText(this.databundleResultsLabel,testdata.BundleCataloguePage.BundleCatalogueDetails.DataBundleResults))
          }
    }
    export default new bundlecataloguePage();
