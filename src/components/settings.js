import React from "react";


// class Settings extends Component {
//   state = { 
//     user: null,
//     isLoggedIn: true
//   }
  
//   render() {
//   return ( 
//     <>
      
//       </>
//      );
//   }
// }
 
// export default Settings;
const Setitngs = (props) => {
  console.log(props, 'this in settings');
  let imageURL = React.useRef(null)
  let username = React.useRef(null)
  let bio = React.useRef(null)
  let email = React.useRef(null)
  let password = React.useRef(null)
  
	return (
		<>
			<div className="container width-50">
				<h2 className="title margin-10 text-center">Settings</h2>
				<form>
					<input
						className="input is-primary margin-10"
						type="text"
            placeholder="Profile Pic"
            ref={imageURL}
					/>

					<input
						className="input is-primary margin-10"
						type="text"
            placeholder="Username"
            ref={username}
					/>

					<textarea
						class="textarea is-primary"
            placeholder="Short bio about you"
            ref={bio}
					></textarea>

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

					<button className="button is-success margin-10">
						Update Settings
					</button>
				</form>
			</div>
		</>
	);
};

export default Setitngs;
