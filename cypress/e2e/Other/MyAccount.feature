Feature:My Account Validation

    Background:
        Given Navigate to Application URL
        And Users login to Application with email

    Scenario:My Account
        When User clicks on your account
        When User clicks on manage profile
        When User clicks on manage number
        Then Validate that no number has been added for a newly registered User
        When User clicks on Add new number
        When User types name
        When User types Mobile number
        When User types OTP
        When User clicks on submit button
        Then Validate that a user was successfully added
        When User clicks on Edit
        When User edit name of numbers added
        When User clicks on submit button 1
        When User clicks on Delete
        When User clicks Ok
        Then Validate that user details should not display again




