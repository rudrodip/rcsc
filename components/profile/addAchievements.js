// the component is responsible for adding and deleting achievements in user profile

// necessary dependencies
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { db } from "../../src/config/firebase.config";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import

// the main component
const AddAchievements = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [achievement, setAchievement] = useState("");
  let achievements = props.achievements;

  // setUser and handleChange in the form
  useEffect(() => {
    props.user && setUser(props.user);
  }, [props.user]);

  const submit = (achievement, index, handleAction) => {
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
          onClick: () => handleAction(achievement, index)
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
    };
    confirmAlert(options)
  }

  const handleChange = (e) => {
    if (e.target.name == "achievement") {
      setAchievement(e.target.value);
    }
  };

  // validiting the form
  const validate = () => {
    if (achievement.length > 1) {
      return true;
    } else {
      toast.warn("Form not valid! Please check again", {
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
  async function addAchievements(user, data) {
    setLoading(true);
    if (!user) return;
    const userRef = doc(db, `user/${user.uid}`);
    try {
      await updateDoc(userRef, {
        achievements: arrayUnion(data),
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  // this function delete the "Achievement" given by the user to store in his profile in DB
  async function deleteAchievement(user, data) {
    setLoading(true);
    if (!user) return;
    const userRef = doc(db, `user/${user.uid}`);
    try {
      await updateDoc(userRef, {
        achievements: arrayRemove(data),
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  // handles the delete function
  const handleDelete = async (data, index) => {
    achievements.splice(index, 1);
    await deleteAchievement(user, data);
  };

  // handle the submit function
  const handleSubmit = async (e) => {
    // set the loading to true so that user can't use the button until the proceess is finished
    setLoading(true);
    achievements.push(achievement);
    // to stop relaoding the page
    e.preventDefault();

    // checking the validation
    if (validate()) {
      try {
        await addAchievements(user, achievement);
      } catch (error) {
        alert(error);
      }
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

      <h1 className="mt-4 text-xl font-medium text-white">
        Customize your achievements
      </h1>

      <div className="mb-10 text-left">
        {achievements &&
          achievements.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between border-2 border-gray-600 m-2 rounded-md p-2 bg-gray-600"
              >
                <p className="text-white text-sm flex items-center justify-start">
                  {achievement}
                </p>
                <div>
                  <button
                    className="pointer-cursor "
                    onClick={() => submit(achievement, index, handleDelete)}
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
          Add your achievements
        </label>
        <input
          type="text"
          name="achievement"
          id="name"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white outline-none mb-5"
          placeholder="Achievement"
          onChange={handleChange}
          value={achievement}
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

export default AddAchievements;

// structure -> Achievements with delete button > Add achievements form > Submit button
