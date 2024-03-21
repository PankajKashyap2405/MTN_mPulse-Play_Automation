Feature:Forgot password

Background:
        Given Navigate to Application URL

Scenario:Login page validation  
     When user click on register link and navigate to login page
     Then validate sign in with facebook and google and login with mobile number
     When click on forgot password
     When click on enter email and entering the email and click on send email
       