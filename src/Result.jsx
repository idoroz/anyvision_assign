import React, { Component } from 'react';
import {Card, Col, CardTitle} from 'react-materialize'

 class result extends Component {
	render() {
		return (
			<li>
				<Col m={12} s={12}>
					<div className="cardResult" onClick = {() => this.props.onView(this.props)}>
  						<Card horizontal header={<CardTitle image={this.props.artwork}></CardTitle>}>
      						<p>
								Artist : {this.props.artistName}<br />
								Track : {this.props.trackName || this.props.album}<br />
							</p>
			
    					</Card>
   					 </div>
				</Col>
			</li>
		);
	}
}



export default result;