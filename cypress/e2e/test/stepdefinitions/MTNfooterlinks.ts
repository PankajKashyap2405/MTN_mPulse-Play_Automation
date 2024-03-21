import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

import commonPage from "../../pages/commonPage";
import homepage2 from "../../pages/homepage2";

import homepage from "../../pages/homePage";

When("click on footer link",function (){

    //homepage.navigateToTabAndClose()

    homepage2.validateFooterLinkAboutMTN()

    commonPage.navigateToAplication()



  })