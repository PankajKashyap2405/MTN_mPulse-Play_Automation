import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import MTNPlaynewspage from "../../pages/MTNPlaynewspage";

Then("validate World news under just4u section", () => {
    MTNPlaynewspage.validateWorldNewsText()
})
When("User click on explore channel view all button", () => {
    MTNPlaynewspage.clickOnExploreChannel()
})

Then("validate world news in explore channel landing page", () => {
    MTNPlaynewspage.validateWorldNews()
})
When("user click on world news channel", () => {
    MTNPlaynewspage.clickonWorldChannel()
})
Then("validate world news text in landing page", () => {
    MTNPlaynewspage.ValidateTextInWorldNewsPage()
})
Then("validate Business day,This day and The leadership Partners in landing page", () => {
    MTNPlaynewspage.ValidatePartners()

})
When("user click on Business day partner,This Day and the leader ship partner banners", () => {
    MTNPlaynewspage.ClickonBusinessDayThisDayAndTheleadershipPartners()

})