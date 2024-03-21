import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/fiveGDevice.json";
import homePage from "./homePage";

export class fiveGDevice {
  public MTN5GIcon: string = "a[title='5G Broadband Router']";
  public scrollDiv: string = "#tab1_content";
  public mtn5GDescription: string =
    "#maincontent > div.columns.mf-initial > div > div.content-wrapper.mf-initial > div > div > div > div > div.col-md-8.mf-initial > div > div.product-info-main.mf-initial > div:nth-child(2)";

  //Methods
  clickOnMTN5GIcon() {
    Basepage.clickHiddenElement(this.MTN5GIcon);
    Basepage.wait();
  }

  validateDescription() {
    Basepage.wait();
    Basepage.wait();
    Basepage.wait();
    Basepage.wait();
    Basepage.wait();
    Basepage.wait();
    expect(
      Basepage.elementVisibleContainsText(
        this.mtn5GDescription,
        testdata.fiveGDevicePage.productDescription
      )
    ).to.be.ok;
  }
}
export default new fiveGDevice();
