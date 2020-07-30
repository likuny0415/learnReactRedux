import React from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

const KEY = 'AIzaSyCh04U_u2wEFb5uQCJPf27uh--9kGEG_Pw';

class App extends React.Component {
	// initilate the state
	state = { videos: [] ,selectedVideo: null }

	componentDidMount() {
		this.onTermSubmit('buildings')
	}

	// callback function
	onTermSubmit = async (term) => {
		// response: info about the request we made
		// videos are stores in response.data.items
		// we need to initiate the state and store info 
		// in it
		const response = await youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5,
				key: KEY
			}
		})

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		})
	}

	// callback function
	onVideoSelect = (video) => {
		this.setState({selectedVideo: video})
	}

	render() {
		return (
			// ui container put the search bar in center
			<div className="ui container">
				{/* render callback into SearchBar  */}
				<SearchBar onFormSubmit={this.onTermSubmit}  />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo}/>
						</div>
						<div className='five wide column'>
							<VideoList 
								onVideoSelect={this.onVideoSelect} 
								videos={this.state.videos} />	
						</div>	
					</div>
				</div>
			</div>
		);
	}
}

export default App;
