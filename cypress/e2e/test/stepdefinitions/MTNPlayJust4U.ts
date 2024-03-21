import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import Just4UBBcNews from "../../pages/Just4UBBcNews";
//import { join } from "cypress/types/lodash";
Then("validate Just4U section in home page", () => {
    Just4UBBcNews.ValidateJust4UText()
});    
Then("validata BBC live the story under Just4U section", () => {
    Just4UBBcNews.ValidateBBClivethestoryWorld()
});
When("user click on BBC live the story", () => {
    Just4UBBcNews.ClickonBBClivethestoryworld()
}); 
Then("validate header in landing page", () => {
    Just4UBBcNews.ValidataLiveTheStoryPage()
});  
Then("validate BBC podcast,BBC sports and BBC News minutes", () => {
    Just4UBBcNews.ValidateBBCServices()
})
Then("validate the comb,africa daily and focus on africa under BBC podcast", () => {
    Just4UBBcNews.validateBBCPodcastservices()
})
Then("validate matchofthedayafrica,bbc sports update,bbc premier league bulletien and BBC premier league updates under BBC Sports", () => {
    Just4UBBcNews.ValidateBBCsports()
})
Then("validate the world in 2 minutes in BBC news minutes", () => {
    Just4UBBcNews.validateBBCNewsInMinutes()
})
When("user click on the comb podcast", () => {
    Just4UBBcNews.clickOnCombPodcast()
})
Then("validate The Comb text,date and msg in landing page", () => {
    Just4UBBcNews.validateTheCombPodcastPage()
});
When("user click on the comb latest episode play button", () => {
    Just4UBBcNews.ClickonCombLatestEpisodePlayButton()
});
Then("validate comb latest episode audio player is displayed", () => {
    Just4UBBcNews.ValidateCombLatestEpisodAudioPlayer()
})
When("user click on comb latest episode audio close player button then validate audio player is closed",() => {
    Just4UBBcNews.clickOnCombLatestEpisodAudioCloseButton()
});
When("user click on africa daily podcast", () =>{
    Just4UBBcNews.clickonAfricaDailyPodcast()
});
Then("validate The Africa Daily text,date and msg in landing page", () => {
   Just4UBBcNews.validateAfricaDailyPage()

});
When("user click on The Africa Daily latest episode play button", () => {
    Just4UBBcNews.ClickonAfricaDailylatestEpisodePlayButton()
});
Then("validate The Africa Daily latest episode audio player is displayed", () => {
    Just4UBBcNews.ValidateAfricaDailyLatestEpisodAudioPlayer()
});
When("user click on The Africa Daily latest episode audio close player button then validate audio player is closed", () => {
    Just4UBBcNews.clickOnAfricaDailyLatestEpisodAudioCloseButton()
});

