import ThemeProvider from "@context/ThemeProvider";
import { Decorator } from "@storybook/react";
import { Theme } from "@context/ThemeContext";

const withThemeDecorator: Decorator = (Story, context) => {
	console.log('context', context?.globals)
	
	return (
		<ThemeProvider initialTheme={context?.globals?.theme || Theme.LIGHT}>
			<div className={`app ${context?.globals?.theme || Theme.LIGHT}`}>
				<Story />
			</div>
		</ThemeProvider>
	)
};

export default withThemeDecorator;