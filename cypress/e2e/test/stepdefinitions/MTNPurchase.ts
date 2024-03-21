import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

import commonPage from "../../pages/commonPage";

import MTNhomepage from "../../pages/MTNhomepage";


When("click on sort and Then validate 3 categories",()=>{
    MTNhomepage.clickOnSortAndValidate3categories()
})

