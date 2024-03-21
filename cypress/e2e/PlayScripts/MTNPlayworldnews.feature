Feature: MTN play Application- World news
Background:
     Given Navigate to Paly Application URL
      Given Users login to Play Application with username

         
Scenario: Validate world news
Then validate World news under just4u section
When User click on explore channel view all button 
Then validate world news in explore channel landing page
When user click on world news channel
Then validate world news text in landing page 
Then validate Business day,This day and The leadership Partners in landing page
When user click on Business day partner,This Day and the leader ship partner banners

