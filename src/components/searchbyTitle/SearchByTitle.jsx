import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";

export default function SearchByTitle(props) {
	const  onchangetitle = e => {
		this.props.onTitleChange(e);
	};
	
		return (
			<div>
				<h2>Find book by title :</h2>

				<form noValidate autoComplete="off">
					<TextField
						id="standard-basic"
						label=""
						onChange={onchangetitle}
            value={props.searchString}
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
