Feature: PlayApplicationBanners
    
    Background: 
         Given Navigate to Paly Application URL
         Given Users login to Play Application with username


     Scenario:Validating promotional banners in homepage
               Then validate the promotional banners in home page
               When the user clicks on the promotional banner
               Then the user should navigate to respective promotional landing page 