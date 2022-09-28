require("dotenv").config();

const API_KEY = process.env.API_KEY;

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(API_KEY);

const message = {
  //for single name
  //   to: "kushalgupta20000@gmail.com",

  // for multiple name
  to: ["kushalgupta20000@gmail.com", "princekumar20000@gmail.com"],

  //   send only via email without name
  //   from: "pkprasad998@gmail.com",

  //for using name
  from: {
    name: "Brownion devil",
    email: "pkprasad998@gmail.com",
  },

  subject: "Gmail Tesing",
  text: "Kripya is mail ko ignore na kre",
  html: "<h1>Kripya is mail ko ignore na kre</h1>",
};

sgMail
  .send(message)
  .then((response) => console.log("Email sent sucessfully"))
  .catch((error) => console.log(error.message));

/*
"npm init"
provide the data whatever it need
"npm i" 
create a account in sendgrid and go to api mail and create a api key 
npm install --save @sendgrid/mail  
create a file app.js and write code
create a file ".gitignore"

type the folling comand in ".gitignore"
node_modules
.env

create a file ".env"
type api key in it

"npm install dotenv --save-dev"

for sendig mail type "node app.js"

just because security reasons we put api key in .env file
just create ".env" file and inside folder type 'API_KEY = "type your key here"'

*/
