import React, { useState } from 'react';
import { EditPlayerForm } from './EditPlayerForm';

export const PlayerItem = ({
	id,
	name,
	age,
	position,
	deletePlayer,
	updatePlayer,
}) => {
	const [isEdit, setToggleEditing] = useState(false);
  
	if(isEdit){
		return(
			<EditPlayerForm
				id={id}
				name={name}
				age={age}
				position ={position}
				updatePlayer={updatePlayer}
				toggleEditForm = {setToggleEditing}
			/>
		)
	}

	return (
    <div className='flex mt-2 justify-center'>
			<h2>{name}</h2>
			<br />
			<h3>Age: {age}</h3>
			<br />
			<h3>Position: {position}</h3>
			<br />
			<button onClick={()=> setToggleEditing(!isEdit)} className='bg-transparent hover:bg-cyan-500 text-cyan-700 hover:text-white border border-cyan-500 hover:border-transparent p-2 rounded-md'>Edit</button>
			<button onClick={()=> deletePlayer(id)} className='bg-transparent hover:bg-cyan-500 text-cyan-700 hover:text-white border border-cyan-500 hover:border-transparent p-2 rounded-md'>Delete</button>
		</div>
  )
}