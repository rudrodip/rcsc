import React from 'react'
import Countdown from 'react-countdown';

// Random component
const Completionist = () =>
  <>
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white">Event Started!</h2>
        <p>Join us at Rajshahi College</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See updates!</button>
        </div>
      </div>
    </div>
  </>

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    // return <span>{hours}:{minutes}:{seconds}</span>;
    return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max m-3 place-content-center">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-white">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": days, color: 'white'  }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-white">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": hours, color: 'white'  }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-white">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": minutes, color: 'white' }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-white">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": seconds, color: 'white'  }}></span>
          </span>
          sec
        </div>
      </div>
    )
  }
}

const CustomCountdown = ({date}) => {
  return (
      <Countdown
        date={date}
        renderer={renderer}
      />
  )
}

export default CustomCountdown