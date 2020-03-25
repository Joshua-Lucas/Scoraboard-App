import React from 'react';
import { Consumer } from './context';

const AddPlayer = () =>{

   const playerInput = React.createRef();
  

  
    return(
        <Consumer>
        
            {({actions}) => {
                
                const handleSubmit = (e) => {
                    e.preventDefault();
                    actions.addPlayer(playerInput.current.value);
                    e.currentTarget.reset();
                  }
                
                return (
                    <form className=" rounded-b bg-blue-500 flex justify-around w-full "onSubmit={handleSubmit}>
                    <input 
                        className="bg-blue-700 rounded w-4/5 m-4 p-2" 
                        type="text"
                        ref={playerInput}
                        placeholder="Enter a player's name"
                    />
                    
                    <input 
                        className ="w-1/5 rounded m-4 py-2"
                        type="submit"
                        value="Add Player"
                    />
                    </form>
                );  
            }}
        </Consumer>
      );

  }





export default AddPlayer;
