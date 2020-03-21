import React from 'react';
import Header from './Header';
import Playerlist from './Playerlist';
// import AddPlayer from './AddPlayer'


const App = () => {

    return (
      <div className=" flex flex-col items-center w-full h-full ">
        <Header/>
        <Playerlist/>
      </div>
    );

}

export default App;
