import React from "react";
import Head from "next/head";
import MiniBlog from "../components/blog/miniBlog";
import { useState, useEffect } from "react";
import Link from "next/link";
import SearchBlog from "../components/blog/searchBlog";
import FBpost from "../components/fbPost";
import { useAuth } from "../context/AuthContext";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit
} from "firebase/firestore";
import { db } from '../src/config/firebase.config'

function Blogs() {
  const { user, userInfo } = useAuth()
  const [blogs, setBlogs] = useState(null)
  const [category, setCategory] = useState("All Blogs");
  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  useEffect(() => {
    async function updateBlog() {
      const blog_data = await fetchBlogs(user, category);
      setBlogs(blog_data);
    }
    updateBlog();
  }, [category]);

  return (
    <div>
      <Head>
        <title>RCSC - Blogs</title>
        <meta
          name="description"
          content="Official Website of Rajshahi College Science Club"
        />
        <meta property="og:url" content="https://rcsc.vercel.app/blogs" />
        <meta property="og:type" content="Science Club" />
        <meta property="og:title" content="Blogs" />
        <meta
          property="og:description"
          content="Read blogs written by members of Rajshahi College Science Club"
        />
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" />
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>

      <div className="my-5">
        <h1 className="p-4 text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-400 to-cyan-500">
          Blogs
        </h1>
      </div>
      {user ? (
        <div className="w-full flex justify-center content-center flex-row">
          <Link href="/writeBlog">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 uppercase text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all ease-in-out duration-100 shadow text-md lg:text-lg p-3 lg:p-5 rounded outline-none focus:outline-none sm:mr-2 mb-1 mx-3">
              Write blog
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="w-full flex flex-row justify-around">
        <SearchBlog handleCategory={handleCategory} category={category} />
      </div>

      {!blogs ? (
        <div className="sticky top-0 z-40 flex justify-center m-5">
          <button
            disabled
            type="button"
            className="py-2.5 px-5 mr-2 text-sm font-medium  rounded-lg border hover:text-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 inline-flex items-center"
          >
            <svg
              role="status"
              className="inline w-4 h-4 mr-2 animate-spin text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
            Loading...
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="flex m-1 md:m-5 flex-wrap duration-200 transition ease-in-out">
        {blogs &&
          blogs.map((i, index) => {
            const date = i.data().timestamp.toDate();
            const formatedDate = date.toString().slice(0, 15);

            if (!i.data().approved && !userInfo?.roles["admin"]) return "";
            return (
              <MiniBlog
                blog={i.data()}
                date={formatedDate}
                key={index}
                id={i?.id}
              />
            );
          })}
      </div>

      <section id="fb-attachments">
        <h1 className="p-4 text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-400 to-cyan-500">
          Facebook Posts
        </h1>

        <div
          id="post"
          className="flex flex-row justify-around flex-wrap m-1 md:m-5"
        >
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0gC6wJVQJAxFaN6LdA8mytT7juhLaanseK6E1YWmbYAZHw6pnjscPXdfq43U1iE5Vl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0zPwrFtBPeZ4Hw8ebpx79BPaoyZsvPK5WPFDNZqo4ymHjVThfeUc5tEHKVB5Bz8WVl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid02b5htuE9o9T6w87onbKkZWsZSmhXmRMHWPFKhpEtG5fsxYUGtcByKNqismkPbMBgsl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0MNX39GqBz6XJdbNJPovusAojLRhBAifWtY4Rng8XK6rgborfQSzPZL7HRdmX6tvTl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid02R2AdYpcFjedC4dbV7NjkJZccRyCv2FraquykKDsSXpUzDVnALzUQw9HrdgXbH1S1l" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid02FrRUg2obWEMN3qujgChcF6LfGK2U6qxU69ok1eGD4MgfWj96WTkFto7nTkJi78Gsl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid02aA45UvweLwC9d1XhgEpeD7wcCzPShtGXZVwXqhzULP2irRTmEHtrtXhSuTs2KMidl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid031iUM7BMXsdJqmy49PqNPjLjoZxFZhx9wXJLiuXPnQ1eUbWtWixjnebbbiLQxFnPNl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0225mYngneVnEoQjr6X8hYPXzTZ9zkJV7duA1fvj8XZZNZnRUmQp3qY6eKPP3DaUdGl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid02x4c12mXezeWfhSSECJ4D68u3pGYV1vwRQB5uupyMNWQ66TN5ivwarRU8E1gWyqYkl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid033rXxYB6QfEnrgeoQbhNkYw8hLkWsGKwd8e527xo6XyX9VtiaFB2nS1tQVNSZe7NEl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0E6e3w8ehrdMzsubynK8sZQYfWv6X2xQeUMLFtnUaZbyoUsmRhFBkqiC8CK4nRi78l" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0TaoX1shggMRGWJkVni9pAVX5i2y41v9W9WVCBbnx3c5HD1Px6UePGDJzpbmkufQgl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0ajh4raJPiQyV3kYSqdZDmEGiK2q7buJi687NnjPsG5tMU5vZq5faYAzHbHMSQFVgl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0J46BCwMCMtp5RTtWSiVUeV55537kARajpQ8yANbjLXJPEv9LGnv9trArdqnM7M2dl" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid02T6qt7Xx7k4NuAoWBJ5cYUMo7JPsgirvWvyJ9WxCUahTp5NDbYQzEztgSgLYJbkz1l" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0hCpznjpEfTKnCq2jatHKCjmaZbf6kuwfUXn9nbYxQaJDAWmh6pjjRdLVoPYYrrx3l" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0PjuSiEHfsfKRgqdQNQa34pVveAXY3MP5r2Ds3ehg9gdesEbfh6KuVpU76RqJLJ6Al" />
          <FBpost url="https://www.facebook.com/rajshahicollegescienceclub/posts/pfbid0BgQxQua5q2skRshWq7xQTtTHSZcmyeCH5fxTGycNjZKiiEdsCaC2zg1J237dKVakl" />

        </div>
      </section>
    </div>
  );
}

export default Blogs;

async function fetchBlogs(user, category, maxNumBlogs = 12) {
  const docRef = collection(db, "blogs");
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