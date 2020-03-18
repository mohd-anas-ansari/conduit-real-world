import React from "react";

const Signup = () => {
	let username = React.useRef(null);
	let password = React.useRef(null);
	let email = React.useRef(null);

	function handleSignup(e) {
		e.preventDefault();
		console.log(email.current.value);
		fetch("https://conduit.productionready.io/api/users", {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				user: {
					username: username.current.value,
					email: email.current.value,
					password: password.current.value
				}
			})
		})
			.then((res) => res.json())
			.then((userData) => console.log(userData));
	}
	return (
		<>
			<div className="container width-50">
				<h2 className="title margin-10 text-center">Signup</h2>
				<form>
					<input
						className="input is-primary margin-10"
						type="text"
						placeholder="Username"
						ref={username}
					/>

					<input
						className="input is-primary margin-10"
						type="email"
						placeholder="Email"
						ref={email}
					/>

					<input
						className="input is-primary margin-10"
						type="password"
						placeholder="Password"
						ref={password}
					/>

					<button
						className="button is-success margin-10"
						onClick={(e) => handleSignup(e)}
					>
						Sign Up
					</button>
				</form>
			</div>
		</>
	);
};

export default Signup;
