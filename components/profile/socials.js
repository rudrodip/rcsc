// the component is responsible for adding and deleting achievements in user profile

// necessary dependencies
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { updateUserData } from "../../src/config/firebase.config";
import { useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import

const submit = (id, handleAction) => {
  let options = {
    title: 'Are you sure to delete?',
    // message: 'delete social media link',
    buttons: [
      {
        label: 'No',
        onClick: () => console.log('valo korsen delete na kore 🙂')
      },
      {
        label: 'Yes',
        onClick: () => handleAction(id)
      }
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
  };
  confirmAlert(options)
}

// the main component
const AddSocialMedia = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [social, setSocial] = useState("");
  const [socialName, setSocialName] = useState("");
  const [socials, setSocials] = useState("");

  // setUser and handleChange in the form
  useEffect(() => {
    props.user && setUser(props.user);
    props.socials && setSocials(props.socials);
  }, [props.socials, props.user]);

  const handleChange = (e) => {
    if (e.target.name == "social") {
      setSocial(e.target.value);
    }
    if (e.target.name == "name") {
      setSocialName(e.target.value);
    }
  };

  // validiting the form
  const validate = () => {
    if (social.length > 1 && social.startsWith("https://")) {
      return true;
    } else {
      toast.warn("Link should start with 'https://'", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // this function adds the "Achievement" given by the user to store in his profile in DB
  async function addSocial(user, data) {
    setLoading(true);
    if (!user) return;
    try {
      updateUserData(user, data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  // this function delete the "Achievement" given by the user to store in his profile in DB
  async function deleteSocial(user) {
    setLoading(true);
    if (!user) return;
    try {
      let social_object = { socials };
      updateUserData(user, social_object);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  // handles the delete function
  const handleDelete = async (key) => {
    let social_key = key.charAt(0).toUpperCase() + key.slice(1);
    setSocials(({ [social_key]: value, ...socials }) => socials);
    delete props.socials[social_key];
    await deleteSocial(user);
  };

  // handle the submit function
  const handleSubmit = async (e) => {
    // set the loading to true so that user can't use the button until the proceess is finished
    setLoading(true);
    e.preventDefault();

    // checking the validation
    if (validate()) {
      try {
        socials[socialName] = social;
        let social_object = { socials }
        setSocials(socials)
        console.log(socials);
        await addSocial(user, social_object);
      } catch (error) {
        alert(error);
      }

      // seting the form to default
      setSocial("");
      setSocialName("");
    }

    // setting the loading to false so that user can again use the button
    setLoading(false);
  };
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />

      <h1 className="mb-4 text-xl font-medium text-white">
        Customize Social Media
      </h1>

      <div className="my-4 mb-10 text-left">
        {socials &&
          Object.keys(socials).map((i, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between border-2 border-gray-600 m-2 rounded-md p-2 bg-gray-600"
              >
                <p className="text-white text-md lg:text-sm flex items-center justify-start italic">
                  <a
                    href={socials[i]}
                    className="text-cyan-500"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {i.charAt(0).toUpperCase() + i.slice(1)}
                  </a>
                </p>
                <div>
                  <button
                    className="pointer-cursor"
                    onClick={()=>submit(i, handleDelete)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      className="fill-red-500 hover:scale-125 transition duration-200"
                    >
                      <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Social Media Name
        </label>
        <input
          type="text"
          name="name"
          id="social"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5"
          placeholder="Social Media Name"
          onChange={handleChange}
          value={socialName}
          required
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Social Media Link
        </label>
        <input
          type="text"
          name="social"
          id="link"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5"
          placeholder="Social Media Link"
          onChange={handleChange}
          value={social}
          required
        />
      </div>

      <button
        type="submit"
        className="w-1/4 text-white focus:ring-4 focus:outline-none mb-5 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        onClick={handleSubmit}
        disabled={loading}
      >
        Add
      </button>
    </div>
  );
};

export default AddSocialMedia;

// structure -> Achievements with delete button > Add achievements form > Submit button
