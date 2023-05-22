# Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.

Users can view the images on the home page. If a user would like to view a larger version of the image, they can select on the image to open a modal with details about the photo and user who published it.

In this modal, a user will also be served with additional photos that are similar to the one selected.

Users can also toggle the types of images to browse by selecting one of the topics found in the navigation bar at the top of the page.

If a user likes a photo, they can favourite it by clicking on the heart icon. If a photo is favourited, the heart icon on the top navigation bar will display a yellow circle in the top right of the icon. 

## Screenshots

Home page of application with all images visible.
!["Home page of application with all images visible."](https://github.com/adkmcphee/photolabs/blob/main/docs/photolabs-homepage.png)

A good boy being showin in modal view.
!["A good boy being showin in modal view."](https://github.com/adkmcphee/photolabs/blob/main/docs/photolabs-modalView.png)

Page showing only travel-related images.
!["Page showing only travel-related images."](https://github.com/adkmcphee/photolabs/blob/main/docs/photolabs-travel-page.png)

## Setup
To set up this project, please follow the below steps:

Clone this repository to your local machine.

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

This application uses the following dependencies:

Front-end
* React
* SASS
* React-dom
* React-scripts
* Web-vitals

Back-end
* Body-parser
* Cors
* Dotenv
* Express
* Helmet
* PG
* Socket.io
* Ws


Please refer to the frontend- and backend-specific READMEs to assist further with setup. 

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
