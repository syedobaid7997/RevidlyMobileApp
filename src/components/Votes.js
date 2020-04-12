import React from 'react';

class Votes extends React.Component{
	constructor(){
    super();
    this.state = {
      upvotes:0,
      downvotes:0
    };
  }
  increUpvotes = () =>{
    this.setState({
        upvotes : this.state.upvotes +1
    });
  }
  increDownvotes = () =>{
    this.setState({
        downvotes : this.state.downvotes +1
    }); 
  }
	render(){
		return(
			<div>
			<button onClick={this.increUpvotes}>Up Votes </button>
			{this.state.upvotes}
			<button onClick={this.increDownvotes}>Down Votes </button>
			{this.state.downvotes}
			</div>
		);
	}
}
export default Votes;