import React, { Component } from 'react';

 class topresult extends Component {
	render() {
return (
		<li className="collection-item topResult" onClick = {() => this.props.onSearch(this.props.artistName)}>
		{this.props.artistName}<br/>
		</li>
		);
	}
}
export default topresult;