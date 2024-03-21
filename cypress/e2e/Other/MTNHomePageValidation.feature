Feature:MTN Home Page Validation

Background:
        Given Navigate to Application URL

Scenario:Home page validation      
        Then validate device,data,enterprise,cloud,recharge buttons are visible on home page
        When user click on device button 
        Then validate the product listing page is displayed
        When user click on home link
        When user click on data button 
        Then validate the databundle page is displayed
        When user click on home link
        When user click on enterprise
        Then validate the enterprise service page is displayed