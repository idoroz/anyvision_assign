import React, { Component } from 'react';
import Moment from 'react-moment';
import {Col, Card, Chip} from 'react-materialize'
import { connect } from 'react-redux';

 class DetailComponent extends Component {



	render() {

	const dateToFormat = this.props.selected.releaseDate;
	const lengthToFormat = this.props.selected.trackLength


return (
		<div className = "detailWrapper">
			<Col m={6} s={6}>
		  		<Card horizontal>
		      		<p>
		      			<img src={this.props.selected.artwork} alt="" height="100" width="100"/><br />
							Artist : {this.props.selected.artistName}<br />
							Track : {this.props.selected.trackName || this.props.selected.album}<br />
							Album : {this.props.selected.album}<br /><br />
							Length: <Moment format="mm:ss">{lengthToFormat}</Moment><br/>
							Release Date : <Moment format="D/M/YYYY">{dateToFormat}</Moment><br/>
							Genre: {this.props.selected.genre || this.props.selected.primaryGenreName}<br /><br />
							Track Price: ${this.props.selected.trackPrice}<br />
							Album Price: ${this.props.selected.albumPrice}<br />
							<a href={this.props.selected.appleMusicUrl}>View in Apple Music</a> <br /><br />
							{this.props.selected.previewUrlType === 'm4a' ? <audio ref="audio_tag" src={this.props.selected.previewUrl} controls />: <video width ="480" height="351" controls>
							<source src={this.props.selected.previewUrlVideo} type="video/mp4" ></source></video>};	
					 </p>
					<Chip className="topResult backBtn" onClick = {() => window.history.go(-1)}>Back</Chip>
		    	</Card>
			</Col>
		</div>
	)

		   
	}
}

const mapStateToProps = state => ({
  selected: state.details.details,
 
});

export default connect(mapStateToProps, {})(DetailComponent);
