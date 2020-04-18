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
                    <form className=" mt-1 rounded-b bg-blue-500 flex flex-col items-center md:flex-row md:justify-around w-full "onSubmit={handleSubmit}>
                        <input 
                            className="w-4/5 m-2 p-2 bg-blue-700 rounded focus:bg-gray-300 md:m-4 " 
                            type="text"
                            ref={playerInput}
                            placeholder="Enter a player's name"
                        />
                        
                        <input 
                            className =" mb-2 py-2 w-4/5 rounded hover:bg-gray-300 hover:font-medium cursor-pointer md:w-1/5 md:m-4"
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
