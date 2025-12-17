# 🚗 Urban Cruise – Automated Lead Management System (LMS)

## 📌 Project Overview

**Urban Cruise LMS** is a full-stack **Automated Lead Management System** designed to collect, manage, and analyze leads from multiple digital sources in real time. The system centralizes leads from:

* 🌐 Company Website
* 📘 Meta Ads (Facebook & Instagram)
* 🔍 Google Ads Lead Forms

The main objective is to eliminate manual lead handling and provide a **single unified dashboard** for sales/admin teams to respond faster and track marketing performance efficiently.

---

## 🌍 Live Links

* **Frontend (Vercel):** [https://urban-cruise-lms.vercel.app](https://urban-cruise-lms.vercel.app)
* **Backend (Render):** [https://urban-cruise-lms.onrender.com](https://urban-cruise-lms.onrender.com)
* **API Health Check:** [https://urban-cruise-lms.onrender.com/api](https://urban-cruise-lms.onrender.com/api)
* **GitHub Repository:** [https://github.com/RjRishuSty/Urban_Cruise_LMS.git](https://github.com/RjRishuSty/Urban_Cruise_LMS.git)

---

## 🧩 Folder Structure

```
Urban_Cruise_LMS
│
├── Backend
│   ├── src
│   │   ├── config        # DB & environment configuration
│   │   ├── controllers   # Business logic
│   │   ├── models        # Mongoose schemas
│   │   ├── routes        # API routes
│   │   ├── middlewares   # Auth & error handling
│   │   ├── services      # External API & helper logic
│   │   └── index.js      # Server entry point
│   ├── .env
│   └── package.json
│
├── Frontend
│   ├── src
│   │   ├── components    # Reusable UI components
│   │   ├── pages         # Page-level components
│   │   ├── redux         # Redux Toolkit slices & store
│   │   ├── routes        # App routing
│   │   ├── utils         # Helpers & constants
│   │   ├── hooks         # Custom React hooks
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Tech Stack & Tools Used

### 🖥️ Frontend

* **Vite + React 19** – Fast build & modern UI
* **React Router DOM v7** – Client-side routing
* **Redux Toolkit** – Global state management
* **Material UI (MUI v7)** – UI components & icons
* **Emotion** – Styling engine for MUI
* **Notistack** – Snackbar notifications
* **Axios** – API communication
* **Swiper.js** – Slider & carousel UI
* **jsPDF & jsPDF-AutoTable** – PDF report generation
* **xlsx** – Excel export functionality

### 🧠 Backend

* **Node.js** – Runtime environment
* **Express.js v5** – REST API framework
* **MongoDB + Mongoose** – Database & ODM
* **JWT (jsonwebtoken)** – Authentication
* **bcrypt** – Password hashing
* **CORS** – Cross-origin handling
* **Cookie Parser** – Secure auth cookies
* **Morgan** – API request logging
* **dotenv** – Environment variable management

### ☁️ Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

## ✨ Key Features

### 1️⃣ Website Lead Integration

* Real-time lead capture from website forms
* Stores name, email, phone, service type
* Auto source tagging: `Website`

### 2️⃣ Meta Ads Integration (Facebook & Instagram)

* Lead sync via Meta Ads API
* Campaign & ad tracking
* Auto source tagging: `Meta Ads`

### 3️⃣ Google Ads Lead Forms

* Imports Google Ads leads
* Captures campaign & keyword data
* Helps ROI & performance analysis

### 4️⃣ Centralized Dashboard

* Unified view of all leads
* Filters by source, status, date
* Sorting & pagination
* Lead assignment & status updates

### 5️⃣ Notifications & Alerts

* Instant alerts for new leads
* Daily summary (Admin-focused)
* Snackbar notifications in UI

### 6️⃣ Analytics & Reports

* Lead source performance
* Conversion tracking
* Downloadable reports:

  * 📊 Excel (.xlsx)
  * 📄 PDF (.pdf)

---

## 🚀 Performance Optimization

* **Reusable Components** for forms, tables, modals
* **Conditional Rendering** to avoid unnecessary UI loads
* **useMemo & useCallback** for optimized re-renders
* **Lazy loading routes** (where applicable)
* **Centralized constants & configs**
* **Efficient Redux slices** with minimal state updates

---

## ♻️ Reusable Components

* Dynamic Form Generator (based on config array)
* Reusable MUI Table with pagination
* Common Modal component
* Shared Select & Input components
* Snackbar wrapper

---

## 🔐 Authentication & Security

* JWT-based authentication
* HTTP-only cookies
* Protected routes (Frontend & Backend)
* Password hashing using bcrypt

---

## 🧪 API Status

* Server Health Endpoint:

```
GET /api
Response: { "message": "api working" }
```

---

## ⚠️ Challenges Faced

* ⏱️ **Completing the project on time** with full-stack scope
* 🔁 Managing complex **conditional rendering** in forms & tables
* 🔄 Handling dynamic filters & reusable select components
* 📊 Syncing data from multiple lead sources into a unified schema

---

## 📈 Future Improvements

* Real-time WebSocket notifications
* Role-based access control (Admin / Sales)
* Advanced analytics dashboard
* WhatsApp/SMS integration
* Automated lead assignment logic

---

## 👨‍💻 Author

**Rishu Raj**
Frontend & Backend Developer
GitHub: [https://github.com/RjRishuSty](https://github.com/RjRishuSty)

---

## 📄 License

This project is developed for educational and evaluation purposes.
