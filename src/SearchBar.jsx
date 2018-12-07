import React, { Component } from 'react';

class searchbar extends Component {

  constructor(props){
super(props);

this.state = {
  searchTerm : ''
}

this.updateInput = this.updateInput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.onKeyPress = this.onKeyPress.bind(this);
}

updateInput(event){
this.setState({searchTerm : event.target.value})
}

handleSubmit(){
this.props.search(this.state.searchTerm)
}

onKeyPress = (e) => {

        if(e.key === 'Enter'){
          this.props.search(this.state.searchTerm)
        }
    }

render(){

	if(!this.props.detailView) {
return (
    <div className="input-field">
    <input id="searchbar" placeholder="Search for Artist or Track..." onChange={this.updateInput}  onKeyPress={this.onKeyPress}></input>
    <input type="submit" onClick={this.handleSubmit} style={{display: 'none'}}></input>
    </div>
  );
}
		if(this.props.detailView) {
		return null;
		}
}
}

export default searchbar;