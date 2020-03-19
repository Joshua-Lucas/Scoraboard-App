import React from 'react';
import Stats from './Stats';




const Header = ({title}) => {

    return(
        <div className="bg-purple-500">
            <Stats/> 
            <div className="flex justify-center flex-grow " >
                <h1 className="text-4xl">{title}</h1>
            </div>
        </div>
    );


}

Header.defaultProps = {
    title: "Scoreboard"
  };

export default Header;