When("user click on focus on africa podcast", () => {
    Just4UBBcNews.clickonFocusOnAfricaPodcast()
});
Then("vaidate Focus on africa text,date and msg in landing page", () => {
    Just4UBBcNews.validateFocusOnAfricaPodcastPage()
});
When("user click on Focus on africa latest episode play button", () => {
    Just4UBBcNews.ClickonFocusOnAfricalatestEpisodePlayButton()
});
Then("validate Focus on africa latest episode audio player is displayed", () => {
    Just4UBBcNews.ValidateFocusOnAfricaLatestEpisodAudioPlayer()
});
When("user click on Focus on africa latest episode audio close player button then validate audio player is closed", () => {
    Just4UBBcNews.clickOnFocusOnAfricaLatestEpisodAudioCloseButton()
});
When("user click on match of the day africa sports", () => {
    Just4UBBcNews.clickOnMatchOftheDayAfricaSports()
});
Then("validate Match of the day africa text,date and msg in landing page", () => {
    Just4UBBcNews.ValidateMatchOftheDayAfricaSportsPage()
});
When("user click on Match of the day africa latest episode play button", () => {
    Just4UBBcNews.ClickonMatchOftheDayAfricalatestEpisodePlayButton()
});
Then("validate Match of the day africa latest episode audio player is displayed", () => {
    Just4UBBcNews.ValidateMatchOftheDayAfricaLatestEpisodAudioPlayer()
});
When("user click on Match of the day africa latest episode audio close player button then validate audio player is closed", () => {
    Just4UBBcNews.clickOnMatchOftheDayAfricaLatestEpisodAudioCloseButton()
});
When("user click on BBC Sports Updates sports", () => {
    Just4UBBcNews.clickOnBbcSportsUpdate()
});
Then("validate BBC Sports Updates text,date and msg in landing page", () => {
    Just4UBBcNews.validataBbcSportsUpdatePage()    
}) 
When("user click on BBC Sports Updates latest episode play button", () => {
    Just4UBBcNews.ClickonBbcSportsUpdatelatestEpisodePlayButton()
});
Then("validate BBC Sports Updates latest episode audio player is displayed", () => {
    Just4UBBcNews.ValidateBbcSportsUpdateLatestEpisodAudioPlayer()
});
When("user click on BBC Sports Updates latest episode audio close player button then validate audio player is closed", () => {
    Just4UBBcNews.clickOnBbcSportsUpdateLatestEpisodAudioCloseButton()
});
When("user click on BBC Premier League Bulletin sports", () => {
    Just4UBBcNews.clickOnBBCpremierLeagueBulletienSports()
});   
Then("validate BBC Premier League Bulletin text,date and msg in landing page", () => {
    Just4UBBcNews.validateBBCpremierLeagueBulletien()
});
When("user click on BBC Premier League Bulletin latest episode play button", () => {
    Just4UBBcNews.ClickonBBCpremierLeagueBulletienlatestEpisodePlayButton()
});
Then("validate BBC Premier League Bulletin latest episode audio player is displayed", () => {
    Just4UBBcNews.ValidateBBCpremierLeagueBulletienLatestEpisodAudioPlayer()
});
When("user click on BBC Premier League Bulletin latest episode audio close player button then validate audio player is closed", () => {
    Just4UBBcNews.clickOnBBCpremierLeagueBulletienLatestEpisodAudioCloseButton()
});
When("user click on BBC Premier League Update Wed sports", () => {
Just4UBBcNews.clickOnBBCPremierleagueupdatewedSports()
});
Then("validate BBC Premier League Update Wed text,date and msg in landing page", () => {
    Just4UBBcNews.ValidateBBCPremierleagueupdatewed()
});
When("user click on BBC Premier League Update Wed latest episode play button", () => {
    Just4UBBcNews.ClickonBBCPremierleagueupdatewedlatestEpisodePlayButton()
});
Then("validate BBC Premier League Update Wed latest episode audio player is displayed", () =>{
    Just4UBBcNews.ValidateBBCPremierleagueupdatewedLatestEpisodAudioPlayer()
});
When("user click on BBC Premier League Update Wed latest episode audio close player button then validate audio player is closed", () => {
    Just4UBBcNews.clickOnBBCPremierleagueupdatewedLatestEpisodAudioCloseButton()
});
When("user click on The World In 2 Minutes news", () => {
Just4UBBcNews.clickOnTheWorldIn2MinutesNews()
});
Then("validate The World In 2 Minutes text,date and msg in landing page", () => {
    Just4UBBcNews.ValidateTheWorldIn2Minutespage()
})
When("user click on The World In 2 Minutes latest episode play button", () => {
    Just4UBBcNews.ClickonTheWorldIn2MinuteslatestEpisodePlayButton()
})
Then("validate The World In 2 Minutes latest episode audio player is displayed", () => {
    Just4UBBcNews.ValidateTheWorldIn2MinutesLatestEpisodAudioPlayer()
})
When("user click on The World In 2 Minutes latest episode audio close player button then validate audio player is closed", () => {
    Just4UBBcNews.clickOnTheWorldIn2MinutesLatestEpisodAudioCloseButton()
})