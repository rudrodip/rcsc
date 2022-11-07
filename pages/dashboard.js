import React from 'react'

const dashboard = ({user, userInfo}) => {
  if (userInfo?.roles["admin"]) return (
    <div>dashboard</div>
  )
}

export default dashboard