<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
**frontend folder structure**
crop-ai-frontend/
├── public/                     # Static files
│   ├── favicon.ico
│   ├── logo.png                # App ka main logo
│   └── manifest.json           # PWA details
├── src/
│   ├── i18n/                   # --- LANGUAGE TRANSLATIONS ---
│   │   ├── locales/
│   │   │   ├── en.json         # English UI text (Home, Scan, Buttons)
│   │   │   └── hi.json         # Hindi UI text (Ghar, Scan karein, Buttons)
│   │   └── config.js           # i18next configuration setup
│   │
│   ├── assets/                 # --- STATIC MEDIA ---
│   │   ├── images/             # Leaf placeholders, background banners
│   │   ├── icons/              # Weather icons, social media svgs
│   │   └── styles/             # Global.css (Tailwind directives)
│   │
│   ├── components/             # --- SHARED UI (GLOBAL) ---
│   │   ├── layout/             # Navbar.jsx, Footer.jsx, Sidebar.jsx
│   │   └── ui/                 # Button.jsx, Input.jsx, Modal.jsx, Loader.jsx, Badge.jsx
│   │
│   ├── features/               # --- FEATURE LOGIC (THE BRAINS) ---
│   │   ├── auth/               
│   │   │   ├── components/     # LoginForm.jsx, SignupForm.jsx
│   │   │   ├── hooks/          # useAuth.js (Login/Logout logic)
│   │   │   └── api/            # authService.js (API requests)
│   │   ├── dashboard/          
│   │   │   ├── components/     # StatsGrid.jsx, RecentActivity.jsx, HealthChart.jsx
│   │   │   └── hooks/          # useDashboard.js (Fetch summary stats)
│   │   ├── detection/          
│   │   │   ├── components/     # Dropzone.jsx, ResultCard.jsx, ConfidenceMeter.jsx
│   │   │   ├── utils/          # generatePDF.js (Download report logic)
│   │   │   └── api/            # scanService.js (Send image to AI)
│   │   ├── history/            
│   │   │   ├── components/     # HistoryList.jsx, HistoryCard.jsx, SearchBar.jsx
│   │   │   └── hooks/          # useHistory.js (Fetch past scans)
│   │   ├── weather/            
│   │   │   ├── components/     # WeatherWidget.jsx, ForecastTable.jsx, AgriAlerts.jsx
│   │   │   └── api/            # weatherService.js (OpenWeather calls)
│   │   ├── help/               
│   │   │   ├── components/     # FAQAccordion.jsx, SupportGuide.jsx
│   │   │   └── data/           # faqData.js (Hardcoded questions/answers)
│   │   ├── community/          
│   │   │   ├── components/     # PostList.jsx, CommentBox.jsx, ExpertBio.jsx
│   │   │   └── api/            # communityService.js
│   │   ├── profile/            
│   │   │   ├── components/     # EditProfileForm.jsx, SecuritySettings.jsx
│   │   │   └── hooks/          # useProfile.js
│   │   └── contact/            
│   │       └── components/     # ContactForm.jsx, LocationMap.jsx
│   │
│   ├── pages/                  # --- DIRECT ROUTE PAGES ---
│   │   ├── Home.jsx            # Landing Page (Hero, Features, CTA)
│   │   ├── Dashboard.jsx       # User Control Center
│   │   ├── Scan.jsx            # Main AI Detection Tool
│   │   ├── Weather.jsx         # Detailed Weather & Forecast
│   │   ├── History.jsx         # User's Saved Diagnosis Records
│   │   ├── Community.jsx       # Forum & Expert Interaction
│   │   ├── Help.jsx            # Support & Help Center
│   │   ├── About.jsx           # Team & Mission Info
│   │   ├── Contact.jsx         # Contact Us Page
│   │   ├── Profile.jsx         # User Account & Settings
│   │   ├── Login.jsx           # Authentication Page
│   │   ├── Signup.jsx          # Registration Page
│   │   ├── Terms.jsx           # Terms of Service (Legal)
│   │   ├── Privacy.jsx         # Privacy Policy (Legal)
│   │   └── NotFound.jsx        # 404 Error Page
│   │
│   ├── routes/                 # --- NAVIGATION HUB ---
│   │   ├── AppRoutes.jsx       # All route definitions in one place
│   │   └── PrivateRoute.jsx    # Protection (Redirect to Login if not authenticated)
│   │
│   ├── context/                # --- GLOBAL STATE ---
│   │   ├── AuthContext.jsx     # Logged-in user data & status
│   │   └── ScanContext.jsx     # Current scan result shared across components
│   │
│   ├── services/               # --- EXTERNAL INTEGRATIONS ---
│   │   └── api.js              # Axios instance with Base URL & Auth headers
│   │
│   ├── utils/                  # --- SHARED HELPERS ---
│   │   ├── formatDate.js       # Convert ISO dates to readable format
│   │   └── validateFile.js     # Image size/type validation logic
│   │
│   ├── App.jsx                 # Main Layout & Provider Wrapper
│   └── main.jsx                # React DOM Render entry point
│
├── .env                        # VITE_API_URL, VITE_WEATHER_KEY
├── tailwind.config.js          # Design system & Theme colors
├── package.json                # List of all installed libraries
└── vite.config.js              # Vite server & build configuration


