import React from "react";
import Head from "next/head";
import MiniBlog from "../components/blog/miniBlog";
import {
  db,
  deleteBlog,
  updateBlogNo,
  hideBlog,
} from "../src/config/firebase.config";
import { getDocs, collection, query, limit, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import Link from "next/link";
import SearchBlog from "../components/blog/searchBlog";
import Confirmation from "../components/confirmationModal";

const compare = (a, b) => {
  let a_date = a.data().timestamp;
  let b_date = b.data().timestamp;
  if (a_date > b_date) {
    return -1;
  }
  if (a_date < b_date) {
    return 1;
  }
  return 0;
};


async function fetchBlogs(category) {
  const docRef = collection(db, "blogs");
  let q = null;
  if (category == "My Blogs") {
    q = query(docRef, where("authorProfile", "==", user.uid), limit(12));
  } else if (category == "All Blogs") {
    q= query(docRef, limit(30));
  } else {
    q = query(docRef, where("category", "==", category));
  }
  const docSnaps = await getDocs(q);
  let blogs = docSnaps.docs.sort(compare);
  return blogs
}

function Blogs({ user, userInfo }) {
  const [blogs, setBlogs] = useState(null);
  const [category, setCategory] = useState("All Blogs");
  const [laoding, setLoading] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [addToggle, setAddToggle] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState({
    id: null,
    authorProfile: null,
    approved: null,
    add: null
  })

  const handleDeleteToggle = () => {
    setDeleteToggle(!deleteToggle);
  };
  const handleAddToggle = () => {
    setAddToggle(!addToggle);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  async function handleHide(id, authorProfile, approved, add) {
    setLoading(true);
    if (add) {
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

  useEffect(() => {
    async function updateBlog(){
      const blog_data = await fetchBlogs(category);
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

      <Confirmation
        toggle={deleteToggle}
        warning="Are you sure to delete this article?"
        handleToggle={handleDeleteToggle}
        handleAction={() => {
          console.log(selectedBlog)
          handleHide(
            selectedBlog['id'],
            selectedBlog['authorProfile'],
            selectedBlog['approved'],
            selectedBlog['add']
          )
        }}
      />
      <Confirmation
        toggle={addToggle}
        warning="Are you sure to approve this article?"
        handleToggle={handleAddToggle}
        handleAction={() => {
          handleHide(
            selectedBlog['id'],
            selectedBlog['authorProfile'],
            selectedBlog['approved'],
            selectedBlog['add']
          )
        }}
      />

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
                editable={
                  user?.uid == i.data().authorProfile ||
                    userInfo?.roles["admin"]
                    ? true
                    : false
                }
                date={formatedDate}
                key={index}
                id={i?.id}
                select={setSelectedBlog}
                addConfirmation={handleAddToggle}
                deleteConfirmation={handleDeleteToggle}
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
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frajshahicollegescienceclub%2Fposts%2Fpfbid02eGbE9TguMehE2RCkC597kgg73Lv3MRmHzQrBhzcNhFpdX5FtF4svooTdeM5c2ULpl&show_text=true&width=500"
            width="500"
            height="620"
            style={{
              border: "none",
              overflow: " hidden",
              background: "white",
              margin: "10px",
            }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frajshahicollegescienceclub%2Fposts%2Fpfbid02MazLVpji1DoGczJ8Eiz7NScUWkxXbjBvMsoFNdaLTzddYeNGkHac3ai1YtjEXh2il&show_text=true&width=500"
            width="500"
            height="660"
            style={{
              border: "none",
              overflow: " hidden",
              background: "white",
              margin: "10px",
            }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frajshahicollegescienceclub%2Fposts%2Fpfbid0PEf9JanSgj2eoSBQJFwyNrABGjLk6xwgZXf4W3VThT4cWGfMfXeJaxhiYMLnqv8ol&show_text=true&width=500"
            width="500"
            height="660"
            style={{
              border: "none",
              overflow: " hidden",
              background: "white",
              margin: "10px",
            }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frajshahicollegescienceclub%2Fposts%2Fpfbid02Tkm8ZmFPLuNkzHuK9RbT1pVmPzUVhV6R85xZMD6VnYiH3RbCMofBJhY6BhcpyF2rl&show_text=true&width=500"
            width="500"
            height="660"
            style={{
              border: "none",
              overflow: " hidden",
              background: "white",
              margin: "10px",
            }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frajshahicollegescienceclub%2Fposts%2Fpfbid02FhGeGSXoJ3g2R3Pv2FVWqVhkppgeECZXnPaqEoAt3Y8jX1XJpCT3racVs2VHqbPzl&show_text=true&width=500"
            width="500"
            height="660"
            style={{
              border: "none",
              overflow: " hidden",
              background: "white",
              margin: "10px",
            }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>

          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frajshahicollegescienceclub%2Fposts%2Fpfbid057QGRhhtCif3e5xuLd9LNZjmJBJWxhEXZmMhH3FkcHwB4dRAHQXkH5i88mrA5YZtl&show_text=true&width=500"
            width="500"
            height="660"
            style={{
              border: "none",
              overflow: " hidden",
              background: "white",
              margin: "10px",
            }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Blogs;