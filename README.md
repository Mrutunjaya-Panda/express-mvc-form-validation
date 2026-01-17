# Express MVC Form Validation

An Express-based Node.js application that demonstrates **server-side form validation** using the **MVC pattern**, where blog form data is validated in the controller and rendered dynamically using **EJS**.

---

## Project Overview

This project focuses on implementing validation logic for a blog creation form.  
All validations are handled on the server side inside the controller without using any external validation libraries.

---

## Features

- Express-based MVC architecture
- Server-side form validation
- Blog form validation logic in controller
- Dynamic rendering using EJS
- Error and success message handling
- Simple and clean project structure

---

## Tech Stack

- Node.js
- Express.js
- EJS (View Engine)
- HTML, CSS

---

## Actual Project Structure
```
express-mvc-form-validation/
│
├── views/
│ └── addBlog.ejs
│
├── blog.controller.js
├── index.js
├── server.js
├── upload_project.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```


---

## Validation Rules Implemented

### Blog Title
- Must not be empty
- Minimum 3 characters

### Blog Description
- Must not be empty
- Minimum 10 characters

### Image URL
- Must not be empty
- Must be a valid URL format

---

## Validation Flow

1. User submits the blog form from `addBlog.ejs`
2. Form data is sent to the `/addblog` POST route
3. `validateBlog` function inside `blog.controller.js`:
   - Validates each field
   - Collects validation errors
4. If errors exist:
   - Form is re-rendered with error messages
5. If validation succeeds:
   - Success message is displayed

---

## How to Run the Project

```bash
git clone https://github.com/Mrutunjaya-Panda/express-mvc-form-validation.git
cd express-mvc-form-validation
npm install
npm start
2. Open in browser::
 http://localhost:3000
```

Learning Outcomes
```
Understanding MVC flow in Express

Writing manual server-side validation logic

Handling form errors without external libraries

Rendering dynamic validation feedback using EJS

Structuring small Express applications correctly
```

Author

Mrutunjaya Panda
