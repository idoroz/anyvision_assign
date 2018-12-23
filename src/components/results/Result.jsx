import React, { Component } from 'react';
import { Card, Col, CardTitle } from 'react-materialize';
import { connect } from 'react-redux';
import { detailView } from '../../actions/detailsAction';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 class result extends Component {

constructor(props) {
	super(props);
	this.state = {
		details : []
	}
   this.detailView = this.detailView.bind(this);
}

detailView(data) {
	this.props.detailView(data)
}

	render() {


		return (
			<li>
				<Col m={12} s={12}>
				<Link to="/detail">
					<div className="cardResult" onClick={() => this.detailView(this.props)}>
  						<Card horizontal header={<CardTitle image={this.props.artwork} ></CardTitle>}>
      						<p>
								Artist : {this.props.artistName}<br />
								Track : {this.props.trackName || this.props.album}<br />
							</p>
    					</Card>
   					 </div>
   					 </Link>
				</Col>
			</li>
		);
	}
}




export default connect(null, {detailView})(result);