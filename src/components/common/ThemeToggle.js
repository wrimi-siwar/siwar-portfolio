// ThemeToggle.js
import React from "react";
import { useTheme } from "./ThemeContext";

function ThemeToggle() {
	const { darkMode, toggleTheme } = useTheme();

	return (
		<button onClick={toggleTheme}>
			{darkMode ? "Light Theme" : "Dark Theme"}
		</button>
	);
}

export default ThemeToggle;
