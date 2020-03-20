import React from 'react';
import {Consumer} from './context/index';





const Stats = () => {
    return(
    <Consumer>
        
        {context => {
            
            const totalPlayers = context.players.length;
            
            return(
                <div className="m-auto p-4">
                    <p> Players: {totalPlayers}</p>
                </div>
            );
        }}
    </Consumer>
    );    
}

export default Stats