**backend folder structure**
crop-ai-backend/
├── app/
│   ├── api/                   # --- API ENDPOINTS ---
│   │   ├── auth.py            # Login, Signup, Password Hashing (bcrypt)
│   │   ├── predict.py         # AI Model Load + Image Pre-processing + Prediction
│   │   ├── history.py         # DB se user ke purane scans nikalna/delete karna
│   │   └── weather.py         # Frontend ke liye OpenWeather data filter karna
│   │
│   ├── core/                  # --- CONFIG & SECURITY ---
│   │   ├── config.py          # ENV variables (DB_URL, JWT_SECRET, API_KEYS)
│   │   └── security.py        # Token creation (JWT) aur validation logic
│   │
│   ├── db/                    # --- DATABASE LAYER ---
│   │   ├── session.py         # Database connection setup (SQLAlchemy/Motor)
│   │   └── models.py          # Database Tables (User Table, Scans Table)
│   │
│   ├── schemas/               # --- DATA VALIDATION (Pydantic) ---
│   │   ├── user.py            # User data verification logic
│   │   └── scan.py            # Prediction result structure verification
│   │
│   └── main.py                # --- ENTRY POINT --- (Routing connect karne ke liye)
│
├── ml_models/                 # --- AI STORAGE ---
│   ├── plant_disease_model.h5 # Teri trained CNN model file
│   └── labels.json            # Classes (e.g., 0: 'Early Blight', 1: 'Healthy')
│
├── uploads/                   # User ki bheji hui images ka temporary storage
├── .env                       # Database credentials aur API keys
└── requirements.txt           # fastapi, uvicorn, tensorflow, pillow, sqlalchemy


** frontend backend and database folder structure**

crop-ai-project/
│
├── 📂 crop-ai-frontend/               # --- REACT UI LAYER ---
│   ├── 📂 public/                     # Static assets (logo, icons)
│   ├── 📂 src/
│   │   ├── 📂 i18n/                   # Multi-language (en.json, hi.json)
│   │   ├── 📂 assets/                 # Global CSS & Banners
│   │   ├── 📂 components/             # Reusable UI (Navbar, Footer, Button, Card)
│   │   ├── 📂 features/               # FEATURE LOGIC (THE BRAINS)
│   │   │   ├── 📂 auth/               # Login, Signup, useAuth.js
│   │   │   ├── 📂 dashboard/          # StatsCards.jsx, ActivityGraph.jsx
│   │   │   ├── 📂 detection/          # Dropzone.jsx, ResultCard.jsx, scanService.js
│   │   │   ├── 📂 history/            # HistoryList.jsx, useHistory.js
│   │   │   ├── 📂 weather/            # WeatherWidget.jsx, useWeather.js
│   │   │   ├── 📂 community/          # ForumList.jsx, CommentBox.jsx
│   │   │   ├── 📂 help/               # FAQAccordion.jsx
│   │   │   └── 📂 profile/            # ProfileForm.jsx
│   │   ├── 📂 pages/                  # ENTRY PAGES (Home, Scan, Weather, etc.)
│   │   ├── 📂 routes/                 # AppRoutes.jsx (Navigation Hub)
│   │   ├── 📂 services/               # api.js (Axios base config for Backend)
│   │   ├── App.jsx                    # Route & Provider Wrapper
│   │   └── main.jsx                   # React Entry
│   └── .env                           # VITE_API_URL=http://localhost:8000
│
├── 📂 crop-ai-backend/                # --- PYTHON API LAYER ---
│   ├── 📂 app/
│   │   ├── 📂 api/                    # ENDPOINTS
│   │   │   ├── auth.py                # User Registration & Login
│   │   │   ├── predict.py             # AI Image Processing & Result
│   │   │   ├── history.py             # DB Fetch for Past Scans
│   │   │   └── weather.py             # Weather API Proxy
│   │   ├── 📂 db/                     # MYSQL CONNECTION
│   │   │   ├── session.py             # MySQL Engine & Session Setup
│   │   │   ├── models.py              # MySQL Tables (Users, Scans)
│   │   │   └── crud.py                # DB Operations (Create, Read, Update)
│   │   ├── 📂 core/                   # Security (JWT) & Config
│   │   ├── 📂 schemas/                # Pydantic (Data Validation)
│   │   └── main.py                    # FastAPI Main Entry Hub
│   ├── 📂 ml_models/                  # AI ASSETS
│   │   ├── plant_disease_model.h5     # Trained Model File
│   │   └── labels.json                # Disease Name Mapping
│   ├── 📂 uploads/                    # Temp storage for scanned images
│   ├── .env                           # DB_URL, SECRET_KEY, WEATHER_KEY
│   └── requirements.txt               # Dependencies (FastAPI, SQLAlchemy, PyMySQL)
│
└── 📂 sql_scripts/                    # MYSQL BACKUP
    └── init.sql                       # Database & Table creation script
>>>>>>> c3a011646edd76d20d3e2098c412371f630abfc5
