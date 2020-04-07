import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./login";
import Home from "./home";
import Header from "./header";
import Signup from "./signup.js";
import Article from "./article";
import NewArticle from "./newarticle";
import Profile from "./profile";
import Logout from "./logout";
import Settings from './settings'

function Auth(props) {
	console.log(props, "Inside App");

	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/article/:slug" component={Article} />
			<Route path="/newarticle" component={NewArticle} />
			<Route path="/profile/:handle" component={Profile} />
			<Route
				exact
				path="/logout"
				render={(properties) => (
					<Logout updateIsLoggedIn={props.updateIsLoggedIn} {...properties} />
				)}
			/>
			<Route path="/settings" component={Settings} />
		</Switch>
	);
}

function NoAuth(thisProps) {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route
				path="/login"
				render={() => (
					<Login updateIsLoggedIn={thisProps.updateIsLoggedIn} {...thisProps} />
				)}
			/>
			<Route path="/signup" component={Signup} />
			<Route path="/article/:slug" component={Article} />
			<Route path="/profile/:handle" component={Profile} />
			<Route path="*" render={() => <h1>404 Page Not Found</h1>} />
		</Switch>
	);
}

class App extends React.Component {
	state = {
		isLoggedIn: false,
		user: null
	};

	updateIsLoggedIn = (value) => {
		console.log("Inside updateIsLoggedIn", value);
		this.setState({ isLoggedIn: value });
	};
	componentDidMount() {
		console.log("cdm", this);
		if (localStorage["conduit-token"]) {
			fetch("https://conduit.productionready.io/api/user", {
				headers: {
					authorization: `Token ${localStorage["conduit-token"]}`
				}
			})
				.then((res) => res.json())
				.then((user) => {
					console.log(user, "user in app");
					console.log(this.state, "Before SetState");

					this.setState({ isLoggedIn: true, user: user.user });
					console.log(this.state, "State after set");
				})
				.catch((err) => {
					this.setState({ isLoggedIn: false });
				});
		}
	}
	render() {
		console.log("Inside Render", this.state.isLoggedIn);

		return (
			<>
				<Header
					isLoggedIn={this.state.isLoggedIn}
					user={this.state.user && this.state.user}
				/>
				{this.state.isLoggedIn ? (
					<Auth updateIsLoggedIn={this.updateIsLoggedIn} />
				) : (
					<NoAuth updateIsLoggedIn={this.updateIsLoggedIn} />
				)}
			</>
		);
	}
}

export default App;
