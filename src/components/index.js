import React, { useState } from "react";
import styled from "styled-components";
import { Input, TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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

export const TextFields = styled.input`
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

export const TextFieldWithIcon = () => {
	const [values, setValues] = React.useState({
		password: "",
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};
	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<Input
			style={{ marginTop: 20, border: "1px solid #662D911F", padding: "0 5px" }}
			disableUnderline={true}
			type={values.showPassword ? "text" : "password"}
			value={values.password}
			onChange={handleChange("password")}
			endAdornment={
				<InputAdornment position="end" style={{ background: "#662D9133" }}>
					<IconButton
						onClick={handleClickShowPassword}
						onMouseDown={handleMouseDownPassword}
						edge="end"
					>
						{values.showPassword ? <VisibilityOff /> : <Visibility />}
					</IconButton>
				</InputAdornment>
			}
		/>
	);
};
