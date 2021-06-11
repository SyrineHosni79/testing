import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";

export default function SearchByTitle(props) {
	const  onchangetitle = e => {
		props.onTitleChange(e);
	};
	
		return (
			<div className={props.className}>
				<h2>Find book by title :</h2>
                 <form noValidate autoComplete="off">
					<TextField
						id="standard-basic"
						onChange={onchangetitle}
                     label="Search By Title"
					/>
				</form>
			</div>
		);
	
}
