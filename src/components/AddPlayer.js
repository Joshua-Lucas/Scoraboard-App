import React, {Component} from 'react';

class AddPlayer extends Component {

    state = {
      value: ''
    };
  
    handleValueChange = (e) => {
      this.setState({ value: e.target.value });
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addPlayer(this.state.value);
      this.setState({ value: '' });
    }
  
    render() {
      return (
        <form className=" rounded-b bg-purple-500 flex justify-around w-full "onSubmit={this.handleSubmit}>
          <input 
            className="bg-purple-800 rounded w-4/5 m-4 p-2" 
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
            placeholder="Enter a player's name"
          />
          
          <input 
            className ="w-1/5 rounded m-4 py-2"
            type="submit"
            value="Add Player"
          />
        </form>
      );
    }
  }





export default AddPlayer;
