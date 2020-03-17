import React from "react";

const Login = () => {
	return (
		<>
			<div className="container width-50">

			<h2 className="title margin-10 text-center">Login</h2>
				<form>
					<input class="input is-primary margin-10" type="email" placeholder="Email" />

					<input
						class="input is-primary margin-10"
						type="password"
						placeholder="Password"
					/>

					<button class="button is-success margin-10">Log In</button>
				</form>
			</div>
		</>
	);
};

export default Login;
