import React from "react";

const Login = (props) => {
	let email = React.useRef(null);
	let password = React.useRef(null);
	console.log("Email", email);

	function handleLogin(e) {
		e.preventDefault()
		fetch("https://conduit.productionready.io/api/users/login ", {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				user: {
					email: email.current.value,
					password: password.current.value
				}
			})
		})
			.then((res) => res.json())
			.then((user) => {
				if (user.errors) {
					localStorage.setItem("isLoggedIn", false);
				} else {
					localStorage.setItem("isLoggedIn", true);
					props.history.push("/");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<>
			<div className="container width-50">
				<h2 className="title margin-10 text-center">Login</h2>
				<form>
					<input
						class="input is-primary margin-10"
						type="email"
						placeholder="Email"
						ref={email}
					/>

					<input
						class="input is-primary margin-10"
						type="password"
						placeholder="Password"
						ref={password}
					/>

					<button class="button is-success margin-10" onClick={(e) => { handleLogin(e) }}>
						Log In
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
