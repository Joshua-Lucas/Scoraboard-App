import React from 'react';
import { Consumer } from './context';


const Score = () => {
    return(
        <Consumer>  
            {context => {
                return (
                    <div className=" bg-gray-500 p-auto px-32">
                       <span>0</span>
                    </div>    
                );
            }}
        </Consumer>
    );
}

export default Score; 