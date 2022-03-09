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

export const TextField = styled.input`
	width: 392px;
	height: 30px;
	border-radius: 5px;
	border: 1px solid #662d9133;
	&:hover {
		border: 1.5px solid #662d9133;
	}
	&:focus {
		outline: none;
	}
`;
