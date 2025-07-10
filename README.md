# AI Travel Planner

An intelligent, cloud-native travel planning web application that leverages **Google Gemini 1.5 Flash** and **Google Cloud Services** to generate personalized itineraries, hotel recommendations, and travel routes based on user input.

## 🚀 Features

- ✅ **AI-powered itinerary generation** using Gemini Flash 1.5
- 📍 **Google Maps integration** for distance, location, and route visualization
- 🏨 **Hotel recommendations** with real-time data
- 🔐 **Auth0 authentication** with secure login & role-based access
- ☁️ **Cloud Firestore** for real-time user and trip data storage
- ⚙️ **CI/CD deployment** on Vercel with 99.9% uptime

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- JavaScript (ES6+)
- Vite

### Backend & APIs
- Google Gemini 1.5 Flash (Generative AI)
- Google Maps API
- Google Places API

### Cloud & Auth
- Google Cloud (Gemini, Maps, Places, OAuth)
- Firebase Firestore (NoSQL DB)
- Auth0 (Authentication)
- Vercel (Deployment + CI/CD)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MohammedZaheed/ai-travel-planner.git
   cd ai-travel-planner
    ````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file and add your keys:

   ```env
   VITE_GOOGLE_PLACE_API_KEY=your-google-places-api-key
   VITE_GOOGLE_GEMINI_AI_API_KEY=your-gemini-api-key
   VITE_GOOGLE_AUTH_CLIENT_ID=your-google-auth-client-id
    
   VITE_FIREBASE_API_KEY=your-firebase-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket-url
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-firebase-app-id
   VITE_MEASUREMENT_ID=your-measurement-id

   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Access the app:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

