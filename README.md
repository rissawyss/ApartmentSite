# ApartmentSite
Dynamic property management app

## Web Development by Isometric Interactive
[Bryan Castleman](https://github.com/castlemaninc "Bryan Castleman's GitHub")
|
[Nicholas Nooch](https://github.com/FlintSable "Nicholas Nooch's GitHub")
|
[Marissa Wyss](https://github.com/rissawyss "Marissa Wyss's GitHub")

## A template to sell apartment communities
* Maps, photos, and floor plans
* Contact forms to generate prospect leads
* Application forms to capture new tenant info
* Keep track of leasing
* Maintain parking permits and parking spaces
* Contractor vendor contact list
* Track and manage work orders
* History of work done

## Technologies
* Node and Express Web Server
* MySQL Database with a Sequelize ORM  
* GET and POST routes for retrieving and adding new data
* Materialize
* Passport
* Handlebars for Server-Side Templating
* Authentication

### Model View Controller (MVC) folder structure
![2017-05-20 2](https://cloud.githubusercontent.com/assets/22284225/26280625/5765e53c-3d91-11e7-8a5a-401d6a1a4be2.png)

### MODEL
Using the sequelize node module, models (tables) in the database were defined using sequelize.define('name', {attributes}, {options}) with appropriate DataTypes, Class Methods and Associations. Querying and accessing the database for CRUD (create, read, update, destroy) operations was executed via the Controller.

| Tables        | Associations              | Add'l Associations/Methods   |
| ------------- |:-------------------------:|:----------------------------:|
| User          |                           | Instance Valid Password      |
| WorkOrder     | belongsTo(models.Tenant)  | belongsTo(models.Contractor) |
| Tenant        | hasMany(models.WorkOrder) |                              |
| Contractor    | hasMany(models.WorkOrder) |                              |
| Prospect      |                           |                              |
| Applicant     |                           |                              |


### VIEW
Handlebars were implemented to dynamically generate views routed through the Controller. 
Partials, along with built-In Helpers of __each__, __if__ and __unless__ allowed specific delivery of blocks of code depending on routes.
#### WorkOrder Maintenance Form Handlebars Sample
![workorder-handlebars](https://cloud.githubusercontent.com/assets/22284225/26281121/2eb3d3cc-3da2-11e7-91df-3d25f3ddc8bb.png)

### CONTROLLER
The Controller determines the appropriate action method to handle requests from the server. A multitude of HTTP requests for the manager functionality alone were needed to create, view, edit and delete data:
* GET Contractors
![get-contractors-manager](https://cloud.githubusercontent.com/assets/22284225/26281262/ca4fe16e-3da6-11e7-8c35-2f157ed853e2.png)

* POST Prospects
![post-prospects-manager](https://cloud.githubusercontent.com/assets/22284225/26281271/3cc2a2d6-3da7-11e7-9d34-72c343de9ebc.png)

* PUT WorkOrders
![put-workorder-manager](https://cloud.githubusercontent.com/assets/22284225/26281265/de62bba4-3da6-11e7-8203-b3497326c01f.png)

### AUTHENTICATION
A registration form is delivered at the /signup path and displays a registration form which validates password by using regex. 
The Manager Login form is delivered via a modal, which authenticates user login by checking for existing username in the database (User model).
![login-signup](https://cloud.githubusercontent.com/assets/22284225/26281427/c60245e4-3daa-11e7-8be5-5e9c1704af17.png)

## DESIGN
* **Dynamic view of property and floor plans**

![floorplans](https://cloud.githubusercontent.com/assets/22284225/26281437/11275cda-3dab-11e7-8c1a-537266e8ef14.png)

* **Quick navigation to manager’s links**

![managerview](https://cloud.githubusercontent.com/assets/22284225/26281442/404c2676-3dab-11e7-814f-afa0111dfe98.png)

* **Table view of database models, and View/Edit/Delete icons**

![tableview](https://cloud.githubusercontent.com/assets/22284225/26281452/94cf6c80-3dab-11e7-89c8-c9bd03a3e27d.png)

* **Form interface for contacting and applying**

![formview](https://cloud.githubusercontent.com/assets/22284225/26281455/b849456e-3dab-11e7-8349-bbc09a12e7a1.png)

## Set up for Local Machine
'''npm install'''

''' npm run devstart '''

- visit http://localhost:8080/

- rs to restart server manually, but it should be restarting on file change locally

- or npm start

- debugging nodemon --inspect app.js



#### Copyright 2017 Isometric Interactive
![2017-04-20 2 - copy](https://cloud.githubusercontent.com/assets/22284225/26281489/6557f056-3dad-11e7-9948-0660b3654479.png)
