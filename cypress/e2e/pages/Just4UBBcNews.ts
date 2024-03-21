import {Basepage} from "../../support/basepage";
//import testdata from "../../fixtures/PlayHome.json";
import testdata from "../../fixtures/Just4UBBC.json";
export class Just4UBBcNews{
    //Locators
    public Just4Utext:string= "div[id='content'] div:nth-child(3) div:nth-child(1) div:nth-child(1) h5:nth-child(1)" 
    public liveTheStory:string= "#selection-for-you-slider2 > div.owl-stage-outer > div > div:nth-child(29) > a > div.play-category-title-box > span"
    public BBCLivethestory:string= ".mt-2.podcast-heading-text-title"
    public BBcPodcast:string= "#block-selfservice-content > div > div > div > div > div > div > div:nth-child(2) > h5"
    public BBCsports:string= "#block-selfservice-content > div > div > div > div > div > div > div:nth-child(4) > h5"
    public BBcNewsMinutes:string= "#block-selfservice-content > div > div > div > div > div > div > div:nth-child(6) > h5"
    public TheComb:string= "#block-selfservice-content > div > div > div > div > div > div > div:nth-child(3) > div > a:nth-child(1) > div > div.play-podcast-title-box > p"
    public AfricaDaily:string= "#block-selfservice-content > div > div > div > div > div > div > div:nth-child(3) > div > a:nth-child(2) > div > div.play-podcast-title-box > p"
    public FocusonAfrica:string= "div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(3) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)"
    public matchoftheDayAfrica:string= "div:nth-child(5) div:nth-child(1) a:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)"
    public BBCSportsUpdates:string= "div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)"
    public BBCPremierLeagueBulletin:string= "div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > a:nth-child(3) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)"
    public BBCPremierLeagueUpdate:string= "div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > a:nth-child(4) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)"
    public Theworldin2minutes:string= "div:nth-child(7) div:nth-child(1) a:nth-child(1) div:nth-child(1) div:nth-child(2) p:nth-child(1)"
    public Text:string= "h6[class='bbc-minute-heading-text']"
    public Date:string= ".bbc-minute-date-text-text.text-muted.mb-2.p-0"
    public worldservice:string= "p[class='bbc-minute-date-text p-0'] span"
    public LatestEpisodeButton:string= ".last-episode-btn"
    public BBCMinuteText:string= ".bbc-minute-descp-text"
    public pausebutton:string="#pause > a"
    public episodeTitle:string= "#title"
    public skipForward:string="#skipsecforward"
    public audioCloseButton:string="#close-player-content"
    //Action methods
    ValidateJust4UText(){
        expect(Basepage.elementVisibleContainsText(this.Just4Utext,testdata.Just4U.BBC.Just4U)).to.be.ok
        }
    ValidateBBClivethestoryWorld(){
        expect(Basepage.elementVisibleContainsText(this.liveTheStory,testdata.Just4U.BBC.BBCLiveTheStory)).to.be.ok
    }   
    ClickonBBClivethestoryworld(){
        cy.get(this.liveTheStory).click({force:true})
    }
    ValidataLiveTheStoryPage() {
       expect(Basepage.elementVisibleContainsText(this.BBCLivethestory,testdata.Just4U.BBC.BBCLiveTheStory)).to.be.ok
    }
    ValidateBBCServices() {
        expect(Basepage.elementVisibleContainsText(this.BBcPodcast,testdata.Just4U.BBC.BBCpodcast)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCsports,testdata.Just4U.BBC.BBCsports)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBcNewsMinutes,testdata.Just4U.BBC.BBCnewsminutes)).to.be.ok
    }
    validateBBCPodcastservices(){
        expect(Basepage.elementVisibleContainsText(this.TheComb,testdata.Just4U.BBC.theComb)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.AfricaDaily,testdata.Just4U.BBC.africaDaily)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.FocusonAfrica,testdata.Just4U.BBC.focusonAfrica)).to.be.ok
    }
    ValidateBBCsports(){
        expect(Basepage.elementVisibleContainsText(this.matchoftheDayAfrica,testdata.Just4U.BBC.BBCMatchOfTheDay)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCSportsUpdates,testdata.Just4U.BBC.BBCSportsUpdate)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCPremierLeagueBulletin,testdata.Just4U.BBC.BBCPremierLeaguebulletien)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCPremierLeagueUpdate,testdata.Just4U.BBC.BBCPremierLeagueUpdate)).to.be.ok
    }
    validateBBCNewsInMinutes(){
        expect(Basepage.elementVisibleContainsText(this.Theworldin2minutes,testdata.Just4U.BBC.TheWorldIn2Minutes)).to.be.ok
    }
    clickOnCombPodcast(){
        cy.get(this.TheComb).click({force:true})
    }
    validateTheCombPodcastPage(){       
        expect(Basepage.elementVisibleContainsText(this.Text,testdata.Just4U.BBC.TheCombtext)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Date,testdata.Just4U.BBC.TheCombdateandtime)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.worldservice,testdata.Just4U.BBC.BBCworldservice)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCMinuteText,testdata.Just4U.BBC.BBCMinuteText)).to.be.ok
    }
    ClickonCombLatestEpisodePlayButton(){
        cy.get(this.LatestEpisodeButton).click({force:true})
        cy.wait(5000)
    }
    ValidateCombLatestEpisodAudioPlayer(){
        expect(Basepage.elementVisibleContainsText(this.episodeTitle,testdata.Just4U.BBC.EpisodeTittle)).to.be.ok
        cy.get(this.skipForward).click()  
        cy.wait(5000)
    }
    clickOnCombLatestEpisodAudioCloseButton(){
        cy.get(this.audioCloseButton).click()
        cy.wait(5000)
        cy.go('back')
       
    }      
    clickonAfricaDailyPodcast(){
        cy.get(this.AfricaDaily).click({force:true})
    }
    validateAfricaDailyPage() {        
        expect(Basepage.elementVisibleContainsText(this.Text,testdata.Just4U.BBC.africaDaily)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Date,testdata.Just4U.BBC.africadailyDateandtime)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCMinuteText,testdata.Just4U.BBC.BBCminuteTextafricadaily)).to.be.ok   
    }
    ClickonAfricaDailylatestEpisodePlayButton(){   
        cy.get(this.LatestEpisodeButton).click({force:true})
        cy.wait(5000)
    }
    ValidateAfricaDailyLatestEpisodAudioPlayer() {
        expect(Basepage.elementVisibleContainsText(this.episodeTitle,testdata.Just4U.BBC.AfricaDailyEpisodeTitle)).to.be.ok
        cy.get(this.skipForward).click()  
        cy.wait(5000)

    }       
    clickOnAfricaDailyLatestEpisodAudioCloseButton(){
        cy.get(this.audioCloseButton).click()
        cy.wait(5000)
        cy.go('back')       
    }
    
    clickonFocusOnAfricaPodcast(){
        cy.get(this.FocusonAfrica).click({force:true})
    }
    validateFocusOnAfricaPodcastPage(){            
        expect(Basepage.elementVisibleContainsText(this.Text,testdata.Just4U.BBC.focusonAfrica)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Date,testdata.Just4U.BBC.FocuseOnAfricaDateandTime)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCMinuteText,testdata.Just4U.BBC.BBCminutestextFocusOnafrica)).to.be.ok
    }
    ClickonFocusOnAfricalatestEpisodePlayButton(){   
        cy.get(this.LatestEpisodeButton).click({force:true})
        cy.wait(5000)
    }
    ValidateFocusOnAfricaLatestEpisodAudioPlayer() {
        expect(Basepage.elementVisibleContainsText(this.episodeTitle,testdata.Just4U.BBC.focusOnAfricaEpisodeTitle)).to.be.ok
        cy.get(this.skipForward).click()  
        cy.wait(5000)
    
    }       
    clickOnFocusOnAfricaLatestEpisodAudioCloseButton(){
        cy.get(this.audioCloseButton).click()
        cy.wait(5000)
        cy.go('back')       
    }
            
    clickOnMatchOftheDayAfricaSports(){
        cy.get(this.matchoftheDayAfrica).click({force:true})
    }
    ValidateMatchOftheDayAfricaSportsPage(){
        expect(Basepage.elementVisibleContainsText(this.Text,testdata.Just4U.BBC.BBCMatchOfTheDay)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Date,testdata.Just4U.BBC.MatchofTheDaydateandtime)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCMinuteText,testdata.Just4U.BBC.Matchofthedayminutes)).to.be.ok
    }
    ClickonMatchOftheDayAfricalatestEpisodePlayButton(){   
        cy.get(this.LatestEpisodeButton).click({force:true})
        cy.wait(5000)
    }
    ValidateMatchOftheDayAfricaLatestEpisodAudioPlayer() {
        expect(Basepage.elementVisibleContainsText(this.episodeTitle,testdata.Just4U.BBC.MatchOfTheDayAfricaEpisodeTitle)).to.be.ok
        cy.get(this.skipForward).click()  
        cy.wait(5000)
    
    }       
    clickOnMatchOftheDayAfricaLatestEpisodAudioCloseButton(){
        cy.get(this.audioCloseButton).click()
        cy.wait(5000)
        cy.go('back')       
    }
    clickOnBbcSportsUpdate(){
        cy.get(this.BBCSportsUpdates).click({force:true})
    }
    validataBbcSportsUpdatePage() {            
        expect(Basepage.elementVisibleContainsText(this.Text,testdata.Just4U.BBC.BBCsportsUpdate)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Date,testdata.Just4U.BBC.BBCsportsupdateDateandTime)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCMinuteText,testdata.Just4U.BBC.BBCSportsUpdateMsg)).to.be.ok         
    }
    ClickonBbcSportsUpdatelatestEpisodePlayButton(){   
        cy.get(this.LatestEpisodeButton).click({force:true})
        cy.wait(5000)
    }
    ValidateBbcSportsUpdateLatestEpisodAudioPlayer() {
        expect(Basepage.elementVisibleContainsText(this.episodeTitle,testdata.Just4U.BBC.BBCSportsUpdateEpisodeTitle)).to.be.ok
        cy.get(this.skipForward).click()  
        cy.wait(5000)
    
    }       
    clickOnBbcSportsUpdateLatestEpisodAudioCloseButton(){
        cy.get(this.audioCloseButton).click()
        cy.wait(5000)
        cy.go('back')       
    }
    clickOnBBCpremierLeagueBulletienSports(){
        cy.get(this.BBCPremierLeagueBulletin).click({force:true})
    }
    validateBBCpremierLeagueBulletien() {
        expect(Basepage.elementVisibleContainsText(this.Text,testdata.Just4U.BBC.BBCPremierLeagueBulletien)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Date,testdata.Just4U.BBC.bbcpremierbulletienTimeandDate)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCMinuteText,testdata.Just4U.BBC.BBCpremiersportsbulletienmsg)).to.be.ok
    }
    ClickonBBCpremierLeagueBulletienlatestEpisodePlayButton(){   
        cy.get(this.LatestEpisodeButton).click({force:true})
        cy.wait(5000)
    }
    ValidateBBCpremierLeagueBulletienLatestEpisodAudioPlayer() {
        expect(Basepage.elementVisibleContainsText(this.episodeTitle,testdata.Just4U.BBC.BBCPremierLeagueBulletinEpisodeTitle)).to.be.ok
        cy.get(this.skipForward).click()  
        cy.wait(5000)
    
    }       
    clickOnBBCpremierLeagueBulletienLatestEpisodAudioCloseButton(){
        cy.get(this.audioCloseButton).click()
        cy.wait(5000)
        cy.go('back')       
    }
    clickOnBBCPremierleagueupdatewedSports(){
        cy.get(this.BBCPremierLeagueUpdate).click({force:true})
    }
    ValidateBBCPremierleagueupdatewed(){               
        expect(Basepage.elementVisibleContainsText(this.Text,testdata.Just4U.BBC.BBCpremierleagueupdate)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Date,testdata.Just4U.BBC.BBCPremierleagueupdatetime)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCMinuteText,testdata.Just4U.BBC.BBCpremierleagueupdatemsg)).to.be.ok
    }
    ClickonBBCPremierleagueupdatewedlatestEpisodePlayButton(){   
        cy.get(this.LatestEpisodeButton).click({force:true})
        cy.wait(5000)
    }
    ValidateBBCPremierleagueupdatewedLatestEpisodAudioPlayer() {
        expect(Basepage.elementVisibleContainsText(this.episodeTitle,testdata.Just4U.BBC.BBCPremierLeagueUpdateWedEpisodeTitle)).to.be.ok
        cy.get(this.skipForward).click()  
        cy.wait(5000)
    
    }       
    clickOnBBCPremierleagueupdatewedLatestEpisodAudioCloseButton(){
        cy.get(this.audioCloseButton).click()
        cy.wait(5000)
        cy.go('back')       
    }
    clickOnTheWorldIn2MinutesNews(){
        cy.get(this.Theworldin2minutes).click({force:true})
    }
    ValidateTheWorldIn2Minutespage(){
        expect(Basepage.elementVisibleContainsText(this.Text,testdata.Just4U.BBC.BBCTheworldin2minutestext)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.Date,testdata.Just4U.BBC.BBCTheworldIn2MinutesDateAndTime)).to.be.ok
        expect(Basepage.elementVisibleContainsText(this.BBCMinuteText,testdata.Just4U.BBC.BBCTheworldIn2Minutesmsg)).to.be.ok
    }
    ClickonTheWorldIn2MinuteslatestEpisodePlayButton(){   
        cy.get(this.LatestEpisodeButton).click({force:true})
        cy.wait(5000)
    }
    ValidateTheWorldIn2MinutesLatestEpisodAudioPlayer() {
        expect(Basepage.elementVisibleContainsText(this.episodeTitle,testdata.Just4U.BBC.TheWorldIn2MinutesEpisodeTitle)).to.be.ok
        cy.get(this.skipForward).click()  
        cy.wait(5000)
    
    }       
    clickOnTheWorldIn2MinutesLatestEpisodAudioCloseButton(){
        cy.get(this.audioCloseButton).click()
        cy.wait(5000)
        cy.go('back')       
    }
}
export default new Just4UBBcNews();

