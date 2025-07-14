# 📝 Notes API – JWT Authenticated

A secure **Note Taking API** built with **Node.js, Express, MongoDB**, and **JWT Authentication**. Users can register, log in, create and retrieve personal notes securely.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- bcrypt for password hashing
- JWT for authentication
- Postman for API testing

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Vedant794/Notes-Api.git
cd note-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=8000
URI=mongodb://localhost:27017/notesAppDB
JWT_SECRET=ZoroInnovations
```

### 4. Run the server

```bash
npm start
```

> Server will start on `http://localhost:8000`

---

## 🔐 Authentication Endpoints

### ✅ Register User

- **POST** `/api/v1/auth/register`
- **Body:**
```json
{
  "name": "Vedant Kumbhare",
  "email": "vedantpersonal676@gmail.com",
  "password": "Vedant@777"
}
```

🧪 **Response**  
<img width="1095" height="829" alt="Screenshot 2025-07-14 212230" src="https://github.com/user-attachments/assets/945ca941-3724-41e1-a90b-8d1810fb4ed9" />


---

### ✅ Login User

- **POST** `/api/v1/auth/login`
- **Body:**
```json
{
  "email": "vedantpersonal676@gmail.com",
  "password": "Vedant@1234"
}
```

🧪 **Response**  
📌 Copy the `token` from the response for use in notes API.

<img width="1094" height="845" alt="Screenshot 2025-07-14 212251" src="https://github.com/user-attachments/assets/ecd0a464-3737-41ee-95fd-8a48ebd58f44" />


---

## 📝 Notes API (Protected)

### 🔐 Set Required Headers

| Key             | Value                         |
|----------------|-------------------------------|
| `Authorization` | `Bearer <your_token_here>`    |
| `Content-Type`  | `application/json`            |

---

### ➕ Create Note

- **POST** `/api/v1/notes`
- **Body:**
```json
{
  "title": "Docker",
  "content": "Docker is a containerization platform."
}
```

🧪 **Response**  
<img width="1162" height="847" alt="Screenshot 2025-07-14 212313" src="https://github.com/user-attachments/assets/5b4e2baa-73e9-4560-b7ff-c4d142a108f6" />


---

### 📥 Get Notes

- **GET** `/api/v1/notes`

🧪 **Response**  
<img width="1108" height="807" alt="Screenshot 2025-07-14 212335" src="https://github.com/user-attachments/assets/e53ca5b6-d2b9-4357-9659-c293a13a7118" />


---

## 🧪 Testing Flow Summary

1. ✅ Register at `/auth/register`
2. 🔐 Login at `/auth/login` and get JWT token
3. 📝 Use token to `POST /notes` with title & content
4. 📥 `GET /notes` to fetch user-specific notes

---

## 🗂 Folder Structure

```bash
├── Controllers/
│   └── authController.js
│   └── notesController.js
├── Cyptography
│    └── passHide.js
├── Models/
│   └── userModel.js
│   └── notesModel.js
├── Routes/
│   └── authRoutes.js
│   └── notesRoutes.js
├── Services/
│   └── authService.js
│   └── notesService.js
├── Middleware/
│   └── authMiddleware.js
├── .env
├── index.js
```

---

## 📂 Image File Mapping

| Screenshot        | Filename                             |
|------------------|--------------------------------------|
| Register User     | `register.png`                       |
| Login User        | `login.png`                          |
| Create Note       | `create-note.png`                    |
| Get Notes         | `get-notes.png`                      |

---

## 🛡️ Security Notes

- Passwords are hashed with `bcrypt`
- JWTs expire in 7 days
- Notes are user-specific using `userId` from token
