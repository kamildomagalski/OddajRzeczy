# OddajRzeczy
> If you have some unnecesary things you, can help some people in need like single mothers or homeless just in a few clicks using this app.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)
<hr>

## General info

This is a PortfolioLab project of Coders Lab's bootcamp course called "REACT Web Developer". <br>
The idea was to follow guidelines from imaginary investor, and fulfill all sprint backlog tasks in a given time. <br>
The idea, graphic design and assets was given by CodersLab. <br>
All the logic as well as tech stack, RWD layout is my own idea. <br>
I have also expand functionality by adding some extra validation conditions, small animations and minor changes in website appearance.
<hr>

## Technologies
* React - version 16.3
* Create React App
* Firebase - version 7.19
* React Router - version 5.2
* Sass - version 4.14
* React Datepicker 3.1.3
* React Scroll 1.8.1
* Date-fns 2.16.1
<hr>

## Setup
###`npm install`
 To start you have to install locally all packages using npm.
### Create own database 
Go to the [firebase](https://firebase.google.com/docs/database/web/start?hl=en)
to get your web app's Firebase configuration. Then paste it to .env file in your root folder.
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
<hr>

## How to use it?
1. On the Landingpage we can experience some basic information about the idea. 
2. At the bottom of the page we can see a contact form with proper validation. I used CodersLab API to send the message and simulate real-life connection with serwer.
3. A newcomer can sign up in sign-up section. <b>Email adress can be made-up.</b> It uses Firebase Authentication based on email adress.<br>
It contains buid-in as well as my own-ruled validation that prevent from sending request untill proper data are fill in. 
4. Users with accounts can log in and enter authorization route. Both build-in and my own-ruled validation is used here as well. 
5. After log in user can fill 5 step form that uses React Context to store data locally. Each step is validated before entering next step. 
6. After summary, all data is stored at user account using Firebase Realtime Database.
<hr>

## Features
List of features ready and TODOs for future development
* Fully RWD both desktop and mobile
* Create personal account and login using Firebase Authentication
* Contact form with validation and API

To-do list:
* Password change and pasword reminder
* Past donations preview
* Admin panel
* Multi language switch usin Redux
<hr>

## Status
Project is: _in progress_, but basic funcionality is assured.
<hr>

## Contact
Created by [@Kamil Domagalski](kdbrasi360@gmail.com) - feel free to contact me! 
