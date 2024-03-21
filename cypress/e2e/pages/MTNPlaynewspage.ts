import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/PlayHome.json";

export class MTNPlaynewspage{
    //locators
    public worldNewsText:string = "#selection-for-you-slider2 > div.owl-stage-outer > div > div:nth-child(85) > a > div.play-category-title-box > span"
    public exploreChannel:string = "a[href='https://playpreprod.mtn.ng/explore-channels']"
    public worldNews:string = "#block-selfservice-content > div > div > div > div > div:nth-child(21) > div > span > a > div > h6"
    public textInWorldNewsPage = "div[class='epaper-heading'] h6"
    public BusinessDayPartner = "div[class='row'] div:nth-child(2) a:nth-child(1) div:nth-child(1) div:nth-child(2) h6:nth-child(1)"
    public ThisDayPartner = "div[id='content'] div:nth-child(3) a:nth-child(1) div:nth-child(1) div:nth-child(2) h6:nth-child(1)"
    public TheLeadershipPartner = "div:nth-child(4) a:nth-child(1) div:nth-child(1) div:nth-child(2) h6:nth-child(1)"
    public WorldNewsButton = "#selection-for-you-slider2 > div.owl-stage-outer > div > div:nth-child(30) > a > div.play-category-title-box > span"
    //Action Methods
    validateWorldNewsText() {
      expect(Basepage.elementVisibleContainsText(this.WorldNewsButton,testdata.home.Header.Worldnews)).to.be.ok
   }
    clickOnExploreChannel() {
        cy.get(this.exploreChannel).click({force:true})
    }
    validateWorldNews() {
        expect(Basepage.elementVisibleContainsText(this.worldNews,testdata.home.Header.Worldnews)).to.be.ok
    }       
        clickonWorldChannel(){
        cy.get(this.worldNews).click({force:true})
    }
    ValidateTextInWorldNewsPage() {
        expect(Basepage.elementVisibleContainsText(this.textInWorldNewsPage,testdata.home.Header.Textinworldnews)).to.be.ok
    }
    ValidatePartners() {
        expect(Basepage.elementVisibleContainsText(this.BusinessDayPartner,testdata.home.Header.BusinessDay)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.ThisDayPartner,testdata.home.Header.ThisDay)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.TheLeadershipPartner,testdata.home.Header.TheLeadership)).to.be.ok
    }   
        ClickonBusinessDayThisDayAndTheleadershipPartners() {
            cy.get(this.BusinessDayPartner).click({force:true})
            cy.wait(4000)
            cy.go('back')
            cy.wait(2000)
            cy.get(this.ThisDayPartner).click({force:true})
            cy.wait(4000)
            cy.go('back')
            cy.wait(2000)
            cy.get(this.TheLeadershipPartner).click({force:true})
            cy.wait(4000)
            cy.go('back')
            cy.wait(2000)    
        }
    }

export default new MTNPlaynewspage();