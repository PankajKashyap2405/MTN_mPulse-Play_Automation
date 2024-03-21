Feature: MTN Application - User Login

    Background:
        Given Navigate to Application URL

    Scenario:Login to Application with invalid email and validate error
        When User login to application with invalid email and validate error message

    Scenario: Login to MTN with registered email
        When Users login to Application with email
        Then Validate User Account links
        When Users logout Application
