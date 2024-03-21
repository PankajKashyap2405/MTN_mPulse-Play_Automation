import {Basepage} from "../../support/basepage";
import testdata from "../../fixtures/loginUIEle.json"

export  class Demopage{
//page element
    public  DeviceButton: string= "body > div:nth-child(3) > main:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)"
    public  mtnbutton: string= ".mf-initial.mf-loading[src='https://mymtnngnxtgen-shop-staging.mtnnigeria.net/media/logo/stores/1/mtn-new-logo.svg']"
    public  DataButton: string= "body > div:nth-child(3) > main:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1)"

 clickOnDevicebutton(){
   
    expect(Basepage.elementVisibleContainsText(this.DeviceButton, testdata.HomePage.Account.Device1))
    cy.get(this.DeviceButton).click({force:true})

}
  clickOnMtnbutton(){
   cy.get(this.mtnbutton).click({force:true})
}
   clickOnDatabutton(){
    
    expect(Basepage.elementVisibleContainsText(this.DataButton, testdata.HomePage.Account.Device2))
    cy.get(this.DataButton).click({force:true})
}
}
export default new Demopage();



