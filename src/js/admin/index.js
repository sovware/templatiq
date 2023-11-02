import App from "./App";
import { render } from "@wordpress/element";

import "../../sass/global.scss";


// Render the App component into the DOM
render(
	<App />, 
	document.getElementById("template-market-root")
);