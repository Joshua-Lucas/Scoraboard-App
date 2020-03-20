import React from 'react';
import { Consumer } from './context';
import Player from './Player';

const Playerlist = () => {

    return(
        <Consumer>
            {({players}) => (
                <React.Fragment>
                    {players.map( (player,index) =>
                        <Player
                            key={player.id.toString()}
                            index={index}
                        />
                    )}
                </React.Fragment>
            )}
        </Consumer>

    );

}

export default Playerlist;