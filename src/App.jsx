import MyCounter from "./components/counter/MyCounter";
import CustomForm from "./components/input/CustomForm";
import TimerComponent from "./components/timer/TimerComponent";
import styled from "styled-components";

const App = () => {
	return (
		<div>
			<FlexBox>
				<MyCounter />
				<CustomForm />
				<TimerComponent initialTime={120} />
			</FlexBox>
		</div>
	);
};

export default App;

const FlexBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	position: relative;
	top: 100px;
`;
