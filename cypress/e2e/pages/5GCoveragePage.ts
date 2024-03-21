import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/5GCoverage.json";
import homePage from "./homePage";

export class MTN5GCoveragePage {

    //create locators for elements
    public broadbandRouter:string = "a[title='5G Broadband Router']"
    public Coverage:string = "div.columns.mf-initial > div > div.content-wrapper.mf-initial > div > div > div > div > div.col-md-8.mf-initial > div > div.product-info-main.mf-initial > div.view-network-coverage.product.attribute.overview.mf-initial"
    public xBtn:string = "#chakra-modal-\:r1\: > button"
    public Network:string = "li:nth-child(1) details:nth-child(1) summary:nth-child(1) h2:nth-child(1) strong:nth-child(1)"
    
    //Action methods 

    clickonbroadbandRouter(){
        Basepage.wait()
        Basepage.wait()
        Basepage.clickElementNoWait(this.broadbandRouter)
        Basepage.wait()
        Basepage.wait()
    }

     clickonCoverage(){
        cy.get(this.Coverage).click({force:true})
        cy.visit("https://external.mtnncoveragelocator.com")
    }
  
    clickonxBtn(){
    cy.wait(6000)    
    cy.get("body").click("topRight", {force:true})
    
    }

    validateNetwork(){
    expect(cy.get(this.Network).contains(testdata.MTN5GCoveragePage.MTN5GCoveragedetails.Network))
    expect(Basepage.elementVisibleContainsText(this.Network,testdata.MTN5GCoveragePage.MTN5GCoveragedetails.Network)).to.be.ok
    }

       
}
export default new MTN5GCoveragePage();

