import React, { useState } from 'react';
import { AddPlayerForm } from './components/AddPlayerForm';
import { v4 as uuid } from 'uuid';
import { Player } from './types/types';

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

  return (
    <div className="m-4">
      <h1 className='text-xl font-semibold mb-2 text-cyan-400 text-center'>Register Players</h1>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}

export default App;
