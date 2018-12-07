import React, { Component } from 'react';
import Result from './Result'

class ResultsComponent extends Component {
	render() {

	
		return (
				<ul className="theShelf">
						{this.props.searchResults.map(result => <Result
						 key={result.previewUrl} 
						 artistName={result.artistName}
						 trackName={result.trackName}
						 album={result.collectionName}
						 artwork={result.artworkUrl100}
						 releaseDate={result.releaseDate}
						 trackLength={result.trackTimeMillis}
						 genre={result.primaryGenreName}
						 previewUrl={result.previewUrl}
						 appleMusicUrl={result.collectionViewUrl}
						 trackPrice={result.trackPrice}
						 albumPrice={result.collectionPrice}
						 type={result.wrapperType}
						 primaryGenreName={result.primaryGenreName}
						 onView={this.props.onView} 
						 />)}
				</ul>
		);
	}
}


export default ResultsComponent;