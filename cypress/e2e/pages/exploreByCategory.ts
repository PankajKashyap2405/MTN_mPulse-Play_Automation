import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/exploreByCategory.json";
import homePage from "./homePage";

export class exploreCategoryPage {
  public allProducts: string =
    "div.magicmenu.clearfix.mf-initial > ul > li > a > span:nth-child(1)";
  public prdDevices: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(1) > a";
  public prodDataBundles: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(2) > a";
  public prodEntServices: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(3) > a";
  public prodCloudServices: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(4) > a";
  public prodAirtimeRecharge: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(5) > a";
  public clearAllBtn: string =
    "#layerednav-filter-block > div.block-content.filter-content.sidebar-shop.sidebar-left.mf-initial > div.block-actions.filter-actions.mf-initial > a";
  public airtimeRechargePage: string =
    "#layerednav-filter-block > div.block-content.filter-content.sidebar-shop.sidebar-left.mf-initial > div.filter-current.mf-initial.active > ol > li > span.filter-value";
  public broadBandDevCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(1)";
  public eyeStyleDevCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(2)";
  public accessBundleDataCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(1)";
  public broadbandDataCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(2)";
  public xtraValueDataCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(3)";
  public familyPackDataCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(4)";
  public socialBundleDataCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(5)";
  public videoStreamingDataCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(6)";
  public pulseDataCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(7)";
  public satchetDataCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(8)";
  public bizPlusEntCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(1)";
  public thryveEntCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(2)";
  public dataShareEntCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(3)";
  public learningBundlesEntCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(4)";
  public educationEntCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(5)";
  public connectMoreEntCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(6)";
  public bulkSmsCloudCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(1)";
  public ms365CloudCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(2)";
  public esetAntiVirusCloudCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(3)";
  public cloudenlyCloudCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(4)";
  public zoomCloudCat: string =
    "#narrow-by-list > div:nth-child(1) > div.filter-options-content.mf-initial > ol > li:nth-child(5)";

  //methods
  clickAllProds() {
    cy.get(this.allProducts).trigger("mouseover", { force: true });
    cy.get(this.allProducts).click({ force: true });
    Basepage.wait();
  }

  clickDeviceLink() {
    Basepage.clickHiddenElement(this.prdDevices);
  }

  clickClearAllBtn() {
    Basepage.clickHiddenElement(this.clearAllBtn);
  }

  clickDataBundleLink() {
    Basepage.clickHiddenElement(this.prodDataBundles);
  }

  clickEnterpriseServicesLink() {
    Basepage.clickHiddenElement(this.prodEntServices);
  }

  clickCloudServLink() {
    Basepage.clickHiddenElement(this.prodCloudServices);
  }

  clickAirtimeRecharge() {
    Basepage.clickHiddenElement(this.prodAirtimeRecharge);
  }

  validateByCategories() {
    expect(
      Basepage.elementVisibleContainsText(
        this.prdDevices,
        testdata.AllProductsCategory.prodDevices
      )
    ).to.be.ok;
    expect(
      Basepage.elementVisibleContainsText(
        this.prodDataBundles,
        testdata.AllProductsCategory.prodDataBundles
      )
    ).to.be.ok;
    expect(
      Basepage.elementVisibleContainsText(
        this.prodEntServices,
        testdata.AllProductsCategory.prodEntServices
      )
    ).to.be.ok;
    expect(
      Basepage.elementVisibleContainsText(
        this.prodCloudServices,
        testdata.AllProductsCategory.prodCloudServices
      )
    ).to.be.ok;
    expect(
      Basepage.elementVisibleContainsText(
        this.prodAirtimeRecharge,
        testdata.AllProductsCategory.prodAirtimeRecharge
      )
    ).to.be.ok;
  }

  validateDevicePageContent() {
    expect(Basepage.elementVisible(this.broadBandDevCat)).to.be.ok;
    expect(Basepage.elementVisible(this.eyeStyleDevCat)).to.be.ok;
  }

  validateDataBundlesPage() {
    expect(Basepage.elementVisible(this.accessBundleDataCat)).to.be.ok;
    expect(Basepage.elementVisible(this.pulseDataCat)).to.be.ok;
    expect(Basepage.elementVisible(this.satchetDataCat)).to.be.ok;
    expect(Basepage.elementVisible(this.broadbandDataCat)).to.be.ok;
    expect(Basepage.elementVisible(this.xtraValueDataCat)).to.be.ok;
    expect(Basepage.elementVisible(this.familyPackDataCat)).to.be.ok;
    expect(Basepage.elementVisible(this.socialBundleDataCat)).to.be.ok;
    expect(Basepage.elementVisible(this.videoStreamingDataCat)).to.be.ok;
  }

  validateEnterpriseServicesPage() {
    expect(Basepage.elementVisible(this.thryveEntCat)).to.be.ok;
    expect(Basepage.elementVisible(this.bizPlusEntCat)).to.be.ok;
    expect(Basepage.elementVisible(this.dataShareEntCat)).to.be.ok;
    expect(Basepage.elementVisible(this.educationEntCat)).to.be.ok;
    expect(Basepage.elementVisible(this.connectMoreEntCat)).to.be.ok;
    expect(Basepage.elementVisible(this.learningBundlesEntCat)).to.be.ok;
  }

  validateCloudServicesPage() {
    expect(Basepage.elementVisible(this.cloudenlyCloudCat)).to.be.ok;
    expect(Basepage.elementVisible(this.zoomCloudCat)).to.be.ok;
    expect(Basepage.elementVisible(this.ms365CloudCat)).to.be.ok;
    expect(Basepage.elementVisible(this.bulkSmsCloudCat)).to.be.ok;
    expect(Basepage.elementVisible(this.esetAntiVirusCloudCat)).to.be.ok;
  }

  validateAirtimeRechargePage() {
    expect(
      Basepage.elementVisibleContainsText(
        this.airtimeRechargePage,
        testdata.AllProductsCategory.prodAirtimeRecharge
      )
    ).to.be.ok;
  }
}
export default new exploreCategoryPage();
