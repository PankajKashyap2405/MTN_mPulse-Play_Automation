import {Basepage} from "../../support/basepage";

export class cartPage2{


public carticon:string="a[aria-label='Minicart']"



    clickoncartIcon()
    {
        Basepage.clickElement(this.carticon)
    }
}
export default new cartPage2();
