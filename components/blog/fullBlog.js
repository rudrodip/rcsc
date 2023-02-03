// this is a component to render a full blog post

// importing necessary dependencies
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// the component gets all necessary props

const FullBlog = ({ blog, userImg, date, author, url, role }) => {
  // Description of the props  ---->>>

  // blog -> is the main blog post
  // userImg -> author's profile picture
  // date -> date of the blog posted in
  // author -> author name
  // url -> url of this blog post [used in share button]
  // role -> role of the poster

  const [blogImg, setBlogImg] = useState("");
  useEffect(() => {
    blog.img
      ? setBlogImg(blog.img)
      : setBlogImg(
        "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      );
  }, [blog.img]);

  return (
    <div>
      <div class="container px-6 mx-auto text-center">
        {/* <div class="max-w-lg mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl mb-5">{blog?.title}</h1>
        </div> */}
        <div class="flex justify-center mt-10">
          <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src={blogImg} />
        </div>
        <div className="w-20 h-20 inline-flex items-center justify-center text-gray-600 cursor-pointer">
          <Link href={`/user/${blog?.authorProfile}`}>
            <div className="p-4 md:p-6 text-center lg:text-left">
              <div
                className="block rounded-full shadow-xl mx-auto -mt-16 h-36 w-36 bg-cover bg-center hover:scale-105 transition ease-in-out duration-100"
                style={{ backgroundImage: `url('${userImg}` }}
              ></div>
            </div>
          </Link>
        </div>
      </div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="w-full container px-4 pb-6 mx-auto flex flex-col">
          <div className="lg:w-full">
            <div className="flex flex-col sm:flex-row justify-center">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font text-white text-bold text-lg">
                    {author}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded m-2"></div>
                  <p className="text-base text-cyan-300 font-bold">{role}</p>
                  <p className="mb-5 text-gray-300">{`Category: ${blog?.category}, Published: ${date}`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
            <h2 className="font-bold title-font mt-4 text-white text-2xl mb-5">
              {blog?.title}
            </h2>
            {blog?.paragraphs &&
              blog.paragraphs.map((i, index) => (
                <React.Fragment key={index}>
                  <p className="font-normal title-font mt-8 text-cyan-300 text-xl mb-4 opacity-80">
                    {i?.subtitle}
                  </p>
                  <p className="leading-relaxed text-lg mb-4 whitespace-pre-line break-word">
                    {i?.content}
                  </p>
                </React.Fragment>
              ))}

            <div id="fb-root"></div>
            <div
              className="fb-share-button"
              data-href="https://developers.facebook.com/docs/plugins/"
              data-layout="button"
              data-size="small"
            >
              <a
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                className="fb-xfbml-parse-ignore text-indigo-400 hover:bg-cyan-400 hover:text-black hover:scale-110 inline-flex items-center rounded-sm p-2 transition ease-in-out duration-150"
                rel="noreferrer"
              >
                Share
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0"
        nonce="E58tXvTF"
      ></script>
    </div>
  );
};

export default FullBlog;

// structure of the component ->

// Blog Main Image
// Author Profile image [with link added]
// Loading indicator
// Author's Description
// Main Blog
// Share button
