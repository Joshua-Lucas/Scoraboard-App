import React, { Component } from 'react';


const CardScoreboardContext = React.createContext();

export class Provider extends Component 
{

    state = {
        players: []
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