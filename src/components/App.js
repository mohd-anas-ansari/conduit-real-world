import React from "react";
import { Route } from 'react-router-dom';

import Login from './login';
import Home from './home';
import Header from './header'
import Signup from './signup.js';
import Article from './article';
import NewArticle from './newarticle';
import Profile from './profile';

class App extends React.Component {
	state = { 
		isLoggedIn: false,
	}

	updateIsLoggedIn = (value) => {
		this.setState({isLoggedIn: value})
	}
	render() { 
		return ( 
			<>
				<Header isLoggedIn={this.state.isLoggedIn}/>
			<Route exact path='/' component={Home}/>
			<Route path='/login' render={() => <Login updateIsLoggedIn={this.updateIsLoggedIn} /> } />
			<Route path='/signup' component={Signup} />
			<Route path='/article/:slug' component={Article} />
			<Route path='/newarticle' component={NewArticle} />
			<Route path='/profile' component={Profile} />
				
		</>
		 );
	}
}
 
export default App;

