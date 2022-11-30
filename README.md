## product-expiry-tracker-app

## The app prevent product westage through expiry.

The Application lets you upload products, key in product name, description, the dates of manufacture and expiry, and show the user how long they have till their product expires.

[Here](https://product-expiry-tracker.cyclic.app/) is the link to the project.

![Ptracker logo](https://github.com/rowah/product-expiry-tracker-app/blob/main/public/imgs/track.png)

## How It's Made:

**Tech used:** EJS, JavaScript, CSS, MongoDB, Node, Express, Passport, Cloudinary

The application is based on a template language EJS and so no HTML or framwork is used. All the information is retrieved from the database and rendered to the user using EJS. PTracker uses cloudinary to save uploaded product images whose urls the get saved on the DB. It main, server.js contains all the routes.

## Installation

`npm install`

---

## Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 8000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

## Run

`npm start`

## Lessons Learned

Used passport for the first time and learned how interesting it is use in JavaScript for user authentication and authorization.

Learned about how Cloudinary works

Learned about the possibility of rendering information to the DOM without using any client-side HTML thanks to the amazing EJS.

## Features to be added in future

QR Code scanning of products for automatic upload.

Notification of expiry (due) on the navbar without clicking on products to the user when expiry is a day to
