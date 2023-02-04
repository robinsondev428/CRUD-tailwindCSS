import React, { useState } from 'react';
import { FormProps } from '../types/types';
import { Player } from '../types/types';

export const AddPlayerForm = ({addPlayer}:FormProps) => {
	const initialValue: Player = {
		id: '',
		name: '',
		age: 0,
		position: '',
	};
	const [player, setPlayer] = useState(initialValue);
	const handleSubmit = (e:any) => {
		e.preventDefault();
		addPlayer(player);
		setPlayer(initialValue);
	};
	const handleChange = (e:any)=>{
		setPlayer({...player, [e.target.name]:e.target.value});
	}
	return (
		<>
			<form onSubmit={handleSubmit} className='flex justify-center'>
				<input
					className='bg-white w-1/6 border border-sky-300 rounded-md p-2 mr-2' 
					type="text" 
					name='name'
					placeholder='Enter Player Name'
					onChange={handleChange}
					value={player.name}	
				/>
				<input 
					className='bg-white w-1/6 border border-sky-300 rounded-md p-2 mr-2'
					type="number" 
					name='age'
					placeholder='Enter Player age'
					onChange={handleChange}
					value={player.age}	
				/>
				<input 
					className='bg-white w-1/6 border border-sky-300 rounded-md p-2 mr-2'
					type="position" 
					name='position'
					placeholder='Enter Player Position'
					onChange={handleChange}
					value={player.position}	
				/>
				<button className='bg-transparent hover:bg-cyan-500 text-cyan-700 hover:text-white border border-cyan-500 hover:border-transparent p-2 rounded-md'>Add this player</button>
			</form>
		</>
	)
};