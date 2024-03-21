Feature: MTN Play Application - User Login
    
    Background: 
         Given Navigate to Paly Application URL
         Given Users login to Play Application with username

    Scenario:  Header and homepage validation
             Then validate logo is displayed
             Then Validate Search Bar is dislayed  
             When user enters partner name in search bar
             When user clicks partner name in search results 
             Then Validate partner landing page is displayed 
             When user clicked on MTN logo
             Then validate home page is displayed 
             Then validate shop,business,play,offers,exploreMtn and mpulse links displayed in header 
             When user selects the dark theme icon
             Then validate theme changed to light theme mode 
             When user selects the light theme icon 
             Then validate theme changed to dark mode
             Then validate What's New section is displayed in home page
             Then validate video,music,lifestyle,game sections are displayed in whats new section 
             Then Validate video's,Music,Lifestyle,Games sections are displayed under whats new section
             Then click on view all text in whats new section
             Then validate whats new view all section is displayed 
             When user clicks on home breadcrumb link
             Then validate Whats trending section is displayed
             Then validate video,music,lifestyle,game sections are displayed in whats Trending section 
             When user click on Whats Trending section view all button
             Then verify whats trending view all page 
             When user clicks on home breadcrumb link
             Then Validate Just4U section is displayed in homepage
             When user clicks on just4U section view all button
             Then validate just4U viewall page is displayed
             When user clicks on home breadcrumb link
             Then valiadte MySubscription section is displaying
            

        