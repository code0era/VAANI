# VAANI - Real-Time Chat Application
DEPLOYED LINK : https://vaani-7vyj.onrender.com
<img width="425" height="446" alt="Screenshot 2025-10-15 204317" src="https://github.com/user-attachments/assets/e81b81be-82bd-4396-b3ec-b93a79def177" />

## Overview

**VAANI** is a real-time chat application inspired by Indian mythology. It allows users to communicate instantly with friends or colleagues through text and media messages. Built with modern web technologies, it provides a seamless chatting experience similar to WhatsApp or Messenger.

---

## Features

- **Real-Time Messaging:** Instant chat without page reload using **Socket.IO**.
- **Media Sharing:** Send images alongside messages.
- **User Authentication:** Secure login and signup using **JWT** and **bcrypt**.
- **Profile Management:** Update profile information and profile picture.
- **Online Users:** See which users are online.
- **Responsive Design:** Works perfectly on both desktop and mobile devices.

---

## Tech Stack

- **Frontend:** React.js, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Real-Time Communication:** Socket.IO
- **Authentication:** JWT & bcryptjs
- **Cloud Storage:** Cloudinary for image uploads

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/code0era/VAANI
cd vaani
```

### 2. Install dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

### 3. Environment Variables

Create a `.env` file in `backend/` folder with the following:

```env
PORT=5001
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_API_SECRET=<api_secret>
```

### 4. Run Locally

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

Open your browser and go to `http://localhost:5173`.

---

## Deployment

- **Frontend** can be deployed to Vercel, Netlify, or Render.
- **Backend** can be deployed to Render, Railway, or any Node.js hosting provider.
- Make sure to set environment variables in the hosting platform.

---

## File Structure

```
vaani/
│
├── backend/
│   ├── src/
│   │   ├── controllers/        # API logic
│   │   ├── routes/             # API routes
│   │   ├── lib/                # DB connection, socket, utils
│   │   └── index.js            # Backend entry point
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── store/              # Zustand state management
│   │   └── main.jsx
│   ├── public/
│   │   └── VAANI.png           # Logo
│   └── package.json
│
└── README.md
```

---

## Screenshots


### LOGIN
---<img width="1920" height="1080" alt="Screenshot 2025-10-16 002154" src="https://github.com/user-attachments/assets/7c0f39cf-6964-43bf-b5f5-413562d45734" />

### PROFILE

<img width="1920" height="1080" alt="Screenshot 2025-10-16 002031" src="https://github.com/user-attachments/assets/b28a5ac1-1cc5-4c39-881a-90e5fa468781" />

### CHAT_CONTAINER

<img width="1920" height="1080" alt="Screenshot 2025-10-16 002135" src="https://github.com/user-attachments/assets/6c6d0434-50b4-4f6d-b0fb-6c7745752eb1" />

### THEMES_STORE
<img width="1920" height="1080" alt="Screenshot 2025-10-16 002051" src="https://github.com/user-attachments/assets/2c8e614e-8d5f-4af0-b7ba-672b849872d5" />

## Future En
hancements

- Video and voice calls
- Message reactions and emojis
- Group chats
- Dark mode toggle
- Improved media upload with compression

---

## About VAANI

VAANI means "voice" or "speech" in Sanskrit. This app embodies the essence of instant communication, connecting people in real-time just like the flow of words and messages in human conversations.

---

## License

This project is licensed under the MIT License.
