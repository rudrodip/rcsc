import { createContext, useContext, useEffect, useState } from "react";
import {
    collection,
    query,
    where,
    getDocs,
    orderBy,
    limit
} from "firebase/firestore";
import { db } from '../src/config/firebase.config'
import { useAuth } from "./AuthContext";

const BlogContext = createContext({})

export const useBlogContext = () => useContext(BlogContext)

export const BlogContextProvider = ({ children }) => {
    const { user, userInfo, deleteBlog, updateBlogNo, hideBlog } = useAuth()
    const [blogs, setBlogs] = useState(null)
    const [category, setCategory] = useState("All Blogs");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function updateBlog() {
            const blog_data = await fetchBlogs(user, category);
            setBlogs(blog_data);
        }
        updateBlog();
        setLoading(false)
    }, [category]);

    async function handleHide(id, authorProfile, approved, add) {
        setLoading(true);
        if (add) {
            setBlogs(blogs)
            await updateBlogNo(authorProfile, 1);
            await hideBlog(id, add);
            userInfo.blogs += 1;
        }

        if (!add) {
            // remove from the array for UI
            let index = blogs.findIndex((i) => i.id == id);
            blogs.splice(index, 1);

            // actually deleting from the server
            await deleteBlog(id);

            if (approved) {
                await updateBlogNo(authorProfile, -1);
                userInfo.blogs -= 1;
            }
        }
        setLoading(false);
    }


    return (
        <BlogContext.Provider value={{ blogs, handleHide }}>
            {children}
        </BlogContext.Provider>
    )
}


// fetch blogs from db
async function fetchBlogs(user, category, maxNumBlogs = 12) {
    const docRef = collection(db, "blogs");
    console.log('called')
    let q = null;
    if (category == "My Blogs") {
        q = query(docRef, orderBy("timestamp", "desc"), where("authorProfile", "==", user.uid), limit(maxNumBlogs));
    } else if (category == "All Blogs") {
        q = query(docRef, orderBy("timestamp", "desc"), limit(limit));
    } else {
        q = query(docRef, orderBy("timestamp", "desc"), where("category", "==", category));
    }
    const docSnaps = await getDocs(q);
    return docSnaps.docs;
}