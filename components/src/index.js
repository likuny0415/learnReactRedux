import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ArrovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ArrovalCard>
				<h4>Pay attention!</h4>
				Are you sure you want to do this thing?
			</ArrovalCard>
			<ArrovalCard>
				<CommentDetail
					author="Sam"
					postAtTime="4:31PM"
					commentContent="What a nice day!"
					avatar={faker.image.avatar()}
				/>
			</ArrovalCard>
			<ArrovalCard>
				<CommentDetail
					author="Bob"
					postAtTime="1:33AM"
					commentContent="Bad mood!"
					avatar={faker.image.avatar()}
				/>
			</ArrovalCard>
			<ArrovalCard>
				<CommentDetail
					author="Alex"
					postAtTime="3:20PM"
					commentContent="Nice food!"
					avatar={faker.image.avatar()}
				/>
			</ArrovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
