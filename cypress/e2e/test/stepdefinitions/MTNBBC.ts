import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { Basepage } from "../../../support/basepage";
import bbcPage from "../../pages/bbcPage";

//Navigate to Application URL
//Users login to Application with username

//User view the BBC News podcast under lifestyle section

//When ("User click on the BBC News on lifestyle section and be redirected to the service landing page",()=>{
    //bbcPage.viewLifestyle()
//})

Then ("User view BBC News podcast service landing page",()=>{
    bbcPage.validateBBCNewsPodcast()
})

//User view the BBC Live the Story under explore channels section

//When ("User click on the BBC Live the Story on explore channels section and be redirected to the service landing page",()=>{
    //bbcPage.viewExplorechannels()
//})

Then ("User view BBC Live the Story service landing page",()=>{
    //bbcPage.validateBBCLivetheStory()
})