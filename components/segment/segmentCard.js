import React from 'react'

const SegmentCard = ({ name, desc, img, link }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full m-2">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    )
}

export default SegmentCard