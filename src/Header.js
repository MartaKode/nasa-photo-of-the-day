import React from "react";

export default function Header(props){

	return(

		<div className="postHeader">

			<h3 className="postTitle">{props.title}</h3>

			<p className = "postDate">{props.date}</p>

		</div>

		)
}