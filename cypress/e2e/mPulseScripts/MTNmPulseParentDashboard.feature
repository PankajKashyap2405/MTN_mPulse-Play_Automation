Feature: MTN mPulseParentDashboard validation
    
    Background: 
         Given Navigate to mPulse Preprod Application User Login URL
         Given Users login to mpulse Application with User Account


     Scenario: mPulse parent dashboard Validation
               Then Validate Parent dashboard is displayed 
               Then validate components in dashboard Name,number,Data,Airtime,tarrif,account,buybundle,recharge,editprofile
               When user clicks on edit profile page 
               Then Validate Edit profile page is dispalyed 
               Then Validate edit profile page components
               When parent updated his first name
               Then validate firstname is updated
               Then Validate the firstname is updated in dashboard
               When parent clicks on buybundle page 
               Then validate buy bundle page is dsiplayed 
               Then navigate back to home page and click on recharge button 
               Then validate Airtime rechrage page is displayed 
               Then Navigae back to homepage