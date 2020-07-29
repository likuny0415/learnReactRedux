import React from "react";

class SearchBar extends React.Component {
	//  change to control element
	// 1. initilate the state
	state = { term: "" };

	render() {
		return (
			// give it customer styling
			<div className="search-bar ui segment">
				<form className="ui form ">
					<div className="field">
						<label>Video Search</label>
						{/* we need to change it from uncontrolled to controlled element
                            to make sure we store our information inside of the component 
                            instead DOM 
                            value: input == term
                            onChange: onInputChange == the input user added
                         */}
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
