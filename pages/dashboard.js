import React from 'react'

const Dashboard = ({user, userInfo}) => {
  if (userInfo?.roles["admin"]) return (
    <div>dashboard</div>
  )
}

export default Dashboard