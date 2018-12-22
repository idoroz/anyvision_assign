import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchTerm } from '../../actions/searchAction';

class searchbar extends Component {

constructor(props){
      super(props);
      this.state = {
        searchQuery : '',
  }
      this.updateInput = this.updateInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
  }

updateInput(event){
    this.setState({searchQuery : event.target.value})
}

handleSubmit(){
    this.props.searchTerm(this.state.searchQuery)
}

onKeyPress = (e) => {
    if(e.key === 'Enter'){
        this.props.searchTerm(this.state.searchQuery)
        }
    }


render(){

console.log(this.props)
return (
    <div className="input-field">
        <input id="searchbar" placeholder="Search for Artist or Track..." onChange={this.updateInput}  onKeyPress={this.onKeyPress}></input>
        <input type="submit" onClick={this.handleSubmit} style={{display: 'none'}}></input>
    </div>
  );

}
}



searchbar.propTypes = {
  searchTerm: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  results: state.results.items,

 
});

export default connect(mapStateToProps, { searchTerm })(searchbar);