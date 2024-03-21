import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/ordersUIEle.json"
import { basePlacements } from "@popperjs/core";


export class playhomepage{

public videolink1:string=".active.what-new"
public videolink2:string=".active.trending"
public videolink3:string="body div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(3) div:nth-child(2) div:nth-child(1) div:nth-child(7) div:nth-child(1) div:nth-child(1) h5:nth-child(1"
public clickOnVideobanner:string="div[id='whats-new-slider2'] div[class='owl-stage'] div:nth-child(1) a:nth-child(1)"
public validatevideonavigate:string=".nav-link.active-pagination-link"
public clickOnMTNlogo:string="div[class='m-logo'] a"
public clickOnViewAll:string="a[href='/play/whats-trending']"
public validateViewallproducts:string=".nav-link.active-pagination-link"
public validateMusicBanners:string="body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(1)"
public clickOnMusicBaner:string="div[id='trending-slider2'] div[class='owl-stage'] div:nth-child(1) a:nth-child(1)"
public validateMusicProduct:string=".nav-link.active-pagination-link"
public clickOnViewAllinMusic:string="a[href='/play/music']" 
public validateMusic:string=".nav-link.active-pagination-link"
public validateGames:string="div:nth-child(8) div:nth-child(1) div:nth-child(1) h5:nth-child(1)"
public clickOnGamesBanner:string="div[id='games-zone'] div[class='owl-stage'] div:nth-child(1) a:nth-child(1)"
public validateGamesproduct:string=".nav-link.active-pagination-link"
public validateGamesproduct2:string=".nav-link.active-pagination-link"
public validateGamesproduct3:string=".nav-link.active-pagination-link"
public clickOnViewAllinGames:string="a[href='/play/game']"
public validateGamesbanners:string="h5[class='text-title-name mt-1'] span"

//public validateLifestyle:string="body  div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(3)  div:nth-child(2) div:nth-child(1) div:nth-child(10) div:nth-child(1) div:nth-child(1) h5:nth-child(1)"
public validateLifestyle:string="div:nth-child(10) div:nth-child(1) div:nth-child(1) h5:nth-child(1)"
public clickOnLifestyleBanner:string="div[id='lifestyle-slider'] div[class='owl-stage'] div:nth-child(1) a:nth-child(1)"
public validateLifestyleproduct:string="div[id='block-selfservice-breadcrumbs'] li:nth-child(1) a:nth-child(1)"
public clickOnViewAllinLifestyle:string="a[href='/play/lifestyle']"
public validateLifestylebanners:string=".nav-link.active-pagination-link"
//public validatelogo:string=".m-logo"
public validatetopestry:string="#block-selfservice-breadcrumbs > div > div > ul > li:nth-child(3) > a"



validatevideos(){
    expect(Basepage.elementVisibleContainsText(this.videolink1, testdata.ordersPage.OrderDetails.video1)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.videolink2, testdata.ordersPage.OrderDetails.video1)).to.be.ok
    expect(Basepage.elementVisibleContainsText(this.videolink3, testdata.ordersPage.OrderDetails.video2)).to.be.ok
}

clcikOnvideobannner(){
    cy.get(this.clickOnVideobanner).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.validatevideonavigate, testdata.ordersPage.OrderDetails.validatevideonavigate)).to.be.ok
    
}

clickOnMTNLogo(){
  cy.get(this.clickOnMTNlogo).click({force:true})
}

clickandvalidateViewall(){
 cy.get(this.clickOnViewAll).click({force:true})
 expect(Basepage.elementVisibleContainsText(this.validateViewallproducts,testdata.ordersPage.OrderDetails.ValidateAllProducts)).to.be.ok
}

//MTN Play Music
validateMusicBanner(){
    expect(Basepage.elementVisibleContainsText(this.validateMusicBanners, testdata.ordersPage.OrderDetails.validateMusicbanners)).to.be.ok
    
}

clickOnMusicBannerandValidate(){
    cy.get(this.clickOnMusicBaner).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.validateMusicProduct,testdata.ordersPage.OrderDetails.validateMusicProduct)).to.be.ok
}

clickAndValidateViewallMusic(){
    cy.get(this.clickOnViewAllinMusic).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.validateMusic, testdata.ordersPage.OrderDetails.validatemusic)).to.be.ok

}
//MTN play games

validateGamesBanner(){
    expect(Basepage.elementVisibleContainsText(this.validateGames, testdata.ordersPage.OrderDetails.validateGames)).to.be.ok
    
}
clickOnGamesBannerandValidate(){
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)").should(($input)=>{
        const val = $input.text()
        if(expect(val).eqls('BBC World Service')){
         cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)").click({force:true})
         cy.wait(10000)
         expect(Basepage.elementVisibleContainsText(this.validateGamesproduct,testdata.ordersPage.OrderDetails.validatgamesproduct)).to.be.ok
        }
    })

    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(11) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)").should(($input)=>{
        const val = $input.text()
        if(expect(val).eqls('BBC World Service')){
         cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(11) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)").click({force:true})
         cy.wait(10000)
         expect(Basepage.elementVisibleContainsText(this.validateGamesproduct,testdata.ordersPage.OrderDetails.validatgamesproduct2)).to.be.ok
        }
    })

    cy.get("#block-selfservice-content > div > div > div.row.mt-2 > div > div > a:nth-child(8) > div > div.whats-new-image-box > img").should(($input)=>{
        const val = $input.text()
        if(expect(val).eqls('BBC World Service')){
         cy.get("#block-selfservice-content > div > div > div.row.mt-2 > div > div > a:nth-child(8) > div > div.whats-new-image-box > img").click({force:true})
         cy.wait(10000)
         expect(Basepage.elementVisibleContainsText(this.validateGamesproduct,testdata.ordersPage.OrderDetails.validatgamesproduct2)).to.be.ok
        }
    })
  
    
      
    //cy.get(this.clickOnGamesBanner).click({force:true})
    
}

clickAndValidateViewallgames(){
    cy.get(this.clickOnViewAllinGames).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.validateGamesbanners, testdata.ordersPage.OrderDetails.validateGamesbanners)).to.be.ok

}
//MTN Play lifestyle
validateLifestyleBanner(){
    expect(Basepage.elementVisibleContainsText(this.validateLifestyle, testdata.ordersPage.OrderDetails.validateLifestyle)).to.be.ok
    
}
clickOnLifestyleBannerandValidate(){
    cy.get(this.clickOnLifestyleBanner).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.validateLifestyleproduct,testdata.ordersPage.OrderDetails.validatLifestyleproduct)).to.be.ok
}

clickAndValidateViewallLifestyle(){
    cy.get(this.clickOnViewAllinLifestyle).click({force:true})
    expect(Basepage.elementVisibleContainsText(this.validateLifestylebanners, testdata.ordersPage.OrderDetails.validateLifestylebanners)).to.be.ok
    cy.get(this.validateLifestyleproduct).click({force:true})
}

clickOnBBCBannerandValidate(){
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
        })
    }
}

    export default new playhomepage();
