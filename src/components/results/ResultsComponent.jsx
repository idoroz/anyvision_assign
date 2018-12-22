import React, { Component } from 'react';
import Result from './Result'
import { connect } from 'react-redux';


class ResultsComponent extends Component {



	render() {
console.log(this.props.searchResults.previewUrl)
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
						 previewUrlType={result.previewUrl.substr(result.previewUrl.length - 3)}
						 previewUrl={result.previewUrl}
						 previewUrlVideo={result.previewUrl.replace('m4v',"mp4")}
						 appleMusicUrl={result.collectionViewUrl}
						 trackPrice={result.trackPrice}
						 albumPrice={result.collectionPrice}
						 type={result.wrapperType}
						 primaryGenreName={result.primaryGenreName}
						 />)}
				</ul>
		);
	}
}


const mapStateToProps = state => ({
  searchResults: state.results.results,
 
});

export default connect(mapStateToProps, {})(ResultsComponent);