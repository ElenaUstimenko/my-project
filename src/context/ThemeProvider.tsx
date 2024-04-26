import {ReactNode, useState} from "react";
import {Theme, ThemeContext} from "./ThemeContext";
import LOCAL_STORAGE_KEYS from "@constants/localStorage";

type ThemeProviderProps = {
	children: ReactNode
	initialTheme?: Theme
};

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme) as Theme || Theme.LIGHT;

const ThemeProvider = (props: ThemeProviderProps) => {
	const {
		children,
		initialTheme
	} = props;

	const [theme, setTheme] = useState(initialTheme || defaultTheme);
	
	
	const defaultValue = {
		theme: theme,
		setTheme: setTheme
	};
	
	return (
		<ThemeContext.Provider value={defaultValue}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;