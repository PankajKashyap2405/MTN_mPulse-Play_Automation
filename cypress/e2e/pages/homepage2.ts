import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/loginUIEle.json";


export class homepage2{
    public aboutLink:string="a[title='About MTN']"





//footer link validaton
validateFooterLinkAboutMTN(){

    cy.origin('https://www.mtn.ng/about-us', () => {
    cy.on('uncaught:exception', (err) => {
  
     return false
  
      })
  
    })
  
    cy.get(this.aboutLink).invoke('removeAttr', 'target').click()
  
    cy.origin('https://www.mtn.ng/about-us', () => {
  
    cy.wait(10000)
  
    cy.get("#main > section:nth-child(3) > div.container-fluid > div > div > div > div > h4").should('be.visible')
  
    })
  

}
}



export default new homepage2();




