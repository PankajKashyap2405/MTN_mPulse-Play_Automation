Feature: PlaySocialMediaLinks
    
    Background: 
         Given Navigate to Paly Application URL
         Given Users login to Play Application with username



    Scenario:Validating social media links in footer section
    Then validate the facbook quick link in footer section
    Then validate the twitter quick link in footer section
    Then validate the insta quick link in footer section
    Then validate the linkedin quick link in footer section
    Then validate the youtube quick link in footer section