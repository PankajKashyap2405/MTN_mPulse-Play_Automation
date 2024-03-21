Feature: MTN mPulse bundlepurchase validation
    
    Background: 
         Given Navigate to mPulse Preprod Application User Login URL
         Given Users login to mpulse Application with User Account


     Scenario: mPulse bundle purchase 
     Then Validate Homepage is displayed 
     When user clicks on Buy bundle Explore button
     Then validate Buy bundle page is displayed  
     Then validate 250MB bundle is displayed in bundlepage 
     When user clicks on Buy now button 
     Then Validate buynow popup is dispalyed
     Then click on buy button
     Then validate cart page is displayed 
     When user clicks on proceed to payment
     Then validate payment page is displayed 
     When user clciks on Paywith Airtime button
     Then click on pay now button 
     Then validate invoice page is displayed and payment is success 
     Then Validate Homepage is displayed

