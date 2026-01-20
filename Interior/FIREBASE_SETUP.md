# Firebase Configuration

To set up Firebase authentication:

1. **Create a Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard

2. **Enable Authentication:**
   - In Firebase Console, go to "Authentication"
   - Click "Get Started"
   - Enable "Email/Password" sign-in method
   - (Optional) Enable "Google" sign-in method for Google login

3. **Get Your Firebase Config:**
   - In Firebase Console, go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click the web icon (</>)
   - Copy the configuration object

4. **Update the Firebase Config:**
   - Open `src/config/firebase.ts`
   - Replace the placeholder values with your actual Firebase config

5. **Add Environment Variables (Recommended):**
   Create a `.env` file in the Interior directory:

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

   Then update `src/config/firebase.ts` to use environment variables:

   ```typescript
   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID,
   };
   ```

6. **Access the Login Page:**
   Navigate to `http://localhost:8080/login`

## Features Included:

✅ Email/Password login
✅ Email/Password signup
✅ Google authentication
✅ Authentication context (available throughout the app)
✅ Protected routes ready
✅ Toast notifications for errors and success
✅ Responsive design with shadcn/ui components

## Using Authentication in Your Components:

```typescript
import { useAuth } from "@/contexts/AuthContext";

const YourComponent = () => {
  const { currentUser, signOut } = useAuth();

  if (currentUser) {
    return <div>Welcome, {currentUser.email}!</div>;
  }

  return <div>Please login</div>;
};
```
