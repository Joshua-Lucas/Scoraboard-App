import React from 'react';
import Stats from './Stats';




const Header = ({title}) => {

    return(
        <div>
            <Stats/> 
            <h1>{title}</h1>
        </div>
    );


}

Header.defaultProps = {
    title: "Scoreboard"
  };

export default Header;