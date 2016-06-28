#prospectoventa

##Installation

###1. Install Mongo
Set up the MongoDB environment
 MongoDB’s default data directory path is \data\db
 'md \data\db' or 'mkdir \data\db'
 Start MongoDB -> mongod
###2. Create table and insert data
mongo
 use prospect
 db.prospectUser.insert({"name": "name",   "lastName": "lastName",   "Address":"address", "phoneNumber": "phoneNumber"})
###3. Install dependencies
 npm install 
###4. Run
 node app.js

###Opcional
 Install a MongoDB management tool like : Robomongo