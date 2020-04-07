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

    // Players List Component

    handleRemovePlayer = (id) => {
        this.setState(prevState => ({

            players: prevState.players.filter(p => p.id !== id)

        }));
    }

    handleScoreChange = (index,input) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += parseInt(input)
        }));
    }

    // Add Player Component
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
                    removePlayer: this.handleRemovePlayer,
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