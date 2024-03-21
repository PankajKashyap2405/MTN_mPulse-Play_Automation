Feature: MTN mPulseHomepage validation
    
    Background: 
         Given Navigate to mPulse Preprod Application User Login URL
         Given Users login to mpulse Application with User Account

    Scenario: mPulse Homepage Validation
             Then Validate MTN logo
             Then Validate shop,play,business,offers links in header 
             Then Validate Search bar in header
             When user enters texxt in search bar 
             When user clicks on search results
             Then Validate Buy Bundle page is displayed 
             When user clicks on MTN logo
             Then Validate student dashboard is displayed 
             Then Validate Student Dashboard profilepic
             Then Validate Profile name,mobile number 
             Then Validate Traiff plan is MTN Hynetflix
             Then Validate Data and Airtime labels in dashboard
             Then Validate Buybundle,Recharge and edit profile butons in dashboard
             Then Validate Signup for Emails in Footer section 
             Then Validate Footer links under shop category
             Then Validate footer links under Business solution
             Then Validate Footer links under Legal 
             Then Validate Footer links under Help
             Then Validate Footer links under MTN Nigeria 
             Then Validate copyright text in footer section  


             
         
