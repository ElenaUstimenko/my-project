import {BrowserRouter} from "react-router-dom";

const ComponentRender = (component: JSX.Element) => {
	return (
		<BrowserRouter>
			{component}
		</BrowserRouter>
	)
}

export default ComponentRender;