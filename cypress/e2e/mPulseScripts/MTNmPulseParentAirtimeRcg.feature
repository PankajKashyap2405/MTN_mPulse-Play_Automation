Feature: MTN mPulseParentAirtimrRcg validation
    
    Background: 
         Given Navigate to mPulse Preprod Application User Login URL
         Given Users login to mpulse Application with User Account


     Scenario: mPulse Parent Airtime recharge Validation
              When parent clicks on recharge button
              Then Validate Recharge page is displayed 
              Then Validate AirtimeRchrge page elements 
              When Parent selects the 200 amount 
              Then validate 200 is displayed in amount field 
              When parent click on recharge button 
              Then validate cart page is displayed 
              Then validate Airtime product is added to cart 
