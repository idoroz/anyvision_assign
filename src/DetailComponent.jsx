import React, { Component } from 'react';
import Moment from 'react-moment';
import {Col, Card, Chip} from 'react-materialize'

 class DetailComponent extends Component {
	render() {
	const dateToFormat = this.props.selected.releaseDate;
	const lengthToFormat = this.props.selected.trackLength
	const wrapperType = this.props.selected.type ==='track';

		if(this.props.detailView) {

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
					Track Price: ${wrapperType ? this.props.selected.trackPrice.toFixed(2) : this.props.selected.albumPrice.toFixed(2)}<br />
					Album Price: ${this.props.selected.albumPrice.toFixed(2)}<br />
					<a href={this.props.selected.appleMusicUrl}>View in Apple Music</a> <br /><br />
					{this.props.selected.previewUrl.substr(this.props.selected.previewUrl.length - 3) === 'm4a' ? <audio ref="audio_tag" src={this.props.selected.previewUrl} controls /> : <video width ="480" height="351" controls>
					<source src={this.props.selected.previewUrl.slice(0, -3) + 'mp4'} type="video/mp4" ></source></video>};	
			 </p>
			<Chip className="topResult backBtn" onClick = {() => this.props.returnToSearch(this.props.selected.artistName)}>Back</Chip>
    	</Card>
	</Col>
</div>
		);
		}

		if(!this.props.detailView) {
		return null;
		}
		   
	}
}

export default DetailComponent;



