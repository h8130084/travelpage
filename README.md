# Interactive Frontend Development Milestone Project - Single Page Application - Google Maps API

The website was designed to allow users to search for thier next destination with the ability to search for specific facilities nearby 
thier destination.The website offers a search bar and 3 check boxes to help the customer narrow down what particular faciities are nearby. 
The website then generates the results in an easy to read table and gives customers the name of the place along side a rating / amount of ratings 
to enable to users to make an informed decison.

The overall aim is to have an easy to navigate website that was designed desktop first to enable users to find a location and its nearby faclities.

# UX

The UX has been designed for desktop first with the aim of making it easy for all users ot navigate and access the content they want.

I have provided a number of user stories below: 

* As a user who wants to travel to a specific location I want to be able to search for it

* As a user who wants to travel to a specific location I want to be able to search for nearby places to my destination

* As a user who wants to travel to a specific location I want to be able to find nearby accomidaiton to my next destination

* As a user who wants to travel to a specific location I want to be able to find nearby bars and restauraunts to my next destination

* As a user who wants to travel to a specific location I want to be able to find nearby attractions to my next destination

* As a user who is not sure of the next destination I want to be able to start typing and let the search bar autocomplete my destination

* As a user who likes to compare facilities I want to have my results displayed in a table that shows ratings

* As a user who likes to see thier destination on a map I want the nearby plavces to have marker on the map

* As a user who wants to travel to a specific location I want to see the nearby places on a map in comparrison to each other

* As a user who wants to travel to a specific location I want my results of the search to be displayed on a map and in a table  which refrence each other

* As a desktop user I want to be able to navigate the website easily so I and find the information I want with ease

* As a mobile user I want to be able to navigate the website easily so I and find the information I want with ease

* I have also included some mock ups for the initial planning phase of the website


# Features

The navigation bar allows users to navigate the page quickly without needing to use the back button. 
The navigation bar is also a stick nav bar which allows users to quikcly navigate between the search bar and the results.
This feature is clear and users should be able to navigate around the page with ease. 

The webpage has a search bar that autocompletes to allows users to start typiing a destination and gives potential matches.
The search bar also allows users to search a location on a map.
The page also has a map that shows the location alongside markers that show users the location of the nearby facility. 
The marker also displays an information windo which when clicked provides users with the name of the facility. 

the footer provides a  breif description around the purpose of the website and makes mention of the google maps API.


# Technologies used

* used HTML5 and CSS3 JavaScript and J Query

* bootstrap - https://getbootstrap.com/docs/3.3/https://getbootstrap.com/docs/3.3/
used bootstrap primarily for the grid system

* cdnjs - https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css
used this to apply the hover to aspects of the website

* google fonts - https://fonts.google.com 
used google fonts to apply fonts to the text within the website

* google maps API - https://developers.google.com/maps/documentation/
used maps API to generate map and searchbar

# Testing

I completed much of my testing as I built the website up. 

I intiailly started with an index.html page that had the bare bones of a layout to include a header a footer and a main section
that had a few divs for the gernal layout of the page. I also added an unstyled sticky nav bar. 

I then added a map.js file to enable to me incorperate code to allow for a searchbar and a map. Once this was impletemented 
I needed to allow the search bar to seach for the destination which took testing though trial and erros. 
I then added the functionality to allow the search bar to search for nearby locations. 
I used a console log in multiple places to  assess whther the code was working. 

I did more background research as I was unable to get the markers to load, however I could see in the console 
that informaiton was being returned from my console.log . After numerous attempts I made an index2 and a map2 file to try a differnt approach
and I was sucessful in getting the markers to load however I was unable to link the search bar.  Again this took a number 
attempts of trial and error.  I continued to assess and attemt to fix the code to the point where I had 2 files , neither of which were responding
in the way I wanted. After numerous attempts the website was placing the markers correctly upon the search. due to the long period of time this took I sought
advice from my mentor. Following the feedback I managed to simplfy the code and build on that to then allow the the specific nearby seraches to be added. 

I tested the links on the navbar to ensure the location the page jumped to was corect in relaton to the navbar link I did have a seperate js page for 
the nav bar however I felt this was inapropriate and I  put it into the same as my map2.js file. 

When assessing the responsiveness I found the desktop worked correctly however the smaller screens were not working as intended
and the Ipad pro screen had a margin of white page.  I incorperated a media query and amended some of my html using the bootstrap grid method to allow 
for a much more responsive website across multiple devices.

I tested this regularly as I input different locations and texts to ensure the the transisiton from desktop to mobile was smooth
and looked professiona, I also asked my peers to see if the website had an issue when they used it. 

The intial planning phase gave me the idea of the search generating a search for all 3 facilities in one search 
and displaying hte results in differnt format. However whilst completing the project I felt this was not appropriate or user freindly.
I therefore changed the design to have tabs so the user can select the type of search. This allowed the user to choose a specific search
rather than be provided with information they may not want. It also allowed a bigger number of places in the search result for each location.

The CSS across the whole site has been amended on a number of ocassions. This was mainly due to trial and error of assessing the how the website
looked acrsoss multiple devices.
After feedback on my previous project I havd decided with a 2 colour website rather than a host of colours.

When testing the final website I realised that users were able to deselect thier option which would mean there was no option selected
and the search would not run correctly. Therefore I have added code to the map2.js file to stop the user being able to deselect any option so the user will always have one and only one check box 
selected for thier search. This works becuase I previously anticipated the error that a user was able to select multiple boxes and when the website first
loads up there was no box selceted. As I had previosuly anticipated these issues and addressed them it meant the additonal code was an add on to the features designed
to stop the website being used incorrectly.

There is still one issue that I feel is not overly user friendly. When the user types thier destinaton and searches for one of the 3 nearby places it generates
results. However if I then changed the checkbox to a different search the user can not just press enter they need to retype the destination into the searchbox. 

I had many trial by error attmeptes at getting the JavaScript code to run correctly on the majority of the of the functionality of the code.


# Deployment

The deployment was complted through github

# Credits and media

* I have used google maps API documentation to help implement the map functionality and the search bar which has been used thouhgout the map2.js file
* I used w3school website for assistnace with learning how to incorperate a sticky nav bar
* I used google fonts to style the font on the page
* I used mockflow to make a wireframe for the intiail planning and idea phase

# Acknowledgement

The inspiration for this project came from the google maps API documentaton and other travel search websites such as expedia.











