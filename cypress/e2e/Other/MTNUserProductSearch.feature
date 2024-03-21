Feature: Search bar validation
Background:
  Given Navigate to Application URL
Scenario: Search scenario on MTN Home page
  When user clicks on the search bar and enter the product name alpha numeric
  |searchValue1|    
   |657rt|             
  Then validate error message
  When user provide the product name 4G Router 
  |searchValue2| 
  | 4G Router|
  Then validate that product get displayed
