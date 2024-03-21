Feature: Manage active subscriptions

    Background:
        Given Navigate to Application URL

    Scenario: Manage user active subscriptions
        When Users login to Application with email
        When User clicks on your account
        When User clicks on manage profile
        When User clicks on manage subscriptions
        When User clicks on the All button
        Then User validates that Subscription not found
