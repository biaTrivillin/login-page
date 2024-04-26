## 🌱 GREEN HAVEN - LOGIN PAGE 🌱

>This project concerns the registration system of Green Haven, a platform specialized in plant sales. The project is fully functional, featuring both a pleasant design and a database to store user information.

## Preview
<div align="center">
  <img align="center" src="src/imgs/preview-oclock.gif" width="700px">
</div> <br>

## Stacks used in the project
<div style="display: inline_block"><br>
  <img align="center" alt="bia-js" height="40" width="50" src="https://upload.vectorlogo.zone/logos/getbootstrap/images/987f8f6c-263a-47b1-a85d-853cfca215d9.svg">
  <img>
  <img align="center" alt="bia-js" height="40" src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg">
  <img>
  <img align="center" alt="bia-js" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img>
  <img align="center" alt="bia-js" height="40" width="50" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg">
  <img>
  <img align="center" width="40" height="40" src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="bia-figma"/>
  <img>
  <img align="center" width="40" height="40" src="https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg" alt="bia-figma"/>
  <img>
  <img align="center" width="40" height="40" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="bia-figma"/>
  <img>
  <img align="center" height="50" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="bia-figma"/>
</div>
<br>

## Features and Details

### ⚛️ ReactJS
The project was created with **ReactJS**, streamlining the development process and ensuring a more organized and dynamic code.<br><br>

### ⚛️ TypeScript

### 🖌️ Bootstrap 
Streamlined development, enabling rapid styling adjustments through utility classes, resulting in more efficient and flexible code.<br><br>

### ✏️ ESlint 
ESLint was used to maintain code standardization and organization.<br><br>

### 🐬MySQL
The database was created using MySQL to securely store all user information.<br><br>

### 📂 Express API
To connect the application to the database, a RESTful API was developed using JavaScript and Express.<br><br>

### ✅ Data Registration Validation
User data is validated through regex and other means to ensure they are valid information. Only when all data is valid is registration allowed, and this data is sent to the database.<br><br>

### ⚠️ Validation Error Messages
Implementation of validation error messages, which are displayed whenever the user attempts to submit invalid or incomplete information.<br><br>

### 👁️ Password visibility
Password visibility option, enhancing the usability of the page.<br><br>

### 🔒 User Token
Creation of a token with the login, preventing access by users not logged into the session.<br>
The token is stored in localStorage and removed upon logout. If the token is not present in localStorage, the user won't have access to the profile, even if they access their designated route.<br><br>

## Running the application 

Cloning repository and installing dependencies 
<div>

    git clone https://github.com/biaTrivillin/login-page.git

    npm i
    
</div>

Running API
<div>

    cd server 
    npm run start 

</div>

Running web page
<div>

    cd cliente 
    npm run dev
    
</div>
