import React from "react";
import styled from 'styled-components'

const HeaderStyled = styled.div`
background-color: papayawhip;
color: ${props => props.title ? 'blue' : 'red'};

`

const TitleH3 = styled.h3`
color: ${props => props.title ? 'red' : 'blue'};

`


export default function Header(props){

	return(

		<HeaderStyled>

			<TitleH3>{props.title}</TitleH3>

			<p className = "postDate">{props.date}</p>
			

		</HeaderStyled>

		)
}