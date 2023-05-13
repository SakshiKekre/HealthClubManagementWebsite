# team-project-logic-legion

## Team Members
1. Naga Bathula(016734484)
2. Ujwala Mote(016711396)
3. Sakshi Kekre(015970500)
4. Chinmayi Sunku(011672851)

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
[.env](https://github.com/gopinathsjsu/team-project-logic-legion/blob/main/frontend/.env) : add the backend Endpoint - (http://localhost:8080/healthclub)
- [application.properties](https://github.com/gopinathsjsu/team-project-logic-legion/blob/main/src/main/resources/application.properties) : add mongodb uri and database name

## Summary of the Contributions
1. Naga (Scrum Master) - WireFrames, architecture, frontend
2. Sakshi - UML class diagrams, architecture, frontend
3. Ujwala - Database connectivity and design, architecture, backend
4. Chinmayi - Database design, architecture backend, AWS deployment

## Tech Stack
- REACT
- NODEJS
- Java
- Springboot
- MongoDB - atlas
- AWS

## Feature set

### Users for our application
Employee
Members
Non - members

### Homepage
Displays the homepage with options to either login as user or admin, or just view the classes as non user.
Displays user login page upon clicking user login button.
Displays admin login upon clicking admin login button.

### User login
- User can Search and Enroll in a class
- Add and Track his activities
- See Class Schedule
- View Profile Details

### Admin login
- Admin can add add user, check-in and check-out the users.
- Admin can also check the user analytics.

## XP Core Values Maintained
Communication: To make sure that everyone was aware of the project's requirements, deadlines, and progress, communication was essential throughout. Calls, group chat, and scrums thrice a week(Monday, wednesday and Friday) were how we kept in touch and engaged with one another. Each member of the team made a conscious effort to communicate and keep tabs on the situation.

Courage: From the first meeting, a space was created to allow for open conversations. We utilized the resources and abilities that we all possessed to the fullest extent while also continuously developing each of our skill sets. We spoke extensively about technology and architecture. While discussing the best approach, we spent time strengthening our understanding. We developed a bond where, each person was free to propose the finest ideas that would be useful.

## Links
- [Link to your team's GitHub Repo](https://github.com/orgs/gopinathsjsu/repositories#:~:text=New%20repository-,team%2Dproject%2Dlogic%2Dlegion,-Private)
- [Link to your team's Project Journal](https://github.com/gopinathsjsu/team-project-logic-legion/tree/d804512a8261d2e2661111258ba10ffa78082299/journals)
- [Link to your team's Google Sprint Task Sheet](https://docs.google.com/spreadsheets/d/1Zfyc6sH8DOkpihwRDR8lI0Yy3aAtoVIyzdvgTdSw42M/edit?usp=sharing)
- [Demo URL](http://llhealthclub.placeholders.online/)
- [Wireframe mockups](https://github.com/gopinathsjsu/team-project-logic-legion/edit/main/README.md#:~:text=Chinmayi-,LL_Healthclub_Mockups,-.pdf)

## Documentation

1. Usecase Diagram:
![WhatsApp Image 2023-05-13 at 9 38 37 AM](https://github.com/gopinathsjsu/team-project-logic-legion/assets/112213523/595c2edc-b39b-49ed-b27d-dbc131749540)

2. Architecture Diagram:
![WhatsApp Image 2023-05-12 at 10 55 33 PM](https://github.com/gopinathsjsu/team-project-logic-legion/assets/112213523/0d348f80-604c-4cc5-8ef1-ff07cdf5a122)

3. Database Diagram:

![202_DB_model drawio](https://github.com/gopinathsjsu/team-project-logic-legion/assets/112213523/293ffa02-4770-4ba1-b63b-fdf18d682258)

4. Component Diagram:
![WhatsApp Image 2023-05-13 at 2 25 43 AM](https://github.com/gopinathsjsu/team-project-logic-legion/assets/112213523/3c7ca5c4-ec93-49f8-8082-beb5ce0febcd)

5.UI Mockups: [Click Here](https://github.com/gopinathsjsu/team-project-logic-legion/blob/d804512a8261d2e2661111258ba10ffa78082299/journals/LL_Healthclub_Mockups.pdf)


## AWS Deployment Resources

1. EC2
![WhatsApp Image 2023-05-12 at 11 34 33 PM](https://github.com/gopinathsjsu/team-project-logic-legion/assets/112213523/9830020e-6c7d-4e08-ac45-61e1f043b4ab)

2. Autoscaling
![WhatsApp Image 2023-05-12 at 11 35 15 PM](https://github.com/gopinathsjsu/team-project-logic-legion/assets/112213523/71d8a1ac-2966-4108-9aaf-bafcde4f2761)

3. ELB
![WhatsApp Image 2023-05-12 at 11 32 28 PM](https://github.com/gopinathsjsu/team-project-logic-legion/assets/112213523/29ff7585-15ad-4f55-8128-711768a30f70)

4. Route53
![WhatsApp Image 2023-05-12 at 11 31 32 PM](https://github.com/gopinathsjsu/team-project-logic-legion/assets/112213523/f634ecf9-6f79-4d1a-82ed-d55c5e309a60)
