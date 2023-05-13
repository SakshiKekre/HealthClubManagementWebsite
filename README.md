# team-project-logic-legion

## Team Members
1. Naga Bathula
2. Ujwala Mote
3. Sakshi Kekre
4. Chinmayi Sunku

## Steps to run the application
1. Clone the repo
```
git clone https://github.com/gopinathsjsu/team-project-logic-legion.git
```
2. Go to the [frontend directory](https://github.com/gopinathsjsu/team-project-logic-legion/new/main?readme=1#:~:text=.mvn-,frontend,-src) and install node modules
```
npm install
```
3. To run the client
```
npm start
```
4. Navigate to [HealthClubApplication.java](https://github.com/gopinathsjsu/team-project-logic-legion/new/main?readme=1#:~:text=HealthClubApplication) and run the spring boot applicaiton 

### Note: 
- Make changes to these files before running the project
.env : add the backend Endpoint - (http://localhost:8080/healthclub)
- application.properties : add mongodb uri and database name

## Summary of the Contributions
1. Naga (Scrum Master) - WireFrames, architecture, frontend
2. Sakshi - UML class diagrams, architecture, frontend
3. Ujwala - Database connectivity and design, architecture, backend
4. Chinmayi - Database design, architecture backend, AWS deployment

## Tech Stack
- REACT
- NODEJS
- MongoDB - atlas
- AWS

## Feature set

### Users for our application
Employee
Members

### Homepage
Displays the homepage with options to either login as user or admin, or just view the classes as non user.
Displays user login page upon clicking user login button.
Displays admin login upon clicking admin login button.

### User login
User can enroll in a class
Track his activities

### Admin login
Admin can add a new class, add user, check-in and check-out the users.
Admin can also check the user analytics.

