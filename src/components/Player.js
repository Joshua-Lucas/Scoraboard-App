import React, { PureComponent } from 'react';
import {Consumer} from "./context";
import Score from './Score';


class Player extends PureComponent 
{
    render(){
        const {index} = this.props;
    return(
        <Consumer>
            {({players, actions}) => 
                (
                    <div className=" bg-gray-200 flex w-full m-1 p-2 py-5 w-1/2 ">
                        <div className=" flex-1 text-2xl">
                            <button className="text-gray-400  hover:text-red-900 pr-2 " onClick={() => actions.removePlayer(players[index].id)}>&#10008;</button>
                            {players[index].name}
                        </div>
                        <Score
                            index={index}
                        />
                    </div>
                   
                )
            }
        </Consumer>

    );

    }
}

export default Player;