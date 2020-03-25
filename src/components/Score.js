import React, { Component } from 'react';
import { Consumer } from './context';


class Score extends Component
{
    constructor({props}){
        super(props);
        this.state = {value: 0};
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({value: e.target.value})
    }

    render() {
        return(
            <Consumer>  
                {({players, actions}) => {
                       

                       const handleSubmit = (e) => {
                        e.preventDefault();
                        actions.changeScore(this.props.index, this.state.value)
                        this.setState({ value: '' })
                    }
                   
                   return (
                    
                        <form className="mr-5" onSubmit={handleSubmit} >
                            <input className="text-center text-2xl placeholder-black" type="text"  
                            value={this.state.value} 
                            onChange={this.handleChange} 
                            placeholder={players[this.props.index].score}/>
                        </form>
    
                    );
                }}
            </Consumer> 
        );
    }           
}

export default Score; 