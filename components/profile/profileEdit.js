import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TextFormField from '../form/textFormField'
import SelectionBox from "../form/selectionBox";
import AddAchievements from "./addAchievements";
import AddSocialLink from "./socials";
import "react-toastify/dist/ReactToastify.css";
import { FileInputButton } from "../fileInput";
import { useAuth } from "../../context/AuthContext";

const successToastConfig = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
}

const ProfileEdit = ({
  toggle,
  handleToggle,
}) => {
  const { user, userInfo, upload, updateUserData } = useAuth()
  const data = {
    name: null,
    phone: null,
    institution: null,
    session: null
  }
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // profile picture change
  const onChange = async (image) => {
    if (image.size > 5242880) {
      toast.warn("File size should be less than 5MB", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setImage(image);
    }
  };

  // handles change in form and save in states
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      data["phone"] = e.target.value;
    } else if (e.target.name == "name") {
      data["name"] = e.target.value;
    } else if (e.target.name == "institution") {
      data["institution"] = e.target.value;
    } else if (e.target.name == "session") {
      data["session"] = e.target.value;
    }
  };

  // form validation logics
  const validate = () => {
    let validatedData = {}
    Object.keys(data).map(key => {
      data[key] ? validatedData[key] = data[key] : ''
    })
    return validatedData;
  };

  // handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validatedData = validate();
      if (image) {
        userInfo.photoURL = URL.createObjectURL(image);
        user.photoURL = URL.createObjectURL(image);
        let url = await upload(image, user, setLoading);
        data["photoURL"] = url;
      }
      handleToggle();
      Object.keys(validatedData).map(key => {
        userInfo[key] = validatedData[key]
      })
      updateUserData(user, validatedData);
      toast("Updated", successToastConfig);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${toggle} backdrop-blur-none md:backdrop-blur-sm absolute overflow-y-auto overflow-x-hidden flex justify-center z-50 w-full md:inset-0 h-modal md:h-full`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative rounded-lg shadow bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center bg-gray-600 transition ease-in-out duration-100 hover:bg-gray-800 hover:text-white"
              onClick={handleToggle}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <div className="flex flex-wrap flex-col justify-around content-center">
                <h3 className="mb-4 text-xl font-medium text-white">
                  Edit your profile
                </h3>
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0"
                  src={
                    image ? URL.createObjectURL(image) : user?.photoURL
                  }
                />
                <div className="py-6 px-3">
                  <FileInputButton
                    label="Change profile pic"
                    uploadFileName="theFiles"
                    onChange={onChange}
                    loading={loading}
                    acceptedFileTypes="image/png, image/jpeg, image/jpg"
                    allowMultipleFiles={false}
                  />
                </div>
              </div>
              <div id="forms" className="">
                <TextFormField
                  label="Name"
                  name="name"
                  handleChange={handleChange}
                  placeholder="Your name"
                />
                <br></br>
                <TextFormField
                  label="Phone Number"
                  name="phone"
                  handleChange={handleChange}
                  placeholder=""
                />
                <br></br>
                <SelectionBox
                  label="Session"
                  name="session"
                  options={['2014-2015', '2015-2016', '2016-2017', '2017-2018', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024']}
                  handleChange={handleChange}
                />
                {userInfo?.roles['alumnus'] && (
                  <TextFormField
                    label="Current Institution"
                    name="institution"
                    handleChange={handleChange}
                    placeholder={userInfo.institution}
                  />
                )}
              </div>
              <AddAchievements
                user={user}
                achievements={userInfo?.achievements}
              />

              <AddSocialLink user={user} socials={userInfo?.socials} />

              <button
                type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none mb-5 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                onClick={handleSubmit}
              >
                Save changes
              </button>

              {loading && (
                <div className="flex justify-center m-5">
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
                    Updating...
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
