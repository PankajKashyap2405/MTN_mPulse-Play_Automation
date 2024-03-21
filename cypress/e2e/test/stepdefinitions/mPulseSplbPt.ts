import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import MTNmPulseSplbPT from "../../pages/MTNmPulseSplbPT";



When ("Student click's on Click here to Participate", () => {
MTNmPulseSplbPT.ClickonClickHereToPerticipate()
    
})

Then ("Validate spelling bee page is displayed", () => {
MTNmPulseSplbPT.validateSplbPage()    
})

Then("Validate Play annually button is displayed", () => {
    MTNmPulseSplbPT.validatesplbbutton1()
})

When("Student click's on Play Annually Button", () => {
    MTNmPulseSplbPT.clickPlayAnnuallyButton()
});

Then("Validate Are you ready for mPulse Spelling Bee Quiz? pop up is displayed", () => {
    MTNmPulseSplbPT.validateSplbPopUp1()
});

Then("Validate Practice button is displayed", () => {
    MTNmPulseSplbPT.validatesplbbutton1()
});

When("Student click's on Take Practice Test button", () => {
    MTNmPulseSplbPT.clickonPracticeTestButton()
})

Then("Validate Practice Test Page is displayed", () => {
    MTNmPulseSplbPT.validatePracticeTestPage()
})

When("Student answer all the questions", () => {
    MTNmPulseSplbPT.validatePracticeTest()
})

Then ("validate all the answers are submitted", () => {
    MTNmPulseSplbPT.validateFinalResult()
})