import React from 'react'
import { PlayerItem } from './PlayerItem'

export const Players = ({ players, updatePlayer, deletePlayer }) => {
	return (
		<div>
			{players.map(player=>(
				<PlayerItem
					key={player.id}
					id={player.id}
					name={player.name}
					age={player.age}
					position={player.position}
					updatePlayer={updatePlayer}
					deletePlayer={deletePlayer}
				/>
			))}
		</div>
	)
}