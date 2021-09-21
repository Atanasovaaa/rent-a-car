# Rent a car React App

This application provide functionality for browsing, adding, updating, deleting vehicles and customers in the car fleet and managing the rentals for specific customers.

## Available Scripts

In the project directory, you can run:

### `npm run start:json-server`

Runs the JSON server. Open [http://localhost:3000]

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Registration

The registration functionality creates only customers with no CRUD operations except Delete rent.

## Login

The App have two login forms. One for `Customers` and one for `Admins`.
If you want to log as a customer you can use some email from the db.json file and password: `123456`.
For easiest way you can use `customer@customer.com` and password: `123456`

There is only one admin. You can log in with `admin@admin.com` and password: `123456`

## CRUD

`Vehicles` and `Customers` have CRUD operations.
