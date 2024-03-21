
import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import omtest from "../../pages/OmVolunteer";

When("Navigate Main Application URL",()=>{

    commonPage.OmdollarsURLLaunch()
})
When("Volunteerss login to Omdollars Application", ()=>{

    omtest.OmVolunteerLogin()
})

Then ("Validate Volunteerss sucessfully logged into application",()=>{
    
    omtest.ValidateVolunteerlogin()
}) 
When("User clicks on the searchbox",()=>{
    omtest.Onclicksearch()
})
When("User clicks on the MyProject",()=>{
    omtest.Onclickonmyproject()
})
Then("Validate the created task successfully",()=>{
    omtest.validatetasksuccess()
})
When("User clicks on the Reward task",()=>{
    omtest.OnclickRewardHistory()
})
Then("validate the search volunteer",()=>{
     omtest.Validatevolunteer()
})
When ("User clicks on the Logout button", ()=>{
     omtest.OmLogout()
})
Then ("Validates Volunteerss logged off sucessfully",()=>{
   omtest.ValidateScreen()
})
