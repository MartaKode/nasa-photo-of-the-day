import React from "react";
import styled from 'styled-components';

const ExplanationStyled = styled.p`
background-color: papayawhip;
padding: 2%;
text-shadow: 1px 1px 2px blue;
`


export default function Explanation(props){

	return(
       <>
			<ExplanationStyled>{props.explanation}</ExplanationStyled>
			<button> edgdsg </button>
			</>
		)
}