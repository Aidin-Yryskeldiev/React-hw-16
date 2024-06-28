import { useState } from "react";

const useCounter = (
	initialValue = 0,
	{ incrementLevel = 1, decrementLevel = 1 } = {}
) => {
	const [count, setCount] = useState(initialValue);

	const increment = () => {
		setCount((prevCount) => prevCount + incrementLevel);
	};

	const decrement = () => {
		setCount((prevCount) =>
			prevCount - decrementLevel >= 0 ? prevCount - decrementLevel : 0
		);
	};

	const reset = () => {
		setCount(initialValue);
	};

	return {
		count,
		increment,
		decrement,
		reset,
	};
};

export default useCounter;
