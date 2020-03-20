import React from "react";
import { withRouter } from "react-router-dom";


function Logout(props) {
  console.log(props, "Logout")
	localStorage.removeItem("conduit-token");
	props.updateIsLoggedIn(false);
	props.history.push("/");
	return <></>;
}

export default withRouter(Logout);