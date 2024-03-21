Feature: MTN New User Registration Validation

Background:
        Given Navigate to Application URL

Scenario: New User Registration validation

    When user clicks on Account option  
    Then Validate clicks on login,they will be re-directed to Auth0 platform
    Then Validate that User will have the option to login with Facebook 
    Then Validate that User will have the option to login with Google 
    Then Validate that User will have the option to login with Mobile Number 
    Then Validate that User will have option to login with existing user 
    Then Validate that User will have the option to register new user
    When User clicks on Register now
    Then Validate that they will be re-directed to KYC Information Autho platform 
    Then Validate that To register new user, user has to provide their Email 
    Then Validate that User has to fill the below Mandatory information, Username, Password, Confirm Password, First name and Last name
    Then Validate that user is able to select no Option
    Then Validate User is able to click on continue
    Then Validate User is able to select Software Digital Service For his or her interest
    Then Validate that User is able to click the teams and condition   
    Then Validate that Upon successful submission of details
    Then Validate If the email address is already in use, the customer shall get notified
    Then Validate that user is able to click on the back button icon  
    Then Validate that user is able to click on Rigister now 
    Then Validate that User has to fill the below Mandatory information, Email address that have not be used previously, Username, Password, Confirm Password, First name and Last name
    Then Validate that user is able to select business no Option
    Then Validate User is able to click on continue option 
    Then Validate User is able to select social Media
    Then Validate that app user click on the terms and condition 
    Then Validate that Upon successful submission of details details
    


