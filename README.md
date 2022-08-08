# CRUD-Node-Express-Firebase
https://github.com/sarria/CRUD-Node-Express-Firebase.git
## Code interview for Company
Including .env for easy testing

## Task
Task name: User endpoints\
Duration: 1 evening

Requirements
  1.  We need to create CRUD endpoints
  2.  The entries (users) can just be saved in a noSQL database (Bonus for using Firebase Real-Time Database)
  3.  Each user should have the following data entries: 
        id, name, zip code, latitude, longitude, timezone
  4.  When creating a user, allow input for name and zip code.  
      (Fetch the latitude, longitude, and timezone - Documentation: https://openweathermap.org/current) 
  5.  When updating a user, Re-fetch the latitude, longitude, and timezone (if zip code changes)
  6.  (optional bonus) add something creative you'd like or connect to a ReactJS front-end

  API Key: 7afa46f2e91768e7eeeb9001ce40de19

## Steps
```bash
npm i
npm start
```
## Usage
GET http://localhost:8080/users \
POST http://localhost:8080/user \
GET, PUT, DELETE http://localhost:8080/user/:id 
