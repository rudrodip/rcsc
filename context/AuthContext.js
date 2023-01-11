import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import {
    doc,
    setDoc,
    updateDoc,
    increment,
    deleteDoc,
    collection,
    query,
    where,
    getDocs,
    getDoc,
} from "firebase/firestore";
import { auth, storage, db } from '../src/config/firebase.config'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => user ? setUser(user) : setUser(null))
        getUserInfo(user?.uid).then(
            (data) => setUserInfo(data)
        )
        setLoading(false)
        return () => unsub()
    }, [user])

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    async function upload(file, currentUser, setLoading) {
        setLoading(true);
        try {
            const fileRef = ref(storage, `profilePics/${currentUser.uid}`);
            const metadata = {
                contentType: "image/jpeg",
            };
            const snapshot = await uploadBytes(fileRef, file, metadata);
            let photoURL = await getDownloadURL(fileRef);
            updateProfile(currentUser, { photoURL });
            return photoURL;
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    async function createUserData(user, data) {
        if (!user) return;
        const userRef = doc(db, `user/${user.uid}`);
        try {
            setDoc(userRef, data);
            updateProfile(user, {
                photoURL:
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            });
        } catch (error) {
            console.log(error)
        }
    }

    async function updateUserData(user, data) {
        if (!user) return;
        const userRef = doc(db, `user/${user.uid}`);
        try {
            updateDoc(userRef, data);
        } catch (error) {
            console.log(error);
        }
    }

    async function updateBlogNo(userUid, val) {
        // val must be 1 or -1
        if (!userUid) return;
        const userRef = doc(db, `user/${userUid}`);
        try {
            const dec = increment(val);
            await updateDoc(userRef, { blogs: dec });
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteBlog(id) {
        const docRef = doc(db, `blogs/${id}`);
        const fileRef = ref(storage, `blogImg/${id}`);
        try {
            await deleteDoc(docRef);
            await deleteObject(fileRef);
        } catch (error) {
            return "error";
        }
    }

    async function updateBlogAuthor(authorName, authorId) {
        try {
            const collectionRef = collection(db, "blogs");
            let queriedBlogs = query(
                collectionRef,
                where("authorProfile", "==", authorId)
            );
            const snapshot = await getDocs(queriedBlogs);
            snapshot.docs.map(async (i) => {
                const docRef = doc(db, `blogs/${i.id}`);
                await updateDoc(docRef, { author: authorName });
            });
        } catch (error) {
            console.log("Failed: ", error);
        }
    }

    async function getUserInfo(uid) {
        if (!uid) return;
        const userRef = doc(db, `user/${uid}`);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
            return null;
        }
    }

    async function hideBlog(id, approvalState = false) {
        const docRef = doc(db, `blogs/${id}`);
        try {
            updateDoc(docRef, { approved: approvalState });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <AuthContext.Provider value={{ user, userInfo, signup, login, logout, createUserData, upload, updateUserData, updateBlogNo, updateBlogAuthor, deleteBlog, hideBlog }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}