Feature: MTN Play Application - Account page
    
    Background: 
         Given Navigate to Paly Application URL
         Given Users login to Play Application with username

         Scenario:  Account Page validation
          When user clicks on profile dropdown
          Then click on My Account 
          Then validate my account page is displayed
          Then validate My account menu is displayed  
          Then Validate My Acoount menu sections Contact information,Interestselection&Modification,Managesubscription
          Then Validate My Profile page is displayed by default
          Then Validate My contact info page elements 
          When user click on Edit icon
          Then edit the nickname field
          Then Validate Cancel and save button are enabled 
          When user click on save button 
          Then Validate Nickname is updated 
          When user click on INterest selection & Modification
          Then Validate INterest selection section is displayed 
          Then Validate Text in Interest Section  
          Then validate intrests categories are displayed
          When user clicks on Music,Games,food category
          When user clicks on Manage Subscription
          Then Validate Manage subscription page is displayed  
          