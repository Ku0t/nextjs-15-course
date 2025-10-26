# 📝 Markdown Notes App

A minimal, markdown-based note-taking application built with **Next.js 15**, **React**, and **Firebase** for authentication and cloud storage.  
This project was created as part of my learning journey with Next.js and modern web development.

---

## 🚀 Live Demo

🔗 [View Live on Netlify](https://ktnotes.netlify.app/)

---

## 🧠 Overview

This application allows users to:

- Create, edit, and delete notes written in **Markdown**
- Securely sign in using **Firebase Authentication**
- Store notes in **Firestore Database**
- Auto-save notes and sync changes in real time
- Preview formatted markdown instantly

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [Next.js 15](https://nextjs.org/) |
| Frontend | [React 18](https://react.dev/) |
| Database & Auth | [Firebase Firestore + Auth](https://firebase.google.com/) |
| Deployment | [Netlify](https://www.netlify.com/) |
| Markdown Parsing | [react-markdown](https://github.com/remarkjs/react-markdown) |
| Styling | [Fanta CSS](https://github.com/jamezmca/fantacss) |

---

## ⚙️ Features

- 🔐 Firebase Authentication (Google or Email/Password)
- ☁️ Firestore Cloud Database for storing notes
- 📝 Markdown Editor with Live Preview
- 💾 Auto-save functionality
- 📱 Responsive and clean user interface
- ⚡ Built with the Next.js App Router

---

## 🧰 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/markdown-notes-app.git
cd markdown-notes-app

### 2. Install Dependencies
npm install

yarn install

### 3. Configure Firebase

Create a new project in the Firebase Console

Enable Authentication and Firestore Database

Copy your Firebase config and add it to a .env.local file:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

### 4. Run the Development Server
npm run dev
# or
yarn dev


Open http://localhost:3000
 in your browser to view the app.

## 🌍 Deployment

The project can be deployed easily on Netlify.

Push your project to a GitHub repository

Log in to Netlify

Select “New Site from Git” and connect your repository

Add the same environment variables from .env.local in Netlify’s Environment Variables section

Deploy your app

## 🧪 Future Enhancements

🗂️ Add folders or tags for better note organization

🌙 Implement a dark/light theme toggle

🔄 Enable offline access or local caching

🕓 Add note timestamps and sorting filters

📚 Resources

Next.js Documentation

Firebase Documentation

React Markdown

## 📜 License

This project is open-source and available under the MIT License
.


---

Would you like me to add a short **“Project Structure”** section (explaining the folder layout like `/app`, `/components`, etc.)? It looks great for portfolio projects and helps readers understand your Next.js setup.



