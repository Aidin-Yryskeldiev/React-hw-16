import useInput from "./UseInput";
import styled from "styled-components";

const validateEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase())
		? ""
		: "Неправильный формат email";
};

const validatePassword = (password) => {
	return password.length >= 8
		? ""
		: "Пароль должен содержать минимум 8 символов";
};

const CustomForm = () => {
	const emailInput = useInput("", validateEmail);
	const passwordInput = useInput("", validatePassword);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<Border>
				<form onSubmit={handleSubmit}>
					<TextInstagram>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</TextInstagram>
					<FlexBox>
						<Inputs
							type="email"
							placeholder="Введите email"
							value={emailInput.value}
							onChange={emailInput.onChange}
							style={{ borderColor: emailInput.error ? "red" : "initial" }}
						/>
						{emailInput.error && (
							<p style={{ color: "red" }}>{emailInput.error}</p>
						)}
						<Inputs
							type="password"
							placeholder="Введите пароль"
							value={passwordInput.value}
							onChange={passwordInput.onChange}
							style={{ borderColor: passwordInput.error ? "red" : "initial" }}
						/>
						{passwordInput.error && (
							<p style={{ color: "red" }}>{passwordInput.error}</p>
						)}
						<Buttons type="submit">Войти</Buttons>
					</FlexBox>
				</form>
			</Border>
		</div>
	);
};

export default CustomForm;

const TextInstagram = styled.h1`
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
	position: relative;
	top: 50px;
	font-size: 40px;
`;

const Border = styled.div`
	width: 400px;
	height: 400px;
	margin: 0 auto;
	border: 1px solid grey;
	border-radius: 10px;
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	position: relative;
	top: 100px;
`;

const Inputs = styled.input`
	width: 300px;
	height: 40px;
	padding-left: 5px;
`;

const Buttons = styled.button`
	width: 300px;
	height: 40px;
	color: white;
	background-color: blue;
	border: none;
	border-radius: 10px;
	position: relative;
	top: 10px;
	cursor: pointer;
	font-size: 20px;
	&:hover {
		background-color: #0000bb;
	}
`;
