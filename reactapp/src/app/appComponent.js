// container of shooping cart application
import React, {Component} from "react"; // React - is default import and Component is a named import

export default class AppComponent extends Component {

	render() {
		let User = {
			name: 'Smart Student',
		}

		// we'll write our html + js in JSX (javascript as xml) format as below
		// it must return only one parent
		return(
			<>
				<h1>This is application Component</h1>
				<div><b>{User.name}</b></div>
				<h1>This will hole our Shopping Cart Application</h1>
				<input type={"text"} value='Enter Name'> </input>
			</>
		)


	}
}

