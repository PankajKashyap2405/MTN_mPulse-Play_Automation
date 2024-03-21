Feature: PlayFooterSection
    
    Background: 
         Given Navigate to Paly Application URL
         Given Users login to Play Application with username



    Scenario:Validating footer section
        Then validate the quick links under shop in footer section
        Then validate the quick links under bussiness solution in footer section
        Then validate the quick links under legal in footer section
        Then validate the quick links under help in footer section
        Then validate the quick links under mtnnigeria in footer section
        Then Validate the mobileservices link landing the expeceted page
        Then Validate the ict link landing the expeceted page
        Then Validate the broadband link landing the expeceted page
        Then Validate the broadband1 link landing the expeceted page
        Then Validate the termsandconditions link landing the expeceted page
        Then Validate the privacypolicy link landing the expeceted page 
        Then validate the social media quick clicks in footer section
      
      