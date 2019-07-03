# Interactive Frontend Development Milestone Project - Single Page Application - Google Maps API

The website was designed to allow users to search for their next destination with the ability to search for specific facilities near their destination. The website offers a search bar and 3 checkboxes to help the customer narrow down what particular facilities are nearby. 
The website then generates the results in an easy to read table and gives customers the name of the place alongside a rating/amount of ratings 
to enable users to make an informed decision.

The overall aim is to have an easy to navigate website that was designed desktop first to enable users to find a location and its nearby facilities.

# UX

The UX has been designed for desktop first to make it easy for all users to navigate and access the content they want.

I have provided a number of user stories below: 

* As a user who wants to travel to a specific location I want to be able to search for it

* As a user who wants to travel to a specific location I want to be able to search for nearby places to my destination

* As a user who wants to travel to a specific location I want to be able to find nearby accommodation to my next destination

* As a user who wants to travel to a specific location I want to be able to find nearby bars and restaurants to my next destination

* As a user who wants to travel to a specific location I want to be able to find nearby attractions to my next destination

* As a user who is not sure of the next destination I want to be able to start typing and let the search bar autocomplete my destination

* As a user who likes to compare facilities I want to have my results displayed in a table that shows ratings

* As a user who likes to see their destination on a map I want the nearby places to have a marker on the map

* As a user who wants to travel to a specific location I want to see the nearby places on a map in comparison to each other

* As a user who wants to travel to a specific location I want my results of the search to be displayed on a map and in a table  which references each other

* As a desktop user I want to be able to navigate the website easily so I and find the information I want with ease

* As a mobile user I want to be able to navigate the website easily so I and find the information I want with ease

* I have also included some mock-ups for the initial planning phase of the website


# Features

The navigation bar allows users to navigate the page quickly without needing to use the back button. 
The navigation bar is also a sticky nav bar that allows users to quickly navigate between the search bar and the results.
This feature is clear and users should be able to navigate around the page with ease. 

The webpage has a search bar that autocompletes to allows users to start typing a destination and gives potential matches.
The search bar also allows users to search for a location on a map.
The page also has a map that shows the location alongside markers that show users the location of the nearby facility. 
The marker also displays an information window which when clicked provides users with the name of the facility. 

the footer provides a brief description around the purpose of the website and makes mention of the google maps API.


# Technologies used

* used HTML5 and CSS3 JavaScript and JQuery

* bootstrap - https://getbootstrap.com/docs/3.3/https://getbootstrap.com/docs/3.3/
used bootstrap primarily for the grid system

* cdnjs - https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css
used this to apply the hover to aspects of the website

* Google fonts - https://fonts.google.com 
used google fonts to apply fonts to the text within the website

* google maps API - https://developers.google.com/maps/documentation/
used maps API to generate map and search bar

# Testing

I completed much of my testing as I built the website up. 

I initially started with an index.html page that had the bare bones of a layout to include a header a footer and a main section
that had a few divs for the general layout of the page. I also added an unstyled sticky navbar. 

I then added a map.js file to enable to me incorporate code to allow for a search bar and a map. Once this was implemented 
I needed to allow the search bar to search for the destination which took testing though trial and error. 
I then added the functionality to allow the search bar to search for nearby locations. 
I used a console log in multiple places to assess whether the code was working. 

I did more background research as I was unable to get the markers to load, however, I could see in the console that information was being returned from my console.log. After numerous attempts, I made an index2 and a map2 file to try a different approach
and I was successful in getting the markers to load however I was unable to link the search bar.  Again this took a number of attempts of trial and error.  I continued to assess and attempt to fix the code to the point where I had 2 files, neither of which were responding
in the way I wanted. After numerous attempts, the website was placing the markers correctly upon the search. due to the long period of time, this took I sought
advice from my mentor. Following the feedback, I managed to simplify the code and build on that to then allow the specific nearby searches to be added. 

I tested the links on the navbar to ensure the location the page jumped to was correct in relation to the navbar link I did have a separate js page for the navbar however I felt this was inappropriate and I  put it into the same as my map2.js file. 

When assessing the responsiveness I found the desktop worked correctly however the smaller screens were not working as intended
and the Ipad pro screen had a margin of white page.  I incorporated a media query and amended some of my HTML using the bootstrap grid method to allow for a much more responsive website across multiple devices.

I tested this regularly as I input different locations and texts to ensure the the transition from desktop to mobile was smooth
and looked professional, I also asked my peers to see if the website had an issue when they used it. 

The intial planning phase gave me the idea of the search generating a search for all 3 facilities in one search and displaying the results in different formats. However whilst completing the project I felt this was not appropriate or user friendly.
I, therefore, changed the design to have tabs so the user can select the type of search. This allowed the user to choose a specific search
rather than be provided with information they may not want. It also allowed a bigger number of places in the search result for each location.

The CSS across the whole site has been amended on a number of occasions. This was mainly due to trial and error of assessing how the website
looked across multiple devices.
After feedback on my previous project, I have decided with a 2 color website rather than a host of colors.

When testing the final website I realized that users were able to deselect thier option which would mean there was no option selected
and the search would not run correctly. Therefore I have added code to the map2.js file to stop the user from being able to deselect any option so the user will always have one and only one checkbox selected for their search. This works because I previously anticipated the error that a user was able to select multiple boxes and when the website first
loads up there was no box selected. As I had previously anticipated these issues and addressed them it meant the additional code was an add on to the features designed
to stop the website being used incorrectly.

There is still one issue that I feel is not overly user-friendly. When the user types their destination and searches for one of the 3 nearby places it generates
results. However, if I then changed the checkbox to a different search the user can not just press enter they need to retype the destination into the search box. 

I had many trials by error attempts at getting the JavaScript code to run correctly on the majority of the of the functionality of the code.


# Deployment

The deployment was completed through Github

# Credits and media

* I have used google maps API documentation to help implement the map functionality and the search bar which has been used throughout the map2.js file
* I used w3school website for assistance with learning how to incorperate a sticky navbar
* I used google fonts to style the font on the page
* I used mockflow to make a wireframe for the initial planning and idea phase

# Acknowledgement

The inspiration for this project came from the google maps API documentaton and other travel search websites such as expedia.











