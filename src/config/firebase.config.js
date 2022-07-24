import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { getFirestore, doc, setDoc, updateDoc, increment, deleteDoc, collection, query, where, getDocs, getDoc } from 'firebase/firestore'
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
export const storage = getStorage()
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
    const fileRef = ref(storage, `profilePics/${currentUser.uid}`)
    const metadata = {
      contentType: 'image/jpeg',
    }
    const snapshot = await uploadBytes(fileRef, file, metadata)
    let photoURL = await getDownloadURL(fileRef)
    updateProfile(currentUser, { photoURL })
    return photoURL
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
    updateProfile(user, { photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" })
  } catch (error) {
    // console.log(error)
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

export async function updateBlogNo(userUid, val) {
  // val must be 1 or -1
  if (!userUid) return
  const userRef = doc(db, `user/${userUid}`)
  try {
    const dec = increment(val)
    await updateDoc(userRef, { "blogs": dec })
  } catch (error) {
    console.log(error)
  }
}


export async function deleteBlog(id) {
  const docRef = doc(db, `blogs/${id}`)
  const fileRef = ref(storage, `blogImg/${id}`)
  try {
    await deleteDoc(docRef)
    await deleteObject(fileRef)
  } catch (error) {
    return "error"
  }
}

export async function updateBlogAuthor(authorName, authorId) {
  try {

    const collectionRef = collection(db, 'blogs')
    let queriedBlogs = query(collectionRef, where("authorProfile", "==", authorId))
    const snapshot = await getDocs(queriedBlogs)
    snapshot.docs.map(async (i) => {
      const docRef = doc(db, `blogs/${i.id}`)
      await updateDoc(docRef, { author: authorName })
    })
  } catch (error) {
    console.log("Failed: ", error)
  }
}

export function useUser() {
  const [currentUser, setCurrentUser] = useState(null)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub
  }, [])

  async function getUser(uid) {
    if (!uid) return
    const userRef = doc(db, `user/${uid}`)
    const docSnap = await getDoc(userRef)
    if (docSnap.exists()) {
      setUser(docSnap.data())
    } else {
      console.log("No such document!");
    }
  }

  useEffect(()=> {
    currentUser && getUser(currentUser.uid)
  }, [currentUser])
  return user
}

// hide blog - feature for user
export async function hideBlog(id, approvalState=false) {
  const docRef = doc(db, `blogs/${id}`)
  try {
    updateDoc(docRef, {'approved': approvalState})
  } catch (error) {
    console.log(error)
  }
}