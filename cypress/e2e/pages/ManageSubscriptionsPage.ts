import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/ordersUIEle.json";

export class SubscriptionPage {
  //Page Elements
  public manageSubscriptionsLink: string =
    "a[href='https://mymtnngnxtgen-shop-staging.mtnnigeria.net/mtn_mysubscriptions/customer/index/']";
  public allTabBtn: string = ".active[href='#all']";
  public descriptionElement: string = "div[id='all'] h2[class='notification']";

  //Methods

  clickManageSubscription() {
    Basepage.clickHiddenElement(this.manageSubscriptionsLink);
  }

  clickAllTabs() {
    Basepage.clickElementForce(this.allTabBtn);
  }

  validateText() {
    expect(
      Basepage.elementVisibleContainsText(
        this.descriptionElement,
        "Subscription not found"
      )
    ).to.be.ok;
  }
}

export default new SubscriptionPage();
