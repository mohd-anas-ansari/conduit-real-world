import React from "react";
import Main from './main'

const Home = () => {
	return (
		<div>
			<section class="hero is-small is-dark is-bold">
				<div class="hero-body">
					<div class="container">
						<h1 class="title text-center">Conduit</h1>
						<h2 class="subtitle text-center">A place to share your knowledge</h2>
					</div>
				</div>
			</section>

			<Main />
			
		</div>
	);
};

export default Home;
