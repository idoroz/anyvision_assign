import React, { Component } from 'react';
import TopResult from './TopResult'

class TopTenList extends Component {

	render(){

		let allResults = this.props.topten;
		let size = 10;
		let items = allResults.slice(0, size)

	if(!this.props.detailView) {
return (
	<div className="topTenList">
			<ul className="collection with-header">
			        <li className="collection-header"><h4>Top 10 Searches</h4></li>
					{items.map(result => <TopResult
					 key={result._id} 
					 artistName={result._id} 
					 onSearch={this.props.returnToSearch} 
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


export default TopTenList;