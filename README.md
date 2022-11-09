# product-expiry-tracker-app

# The app prevent product westage through expiry.

~The Application takes in products after a user buys from the store, where they key in product name, description, the dates of manufacture and expiry, and show the user how long they have till their product expires.

Here is the link to the project: https://product-expiry-tracker.cyclic.app/

# Installation

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 8000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`

# How It Was Developed

Tech Used: EJS, JavaScript, CSS, MongoDB, Node, Express, Passport, Cloudinary

# Lessons Learned

# Features to be added in future

~ QR Code scanning of products
~ Notification of expiry (due) on the navbar without clicking on products to the user when expiry is a day to
