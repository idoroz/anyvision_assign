import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopTen } from '../../actions/topTenAction';
import { searchTerm } from '../../actions/searchAction';
import TopResult from './TopResult'


class TopTenList extends Component {

	componentWillMount() {
    this.props.fetchTopTen();
  }

	render(){
		let items = this.props.topten;
	if(!this.props.detailView) {
return (
	<div className="topTenList">
			<ul className="collection with-header">
			        <li className="collection-header"><h4>Top 10 Searches</h4></li>
					{items.map(result => <TopResult
					 key={result._id} 
					 artistName={result._id} 
					 onSearch={this.props.searchTerm} 
					 />)}
			</ul>
	</div>
  );
}
		if(this.props.detailView) {
		return null;
		}
}
}


TopTenList.propTypes = {
  fetchTopTen: PropTypes.func.isRequired,
  searchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  topten: state.list.items,
 
});

export default connect(mapStateToProps, { fetchTopTen, searchTerm })(TopTenList);