import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import getBooks from "../../xhr/getAllBooks";
import MediaCard from "../card/Card";

export default class SearchByTitle extends Component {
	constructor(props) {
		super(props);

	}
	onchangetitle = e => {
		this.props.onTitleChange(e);
	};
	render() {
		return (
			<div>
				<h2>Find book by title :</h2>

				<form noValidate autoComplete="off">
					<TextField
						id="standard-basic"
						label=""
						onChange={this.onchangetitle}
            value={this.props.searchString}
            placeholder="Search By Title"
					/>
					<br></br>
					<br></br>
				</form>
				<br></br>
				<br></br>
			</div>
		);
	}
}
