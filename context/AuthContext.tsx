// import { ReactNode, createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
//   sendPasswordResetEmail
// } from "firebase/auth";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
// } from "firebase/storage";
// import {
//   doc,
//   setDoc,
//   updateDoc,
//   collection,
//   query,
//   where,
//   getDocs,
//   getDoc,
// } from "firebase/firestore";
// import { User as FirebaseUser } from "firebase/auth";
// // import { User as FirestoreUser } from "firebase/firestore";
// import { auth, storage, db } from '../src/config/firebase.config'

// interface Props {
//   children: ReactNode;
// }

// type UserInfo = {
//   // define type of user info object
//   [key: string]: string;
// };

// const AuthContext = createContext({})

// export const useAuth = () => useContext(AuthContext)

// export const AuthContextProvider: React.FC<Props> = ({ children }) => {
//   const [user, setUser] = useState<FirebaseUser | null>(null);
//   const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => user ? setUser(user) : setUser(null))
//     getUserInfo(user?.uid).then(
//       (data) => setUserInfo(data)
//     )
//     setLoading(false)
//     return () => unsub()
//   }, [user])

//   const signup = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password)
//   }

//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password)
//   }

//   const logout = () => {
//     return signOut(auth)
//   }

//   const triggerResetEmail = async (email) => {
//     await sendPasswordResetEmail(auth, email);
//     console.log("Password reset email sent")
//   }

//   async function upload(file, currentUser) {
//     try {
//       const fileRef = ref(storage, `profilePics/${currentUser.uid}`);
//       const metadata = {
//         contentType: "image/jpeg",
//       };
//       const snapshot = await uploadBytes(fileRef, file, metadata);
//       let photoURL = await getDownloadURL(fileRef);
//       updateProfile(currentUser, { photoURL });
//       return photoURL;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function createUserData(user, data) {
//     if (!user) return;
//     const userRef = doc(db, `user/${user.uid}`);
//     try {
//       setDoc(userRef, data);
//       updateProfile(user, {
//         photoURL: data['photoURL'],
//       });
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   async function updateUserData(user, data) {
//     if (!user) return;
//     const userRef = doc(db, `user/${user.uid}`);
//     try {
//       updateDoc(userRef, data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function getUserInfo(uid) {
//     if (!uid) return;
//     const userRef = doc(db, `user/${uid}`);
//     const docSnap = await getDoc(userRef);
//     if (docSnap.exists()) {
//       return docSnap.data();
//     } else {
//       console.log("No such document!");
//       return null;
//     }
//   }

//   async function deleteUser(user) {
//     let uid = user.uid
//     deleteUser(user).then(() =>
//       console.log('user deleted')
//     ).catch(error => console.log(error))
//     const collectionRef = collection(db, "blogs");
//     let queriedBlogs = query(
//       collectionRef,
//       where("authorProfile", "==", uid)
//     );
//     const snapshot = await getDocs(queriedBlogs);
//     snapshot.docs.map(async (i) => {
//       deleteBlog(i.id)
//     });
//   }


//   return (
//     <AuthContext.Provider value={{ user, userInfo, signup, login, logout, createUserData, upload, updateUserData, deleteUser, triggerResetEmail, setUserInfo }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   )
// }