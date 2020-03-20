import React, { PureComponent } from 'react';
import {Consumer} from "./context";


class Player extends PureComponent 
{
    render(){
        const {index} = this.props;
    return(
        <Consumer>
            {({players}) => 
                (
                    <div className=" bg-gray-200 flex w-full  my-1  px-2 rounded w-1/2 ">
                        <button className="text-gray-400 hover:text-red-900 pr-2 ">&#10008;</button>
                        {players[index].name}
                    </div>
                )
            }
        </Consumer>

    );

    }
}

export default Player;