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
            },
            {
                name: 'John',
                score: 0,
                id: 2
            }
        ]
    };

// Player id Counter
    prevPlayerId = 2;


// Event Handler Functions

    handleScoreChange = (index,input) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += input
        }));
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
            players: [
                ...prevState.players,
                {
                    name,
                    score: 0,
                    id: this.prevPlayerId += 1
                }
            ]
        };
        });
    }


    render(){
        return (
            <CardScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                    changeScore: this.handleScoreChange,
                    addPlayer: this.handleAddPlayer
                }
            }}>
                {this.props.children}
            </CardScoreboardContext.Provider>
        );
    }

}

export const Consumer = CardScoreboardContext.Consumer;