import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/bbcPodcast.json"

export class BbcPage{

    //create locators for element
    public Lifestyle:string = "div[id='lifestyle-slider'] div:nth-child(17) a:nth-child(1) div:nth-child(1)"
    public explorechannels:string = "#channels-news-slider > div.owl-stage-outer > div > div:nth-child(34) > a > div"
    public BbcPodcastLandingPage:string = "#block-selfservice-breadcrumbs > div > div > ul > li:nth-child(3)"


 //Action methods


 viewLifestyle(){
    Basepage.clickHiddenElement(this.Lifestyle)
 }

  
     validateBBCNewsPodcast(){
        cy.get("div[id='lifestyle-slider'] div:nth-child(2) a:nth-child(1)").then(($input)=>{
            const val = $input.text()
            if( val == "NewBBC World Service Focus on Africa" || val == "BBC World Service")
            {
             cy.get("div[id='lifestyle-slider'] div:nth-child(2) a:nth-child(1)").click({force:true})
             cy.wait(10000)
             expect(Basepage.elementVisibleContainsText("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)","Bbc podcast")).to.be.ok
            }
            else
            {
                cy.get("div[id='lifestyle-slider'] div[class='owl-stage'] div:nth-child(1) a:nth-child(1) div:nth-child(2) p:nth-child(1)").then(($input)=>{
                const val = $input.text()
                if( val == "NewBBC World Service Focus on Africa"|| val == "BBC World Service")
                {
                 cy.get("div[id='lifestyle-slider'] div:nth-child(2) a:nth-child(1)").click({force:true})
                 cy.wait(10000)
                 expect(Basepage.elementVisibleContainsText("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)","Bbc podcast")).to.be.ok
    
                }
                })
            }
            cy.visit("/")
        }
        )

    }

    viewExplorechannels(){
        Basepage.clickHiddenElement(this.explorechannels)
    }

    validateBBCLivetheStory(){
        
        
          }
}




    

export default new BbcPage();