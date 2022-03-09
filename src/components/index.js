import React from "react";
import styled from "styled-components";

export const Buttons = styled.button`
	padding: 10px;
	min-width: 10px;
	border-radius: 5px;
	cursor: pointer;
	background: ${(props) =>
		props.submit
			? "green"
			: props.delete
			? "red"
			: props.cancel
			? "transparent"
			: null};
	color: ${(props) =>
		props.submit
			? "white"
			: props.delete
			? "white"
			: props.cancel
			? "red"
			: null};
	border: ${(props) =>
		props.submit
			? "none"
			: props.delete
			? "none"
			: props.cancel
			? "1px solid red"
			: null};
`;
