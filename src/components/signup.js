import React from "react";

const Signup = () => {
	return (
		<>
			<div className="container width-50">
				<h2 className="title margin-10 text-center">Signup</h2>
				<form>
					<input
						className="input is-primary margin-10"
						type="text"
						placeholder="Username"
					/>

					<input
						className="input is-primary margin-10"
						type="email"
						placeholder="Email"
					/>

					<input
						className="input is-primary margin-10"
						type="password"
						placeholder="Password"
					/>

					<button className="button is-success margin-10">Sign Up</button>
				</form>
			</div>
		</>
	);
};

export default Signup;
