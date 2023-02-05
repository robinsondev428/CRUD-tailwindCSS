import React from 'react'
import { useForm } from '../hooks/useForm';

export const EditPlayerForm = ({
  id,
  name,
  age, 
  position,
  updatePlayer,
  toggleEditForm
}) => {
  const [player, handleChange] = useForm ({id, name, age, position});

  const handleSubmit =e=>{
    e.preventDefault();
    updatePlayer(id, player);
    toggleEditForm(false);

  }
  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <input
          className='bg-white w-1/6 border border-sky-300 rounded-md p-2 mr-2' 
          type="text"
          placeholder='Edit player name'
          name='name'
          value={player.name} 
          onChange={handleChange}
        />
        <input 
          className='bg-white w-1/6 border border-sky-300 rounded-md p-2 mr-2'
          type="number"
          placeholder='Edit player age'
          name='age'
          value={player.age} 
          onChange={handleChange}
        />
        <input 
          className='bg-white w-1/6 border border-sky-300 rounded-md p-2 mr-2'
          type="text"
          placeholder='Edit player position'
          name='position'
          value={player.position} 
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
    </>    
  );
};