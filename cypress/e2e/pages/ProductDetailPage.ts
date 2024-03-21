import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/ProductListing.json";

export class ProductDetailpage{

    public Cloud: string = "div[class='service-block sev-4'] a"
    public CloudPage: string = ".font-24.black-color.font-wg500"
    public Device: string = "body > div:nth-child(2) > main:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)"
    public deviceLabel : string = "#page-title-heading > span"
    public wishList : string = "#wishlist_btn_155 > img"


    // methods

    DeviceButton (){
        Basepage.clickElementForce(this.Device)
        cy.wait(1000)
        cy.viewport(1240,900)
        cy.get('select#sorter option:selected').should('contain.text', 'Lowest to highest price')
        
    }



    CloudButton (){
        cy.viewport(1040,680)
        Basepage.clickElement(this.Cloud)
    }

    CloudText (){
          expect(Basepage.elementVisibleContainsText(this.CloudPage,testdata.PrductList.CloudServicesText)).to.be.ok



    }

}
   export default new ProductDetailpage();