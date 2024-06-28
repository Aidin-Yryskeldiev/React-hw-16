import { useState, useEffect, useRef } from "react";

const useTimer = (initialTime = 60) => {
	const [time, setTime] = useState(initialTime);
	const [isActive, setIsActive] = useState(false);
	const intervalRef = useRef(null);

	const start = () => {
		setIsActive(true);
	};

	const stop = () => {
		setIsActive(false);
		clearInterval(intervalRef.current);
	};

	const restart = () => {
		stop();
		setTime(initialTime);
		start();
	};

	useEffect(() => {
		if (isActive) {
			intervalRef.current = setInterval(() => {
				setTime((prevTime) => {
					if (prevTime === 0) {
						stop();
						return 0;
					} else {
						return prevTime - 1;
					}
				});
			}, 1000);
		} else {
			clearInterval(intervalRef.current);
		}

		return () => clearInterval(intervalRef.current);
	}, [isActive, initialTime]);

	return { time, start, stop, restart };
};

export default useTimer;
