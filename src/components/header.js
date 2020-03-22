import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
	console.log(props, 'Header Props');
	
	return (
		<>
			<nav className="navbar is-transparent is-dark is-vcentered">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item is-size-3">
						Conduit
					</Link>
					<div
						className="navbar-burger burger"
						data-target="navbarExampleTransparentExample"
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div id="navbarExampleTransparentExample" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="field is-grouped">
								{props.isLoggedIn ? (
									<>
										<p className="control is-vcentered">
											<NavLink
												activeClassName="is-primary"
												className="button"
												to="/newarticle"
											>
												<span>New Article</span>
											</NavLink>
										</p>
										<p className="control">
											<NavLink
												activeClassName="is-primary"
												className="button"
												to={`/profile/${props.user && props.user.username }`}
											>
												<span>Profile</span>
											</NavLink>
										</p>
										<p className="control">
											<NavLink
												activeClassName="is-primary"
												className="button"
												to="/setting"
											>
												<span>Settings</span>
											</NavLink>
										</p>

										<p className="control">
											<NavLink
												activeClassName="is-primary"
												className="button"
												to="/logout"
											>
												<span>Logout</span>
											</NavLink>
										</p>
									</>
								) : (
									<>
										<p className="control">
											<NavLink
												activeClassName="is-primary"
												to="/login"
												className="button"
											>
												<span>Log In</span>
											</NavLink>
										</p>

										<p className="control">
											<NavLink
												activeClassName="is-primary"
												className="button"
												to="/signup"
											>
												<span>Sign Up</span>
											</NavLink>
										</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;

//LogIn Working
//SignUp Working
