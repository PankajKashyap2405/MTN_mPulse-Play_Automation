Feature: MTN mPulse Application - Spelling Bee Practice Test
    
    Background: 
         Given Navigate to mPulse Preprod Application User Login URL
         Given Users login to mpulse Application with User Account

    Scenario: Spelling bee practice test as a student
        When Student click's on Click here to Participate
        Then Validate spelling bee page is displayed
        Then Validate Play annually button is displayed
        When Student click's on Play Annually Button
        Then Validate Are you ready for mPulse Spelling Bee Quiz? pop up is displayed
        Then Validate Practice button is displayed
        When Student click's on Take Practice Test button
        Then Validate Practice Test Page is displayed
        When Student answer all the questions
        Then validate all the answers are submitted