import React, { useState } from 'react';
import { AddPlayerForm } from './components/AddPlayerForm';
import { v4 as uuid } from 'uuid';
import { Player } from './types/types';
import { Players } from './components/Players';

const App = () => {
  const initialData = [{
    id: uuid(),
    name: 'Lionel Messi',
    age: 30,
    position: "Central Forward"
  }];

  const [players, setPlayers] = useState(initialData)
  const addPlayer = (newPlayer: Player) => {
    newPlayer.id = uuid();
    setPlayers([...players, newPlayer]);
  }
  const deletePlayer = (playerId) => {
    const deletedPlayer = players.filter(player => playerId !==player.id);
    setPlayers(deletedPlayer); 
  }
  const updatePlayer = (playerId, newData: Player) => {
    let updatedPlayer = players.map(player => {
      if (player.id === playerId) {
        return {
          id: player.id,
          name: newData.name,
          age: newData.age,
          position: newData.position
        }
      }
      return player;
    });
    setPlayers(updatedPlayer);
  }

  return (
    <div className="m-4">
      <h1 className='text-xl font-semibold mb-2 text-cyan-400 text-center'>Register Players</h1>
      <AddPlayerForm addPlayer={addPlayer} />
      <Players 
        players={players}
        updatePlayer={updatePlayer}
        deletePlayer={deletePlayer}
      />
    </div>
  );
}

export default App;
