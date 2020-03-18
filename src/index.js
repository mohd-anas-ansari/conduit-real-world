import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//App
import App from "./components/App";

//CSS Bulma
import "bulma/css/bulma.css";
import "./assets/stylesheets/common/common.css";
import "./assets/stylesheets/main/main.css";
import './assets/stylesheets/article/article.scss';

//rootElement
const rootElement = document.getElementById("root");

//Render
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement
);
