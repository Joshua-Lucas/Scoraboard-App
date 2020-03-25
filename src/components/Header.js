import React from 'react';
import Stats from './Stats';




const Header = ({title}) => {

    return(
        <div className=" rounded-t bg-blue-500 flex w-full ">
            <div className="flex justify-center" >
                <Stats/>
            </div> 
            <div className="flex  flex-1 justify-center" >
                <h1 className="text-4xl">{title}</h1>
            </div>
        </div>
    );


}

Header.defaultProps = {
    title: "Scoreboard"
  };

export default Header;