Feature:MTN Order history Validation

 Background:
        Given Navigate to Application URL

 Scenario:Home page validation    
        When Users login to Application with email
        When user click on account pop should be opened
        When user clcik on orders user should be navigate to all orders page
        Then validate active, delivered and cancelled orders