What does this app do:

This crud app displays live updates using Create, Post, Put and Delete operations into a react frontend. From startup there is one data set displayed in the get section. Logs are created and stored after each request in the log section

How to use the app:

Create by: entering name and email into post section.

Delete by: entering the id of the post seen in the Get section

Put by: entering the id of the post and changing the name and email information seen in the get section

Get by: Watching Create,Delete,Put operations come into the get section.

Installation Steps:

Step 1. npm install - installs dependencies

Step 2. npm run build - Webpack builds with babel to convert react to standard javascript

Step 3. npm run nodemon - runs a updated server on node - watches for updates on crud operations

Step 4. Go to http://localhost:3000 (make sure nothing else is running on port 3000)

Extra info:

To reset the application just refresh nodemon. The data doesn't persit to a database it is stored inside an array.