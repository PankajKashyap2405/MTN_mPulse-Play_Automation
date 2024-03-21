import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import HomePagePlay from "../../pages/HomePagePlay";
import commonPage from "../../pages/commonPage";
import common from "mocha/lib/interfaces/common";



    Then("validate the promotional banner1 under whatstrending section", () => {
       HomePagePlay.validateBanners()

   });
    
   Then("validate the promotional banner2 under lifestyle section", () => {
    HomePagePlay.validateBanners()

   });

   Then("validate the banner1 landing page", () =>{
    HomePagePlay.validateBannersLandingPage()
   });
 

    

    