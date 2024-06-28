import useCounter from "./UseCounter";
import styled from "styled-components";

const MyCounter = () => {
	const { count, increment, decrement, reset } = useCounter(0, {
		incrementLevel: 4,
		decrementLevel: 2,
	});

	return (
		<div>
			<Border>
				<Count>{count}</Count>
				<FlexBox>
					<ButtonIncrement onClick={increment}>Increment</ButtonIncrement>
					<ButtonDecrement onClick={decrement}>Decrement</ButtonDecrement>
					<ButtonReset onClick={reset}>Reset</ButtonReset>
				</FlexBox>
			</Border>
		</div>
	);
};

export default MyCounter;

const Border = styled.div`
	width: 400px;
	height: 300px;
	background-color: black;
	padding-top: 100px;
	border-radius: 20px;
`;

const Count = styled.h1`
	font-size: 50px;
	font-family: Arial, Helvetica, sans-serif;
	text-align: center;
	position: relative;
	color: white;
	top: -30px;
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
`;

const ButtonIncrement = styled.button`
	width: 150px;
	height: 40px;
	color: white;
	background-color: blue;
	cursor: pointer;
	border: none;
	font-size: 20px;
	border-radius: 20px;
	&:hover {
		background-color: #0000a5;
	}
`;

const ButtonDecrement = styled.button`
	width: 150px;
	height: 40px;
	color: white;
	background-color: #00ff00;
	cursor: pointer;
	border: none;
	font-size: 20px;
	border-radius: 20px;
	&:hover {
		background-color: #00c100;
	}
`;

const ButtonReset = styled.button`
	width: 150px;
	height: 40px;
	color: white;
	background-color: yellow;
	cursor: pointer;
	border: none;
	font-size: 20px;
	border-radius: 20px;
	&:hover {
		background-color: #bcbc00;
	}
`;
