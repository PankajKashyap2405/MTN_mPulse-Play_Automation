import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import Supervisor from "../../pages/Supervisor";

When("Navigate Application URL",()=>{

    commonPage.OmdollarsURLLaunch()
})
When("Supervisor login to Omdollars Application", ()=>{

    Supervisor.OmdollarsSupervisorLogin()
})

Then("Validate Supervisor sucessfully logged into application",()=>{
    Supervisor.ValidateSupervisor()
}) 
When("Supervisor clicks on the Bid Project",()=>{

    Supervisor.Onclickbidproject()
})
When("Supervisor clicks on the Volunteer Pool",()=>{

    Supervisor.OnclickVolunteerpool()
})
When("Supervisor clicks on the view Action",()=>{

    Supervisor.Onclickviewaction1()
})
Then("validate the view Bidder List",()=>{

    Supervisor.validateviewbidderlist()
})
When("Supervisor clicks on the ProjectManagement",() =>{
    
     Supervisor.onclickProjectmanagment()
})
When("Supervisor clicks on the view Action link",() =>{
    
    Supervisor.onclickviewaction2()
})
Then("validate ProjectName",() =>{

    Supervisor.validateprojectname()
})
When("User clicks on the Rewarded Task",() =>{
    
    Supervisor.OnclickRewardedTask()
})
When("User clicks on the Assign Supervisor Button",()=>{
       Supervisor.OnclickSupervisor()
})
When("User clicks on the Dropdown button",()=>{
      Supervisor.Onclickdropdown()
})
When("User clicks on the Search supervisor field",()=>{
    Supervisor.Onclicksearchsup()
})
Then("Validate the sucessfull pop up for Assign supervisor",()=>{
   Supervisor.ValidateSucesspopup()
})

When("User clicks on the Reward History module",()=>{
   Supervisor.OnclickRewardHistory()
})
When("User clicks on the Search box",()=>{

    Supervisor.OnclickSearchbox()
})
Then("validate the search value",()=>{
    Supervisor.Validatesearchvalue()
})
