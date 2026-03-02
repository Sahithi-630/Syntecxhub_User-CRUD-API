# Syntecxhub_User-CRUD-API
# 👤 Syntecxhub User CRUD API

A RESTful API built using **Node.js, Express.js, and MongoDB Atlas** that performs full **CRUD (Create, Read, Update, Delete)** operations for user management.

---

## 🚀 Features

- ➕ Create a new user  
- 📄 Get all users  
- 🔍 Get a single user by ID  
- ✏️ Update user details  
- ❌ Delete a user  
- ⚠️ Custom error handling middleware  
- 🌐 MongoDB Atlas cloud integration  
- 📂 MVC architecture  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- dotenv  
- Nodemon  

---

## 📂 Project Structure
Syntecxhub_User-CRUD-API
│── config
│ └── db.js
│
│── controllers
│ └── resourceController.js
│
│── models
│ └── resourceModel.js
│
│── routes
│ └── resourceRoutes.js
│
│── middleware
│ ├── errorHandler.js
│ └── notFoundHandler.js
│
│── app.js
│── server.js
│── .env
│── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sahithi-630/Syntecxhub_User-CRUD-API.git
cd Syntecxhub_User-CRUD-API

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file in root folder
PORT=3000
MONGO_URI=your_mongodb_connection_string

4️⃣ Run the server
npm start

For development (nodemon)
npm run dev

🌐 Base URL
http://localhost:3000/api/resources


📌 API Endpoints

➕ Create User
POST /api/resources

📄 Get All Users
GET /api/resources

🔍 Get Single User
GET /api/resources/:id

✏️ Update User
PUT /api/resources/:id

❌ Delete User
DELETE /api/resources/:id

📸 API Testing Tools
- Bruno 
- Postman
- Thunder Client
- Insomnia

🔥 Highlights

- Built scalable REST API using MVC architecture
- Connected cloud database using MongoDB Atlas
- Implemented centralized error handling
- Environment-based configuration using dotenv


👩‍💻 Author

Bhumireddy Sahithi

GitHub: https://github.com/Sahithi-630
LinkedIn: https://www.linkedin.com/in/bhumireddy-sahithi-744087310/