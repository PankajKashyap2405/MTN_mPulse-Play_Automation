import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/playhomepage.json"
import { basePlacements } from "@popperjs/core";

export class HomePagePlay{
    public whatsTrendingSection:string = "div:nth-child(4) div:nth-child(1) div:nth-child(1) h5:nth-child(1) span:nth-child(1)"
    public banner1:string = "#block-selfservice-content > div > div:nth-child(5) > div > div > div"
    public lifeStyleSection:string = "div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(1)"
    public banner2:string = "#block-selfservice-content > div > div:nth-child(10) > div > div > div"
    public banner1LandingPage:string = "#block-selfservice-breadcrumbs > div > div > div > div > div > span:nth-child(3) > a"
    public exploreChannel:string = "div:nth-child(11) div:nth-child(1) div:nth-child(1) h5:nth-child(1)"
    public viewALL:string = "#block-selfservice-content > div > div:nth-child(11) > div:nth-child(1) > div > span > a > i"
    //public exploreChanelLandingPage:string = "//a[normalize-space()='Explore channels']"
    


validateBanners(){
    expect(Basepage.elementVisibleContainsText(this.whatsTrendingSection, testdata.HomePage.WhatsTrendingSection)).to.be.ok
    cy.get(this.banner1).find('img').should('be.visible')
    expect(Basepage.elementVisibleContainsText(this.lifeStyleSection,testdata.HomePage.LifeStyleSection)).to.be.ok
    cy.get(this.banner2).find('img').should('be.visible')
}
validateBannersLandingPage()
{
    cy.get(this.banner1).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.banner1LandingPage,testdata.HomePage.Banner1LandingPage)).to.be.ok
}
//explore chanel section
validateViewAllButton()
{
   cy.get(this.exploreChannel).should('be.visible')
   cy.get(this.viewALL).should('be.visible')  
}
clickOnViewAllButton(){
        
   //expect(Basepage.elementVisibleContainsText(this.viewALL,testdata.HomePage.ViewAll)).to.be.ok
    cy.get(this.viewALL).click()
    cy.wait(5000)
}
//validatePartnerLandingPage(){
    //expect(Basepage.elementVisibleContainsText(this.exploreChanelLandingPage,testdata.HomePage.PartnerLandingPage)).to.be.ok
    

    
//}


}
export default new HomePagePlay();

