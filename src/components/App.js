import React from "react";
import { Route } from 'react-router-dom';

import Login from './login';
import Home from './home';
import Header from './header'
import Signup from './signup.js';
import Article from './article';
import NewArticle from './newarticle';
import Profile from './profile';



const App = () => {
	return (
		<>
			<Header />
			<Route exact path='/' component={Home}/>
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
			<Route path='/article/:slug' component={Article} />
			<Route path='/newarticle' component={NewArticle} />
			<Route path='/profile' component={Profile} />
				
		</>
	);
};

export default App;
