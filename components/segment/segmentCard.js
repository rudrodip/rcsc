import React from 'react'

const SegmentCard = ({ name, desc, img, link, details }) => {
	return (
		<div className="card w-96 bg-base-100 shadow-xl image-full m-2 hover:scale-105 transition-all duration-150" >
			<figure><img src={img} alt={name} /></figure>
			<div className="card-body">
				<h2 className="card-title text-white">{name}</h2>
				<p className='text-gray-300'>{desc}</p>
				<div className="card-actions justify-end">
					<a className="btn bg-cyan-500 text-white hover:bg-blue-600" href={link} target="_blank" rel="noreferrer">Register</a>
					<a className="btn bg-cyan-500 text-white hover:bg-blue-600" href={details}>Details</a>
				</div>
			</div>
		</div>
	)
}

export default SegmentCard