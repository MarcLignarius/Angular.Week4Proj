# Epicodus Javascript Week 3 and 4 Individual Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Description

This is an attempt to recreate the website https://pc-pdx.com/show-guide/ which lists local shows in the Portland area.

The website should be deployed at: https://pdxshowguide.firebaseapp.com/ however it seems to be displaying a generic hosting setup complete page. I haven't figured out a solution yet.

## Designing the application

Since there was a lot of planning and not a whole lot of coding at the early stages of this project, I tracked my thought process about building this application in the Google Doc below instead of making commits:

https://docs.google.com/document/d/12a0YBeVxg2IqQtrpJ0FzFHN0KIhpG7K0PeA0x6iBJho/edit?usp=sharing

## Features

_Live:_

* Displays a list of shows (permission error that needs fixing)
* List of shows can be filtered by category.
* Each show can be edited and changes saved.

_To be added:_

* User can add a show.
* Separate the edit form to a new route.

## Installation and Setup

_Cloning and installing the application_

* If you don't have it installed, download and install Node.js 12.3.1
* `$ git clone https://github.com/MarcLignarius/Angular.Week3Proj.git` This will clone the repository to your local machine.
* `$ npm install` This will allow you to have access to the CLI (command line interface) for webpack.

_Setting up and populating the database_

* Navigate to the _app_ folder in the directory and `$touch api-keys.ts`
* Sign in to or create your Firebase account at https://firebase.google.com/.
* Click on _Go To Console_ at the top right.
* Click _+ New Project_.
* Fill in the required fields then click _Create Project_.
* Click on _web_ under _Get started by adding Firebase to your app_.
* Fill in the required fields then click _Register app_.
* Copy the information located under _Your web app's Firebase configuration_. It should look something like this:

````
var firebaseConfig = {  
    apiKey: "xxx",  
    authDomain: "xxx",  
    databaseURL: "xxx",  
    projectId: "xxx",  
    storageBucket: "xxx",  
    messagingSenderId: "xxx",  
    appId: "xxx"  
  };
  ````
* Paste this information in the _src/app/api-keys.ts_ file you created.

_Launching the application_

* `$ ng serve --open` for a dev server. The app will open and automatically reload if you change any of the source files.
