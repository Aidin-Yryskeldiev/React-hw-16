import useTimer from "./UseTimer";
import styled from "styled-components";

const TimerComponent = ({ initialTime }) => {
	const { time, start, stop, restart } = useTimer(initialTime);

	return (
		<div>
			<Border>
				<Timer>{time}</Timer>
				<FlexBox>
					<ButtonStart onClick={start}>Start</ButtonStart>
					<ButtonStart onClick={stop}>Stop</ButtonStart>
					<ButtonStart onClick={restart}>Restart</ButtonStart>
				</FlexBox>
			</Border>
		</div>
	);
};

export default TimerComponent;

const Timer = styled.h1`
	color: white;
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
	padding-top: 80px;
	font-size: 50px;
`;

const Border = styled.div`
	width: 400px;
	height: 300px;
	background-color: black;
	border-radius: 20px;
	margin-left: 20px;
`;

const FlexBox = styled.div`
	display: flex;
	gap: 10px;
	padding-top: 50px;
`;

const ButtonStart = styled.button`
	width: 150px;
	height: 30px;
	color: white;
	background-color: #373434;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	font-size: 18px;
	&:hover {
		background-color: #575555;
	}
`;
