import React from "react";
import Head from "next/head";
import MiniProfile from "../components/profile/miniProfile";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../src/config/firebase.config";

function Executives({ members }) {

  const hierarchy = [
    "president",
    "general secretary",
    "secretary of human resource",
    "treasurer",
    "organizing secretary",
    "academic co-ordinator",
    "project co-ordinator",
    "secretary of it",
    "publication secretary",
    "promotional secretary",
  ];

  const sort_exec = (execs) => {
    let sorted = []
    hierarchy.map(i => {
      execs?.map(exec => {
        if (exec.designation.toLowerCase() == i && !sorted.includes(exec)) {
          sorted.push(exec)
        }
      })
    })
    return sorted
  }

  const executives = sort_exec(members)
  return (
    <div>
      <Head>
        <title>RCSC - Executives</title>
        <meta
          name="description"
          content="Official Website of Rajshahi College Science Club"
          key="description"
        />
        <meta property="og:type" content="website" key="type"/>
        <meta property="og:title" content="Executive Members" key="title"/>
        <meta property="og:description" content="Executive members of RCSC" key="description"/>
        <meta property="og:url" content="https://rcsc.vercel.app/executives" key="url"/>
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" key="image"/>
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-2 py-6 lg:py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="p-4 text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-400 to-cyan-500 tracking-widest">
              Executive Members
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            </p>
          </div>

          {!executives ? (
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
                Loading...
              </button>
            </div>
          ) : (
            ""
          )}

          <div className="flex flex-wrap">
            {executives &&
              executives.map((exec) => {
                if (exec.roles['executive']){
                  return (
                    <MiniProfile
                      key={exec.id}
                      name={exec.name}
                      role={exec.designation}
                      link={`/user/${exec.id}`}
                      img={exec.photoURL}
                      batch={exec.batch}
                      institution={exec.institution}
                      number={exec.phone}
                      mail={exec.email}
                    />
                  );
                }
              })}
          </div>
        </div>
      </section>


      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-2 py-6 lg:py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="p-4 text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-400 to-cyan-500 tracking-widest">
              The Querists
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            </p>
          </div>

          {!members ? (
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
                Loading...
              </button>
            </div>
          ) : (
            ""
          )}

          <div className="flex flex-wrap">
            {members &&
              members.map((member) => {
                if (member.roles['querist']){
                  return (
                    <MiniProfile
                      key={member.id}
                      name={member.name}
                      role={member.designation}
                      link={`/user/${member.id}`}
                      img={member.photoURL}
                      batch={member.batch}
                      institution={member.institution}
                      number={member.phone}
                      mail={member.email}
                    />
                  );
                }
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Executives;


export async function getStaticProps() {
  const ref = collection(db, "user");
  const executives = query(ref, where("roles.executive", "==", true));
  const querists = query(ref, where("roles.querist", "==", true));
  const execSnap = await getDocs(executives);
  const queristSnap = await getDocs(querists);
  let members = []

  execSnap.forEach(
    doc => members.push({
      id: doc.id,
      ...doc.data()
    })
  )
  queristSnap.forEach(
    doc => members.push({
      id: doc.id,
      ...doc.data()
    })
  )
  return {
    props: {
      members
    }
  }
}