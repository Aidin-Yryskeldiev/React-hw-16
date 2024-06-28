import { useState } from "react";

const useInput = (initialValue, validate) => {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
		if (validate) {
			setError(validate(e.target.value));
		}
	};

	return {
		value,
		error,
		onChange: handleChange,
	};
};

export default useInput;
