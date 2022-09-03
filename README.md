# hospital_api

an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

- Date 

routes to be used in postman

https://hospitalapiani.herokuapp.com/api/v1/doctors/register
https://hospitalapiani.herokuapp.com/api/v1/doctors/login
https://hospitalapiani.herokuapp.com/api/v1/patients/register
https://hospitalapiani.herokuapp.com/api/v1/patients/ <put patient id here> /create_report
https://hospitalapiani.herokuapp.com/api/v1/patients/ <put patient id here> /all_reports .

Required libraries for local host
express
passport
passport-jwt
jsonwebtoken
mongoose
bcryptjs
