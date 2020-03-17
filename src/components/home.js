import React from "react";
import Main from './main'

const Home = () => {
	return (
		<div>
			<section class="hero is-medium is-dark is-bold">
				<div class="hero-body">
					<div class="container">
						<h1 class="title">Conduit</h1>
						<h2 class="subtitle">A place to share your knowledge</h2>
					</div>
				</div>
			</section>

			<Main />
			
		</div>
	);
};

export default Home;
