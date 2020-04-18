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
                        if(this.state.value === '')
                        {
                            return false;
                        }
                        actions.changeScore(this.props.index, this.state.value)
                        this.setState({ value: '' })
                    }
                   
                   return (
                    
                        <form className="flex justify-center sm:flex-none sm:mr-5" onSubmit={handleSubmit} >
                            <input className="w-3/5 bg-gray-100  focus:bg-white text-center text-2xl placeholder-black sm:w-full bg-none" type="number"  
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