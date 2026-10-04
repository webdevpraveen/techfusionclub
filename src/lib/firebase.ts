import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const getEnv = (key: string, viteVal?: string) => {
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key];
  }
  return (
    viteVal ||
    (typeof import.meta !== "undefined" && import.meta.env ? import.meta.env[key] : "") ||
    ""
  );
};

const apiKey = getEnv("VITE_FIREBASE_API_KEY", import.meta.env["VITE_FIREBASE_API_KEY"]);
const projectId = getEnv("VITE_FIREBASE_PROJECT_ID", import.meta.env["VITE_FIREBASE_PROJECT_ID"]);

/**
 * Only initialize Firebase if a valid API key and project ID are explicitly configured.
 * This ensures the public website never crashes or depends on Firebase Auth.
 */
export const isFirebaseConfigured = Boolean(
  apiKey &&
  apiKey.trim().length > 0 &&
  apiKey !== "undefined" &&
  projectId &&
  projectId.trim().length > 0 &&
  projectId !== "undefined",
);

const firebaseConfig = {
  apiKey,
  authDomain: getEnv("VITE_FIREBASE_AUTH_DOMAIN", import.meta.env["VITE_FIREBASE_AUTH_DOMAIN"]),
  projectId,
  storageBucket: getEnv(
    "VITE_FIREBASE_STORAGE_BUCKET",
    import.meta.env["VITE_FIREBASE_STORAGE_BUCKET"],
  ),
  messagingSenderId: getEnv(
    "VITE_FIREBASE_MESSAGING_SENDER_ID",
    import.meta.env["VITE_FIREBASE_MESSAGING_SENDER_ID"],
  ),
  appId: getEnv("VITE_FIREBASE_APP_ID", import.meta.env["VITE_FIREBASE_APP_ID"]),
};

const isBrowser = typeof window !== "undefined";

let app: FirebaseApp | undefined;
export let auth: Auth | null = null;
export let db: Firestore | null = null;
export let storage: FirebaseStorage | null = null;
export let googleProvider: GoogleAuthProvider | null = null;

if (isBrowser && isFirebaseConfigured) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
  } catch (error) {
    console.warn("[Firebase] Could not initialize Firebase client:", error);
    auth = null;
    db = null;
    storage = null;
    googleProvider = null;
  }
}

export const signInWithGoogle = async () => {
  if (!isBrowser) return null;
  if (!auth || !googleProvider) {
    throw new Error(
      "Firebase Authentication is not configured. Please add valid Firebase environment variables in .env to use the admin portal.",
    );
  }
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const logout = async () => {
  if (!isBrowser || !auth) return;
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
    throw error;
  }
};
