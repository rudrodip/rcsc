import React from 'react'
import Head from 'next/head'
import Table from '../components/dashboard/Usertable'
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../src/config/firebase.config";
import { useState, useEffect } from "react";

const userListFormat = {
  "Profile": "photoURL",
  "Name": "name",
  "Designation": "designation",
  "Class": "class",
  "Roll": "roll",
  "Blogs": "blogs"
}

const Dashboard = ({user, userInfo}) => {
  if (!userInfo?.roles["admin"]) return
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getUsers() {
      const ref = collection(db, "user");
      const docSnaps = await getDocs(ref);
      let users = docSnaps.docs
      setUsers(users)
    }
    
    getUsers();
  }, []);
  
  return (
    <div>
      <Head>
        <title>RCSC - Dashboard</title>
        <link rel="icon" href="/logo/rcsc-logo.png" />
      </Head>

      Dashboard
      <Table listFormat={userListFormat} list={users}/>
    </div>
  )
}

export default Dashboard