## General App Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It will be built using the TDD technique.
The app will have access to the Google Calendar API an OAuth2.
It will feature serverless functions (AWS) for the authorization server instead of traditional servers.
Will be compatible with the most common web browsers, and all screen sizes.
App will also function offline or in slow network conditions.

## Key Features

1. Filter Events by City

Story
-As a User, I should be able to Filter Events by City, so that I can see what is going on in the city that I am currently in or will be traveling to.

Scenario:
-Give the user hasn't searched for a city, show upcoming events from all cities. When the user opens the app.Then the user should see the list of upcoming events
-Given the user has opened the app, when they have not searched for a city, then the user should see a list of all upcoming events
-Given the user is on the main page of the app, when the user starts typing in the city search bar the user then should see a list of cities that match what they've typed.

2. Show/Hide Event Details
   Story
   -As a User, I should be able to show and hide the details of events so I can choose which events to get more information on based on what I have interest in

Scenarios:
-Given the user has selected a city browse it's events. When the user receives that list of events from the city then all the event details should be hidden by default.
-Given the user decides on an event they are interested in, when the user selects that event element, then it should expand and give details on the event.
-Given the user has looked over the information and is done looking at it, when the user clicks on the event element again, the the element should collapse and hide all the details.

3. Specify Number of Events
   Story
   -As a User, I should be able to specify the number of events so that I can have control of how many events I see.

Scenarios:
-Given the user has just opened the app, when the default list is displayed, then the number of events will be limited to the default number set by the app.
-Given the user user would like to see a different amount of events, when they choose how many events they would like displayed then change the number of events from default to what the user had selected.

4. Use the App When Offline
   Story
   -As a User, I should be able to use the app while offline so that I can access all of the information for the event no matter where I am.

Scenarios:
-Given the user is in a rural area without internet connection, when they would like to access information on the event(s) they are interested in, then display the cached data for the user but inform them that they are offline.

5. Add an App Shortcut to the Home Screen
   Story
   -As a User, I should be able to add a shortcut to the app on my home screen so that I can quickly access the app and the information that I need.

Scenarios:
-Given the user would like to have quick access to the app, when they are on their homepage allow them to add a shortcut to the app, then they can quickly and efficiently access the information they need.

6. Display Charts Visualizing Event Details
   Story
   -As a User, I should be able to see charts displaying event details so that I have a better visualization of events in the cities or other important information.

Scenarios:
-Given the user has selected multiple cities, when they want to compare the amount of events, then they should be displayed a chart representing the cities and the amount of events per city.

## Serverless Functions

This app is going to utilize serverless functions by providing the user real-time data updates on the events they are looking for in the cities they are looking at. It will also help with alleviating the need to maintain a server and handle all the scaling needed as traffic fluctuate on the app.
