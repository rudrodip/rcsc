// this component is used to show Blog posts in blog page

// importing necessary dependencies
import React from "react";
import Link from "next/link";

// here's the main component
const MiniBlog = (props) => {
  // props property -->
  // poster -> title -> date -> img

  return (
    <div className="p-1 sm:p-4 w-1/2 xl:w-1/3 transition ease-in-out duration-500 scale-1">
      <Link href={`blogs/${props?.id}`}>
        <div className="h-full flex flex-col md:flex-row text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 cursor-pointer"
            src={
              props.blog?.img ||
              "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <div className="flex flex-col pl-0 md:pl-2">
            <h2 className="title-font font-medium text-md text-cyan-300 text-left break-word">
              {props.blog?.title}
            </h2>
            <h2 className="title-font font-medium text-md text-gray-300 text-left">
              {props.blog?.author}
            </h2>
            <h3 className="text-gray-500 mb-3">
              Category: {props.blog?.category}
            </h3>
            <p className="mb-4 text-gray-300">{props.date}</p>
            <span className="inline-flex"></span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MiniBlog;

// structure of this component

// Image -> Title -> Poster -> Category -> Date
