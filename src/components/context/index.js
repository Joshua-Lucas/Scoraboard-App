import React, { Component } from 'react';


const CardScoreboardContext = React.createContext();

export class Provider extends Component 
{

    state = {
        players: [
            {
                name: 'Example',
                score: 0,
                id: 1
            }
        ]
    };

    render(){
        return (
            <CardScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {}
            }}>
                {this.props.children}
            </CardScoreboardContext.Provider>
        );
    }

}

export const Consumer = CardScoreboardContext.Consumer;