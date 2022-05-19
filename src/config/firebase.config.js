import { initializeApp, getApps } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getFirestore, doc, setDoc, updateDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage()
export const db = getFirestore()


// sign up
export async function signUp(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

// login
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

// logout
export function logout() {
  return signOut(auth)
}

// upload image
export async function upload(file, currentUser, setLoading) {
  setLoading(true)
  try {
    const fileRef = ref(storage, `profilePics/${currentUser.uid}.png`)
    const snapshot = await uploadBytes(fileRef, file)
    let photoURL = await getDownloadURL(fileRef)
    updateProfile(currentUser, { photoURL })
    console.log("uploaded successfully..")
  } catch (error) {
    console.log(error)
  }
  setLoading(false)
}


// custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  }, [])
  return currentUser
}

// createUserData
export async function createUserData(user, data) {
  if (!user) return
  const userRef = doc(db, `user/${user.uid}`)
  try {
    setDoc(userRef, data)
  } catch (error) {
    console.log(error)
  }
}

export async function updateUserData(user, data) {
  if (!user) return
  const userRef = doc(db, `user/${user.uid}`)
  try {
    updateDoc(userRef, data)
  } catch (error) {
    console.log(error)
  }
}
