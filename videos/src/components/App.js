import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
	render() {
		return (
			// ui container put the search bar in center
			<div className="ui container">
				<SearchBar />
			</div>
		);
	}
}

export default App;
