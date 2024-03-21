Feature: Manage Subscriptions Validation

    Background:
        Given Navigate to Application URL

    Scenario: Manage Subscriptions
        When Users login to Application with email
        When User clicks on your account
        When User clicks on manage profile
        When User clicks on manage subscriptions
        When User clicks on the All button
        Then User validates that Subscription not found
        When User clicks on manage number
        Then Validate that no number has been added for a newly registered User
        When User clicks on Add new number
        When User types name
        When User types Mobile number
        When User types OTP
        When User clicks on submit button
        When User clicks Manage Subscriptions
        Then Validate new user was successfully added
