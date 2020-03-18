import React from "react";

class Profile extends React.Component {
	state = {};
	render() {
		return (
			<>
				<section class="hero is-dark has-text-centered">
					<div class="hero-body">
						<div class="container">
							<div className="image-container">
								<img
									className="profile-user-image"
									src="https://static.productionready.io/images/smiley-cyrus.jpg"
								/>
							</div>
							<h1 class="title">Profile Name</h1>
							{/* <h2 class="subtitle">Primary subtitle</h2> */}
							<button class="margin-lr-10 button is-small is-primary is-outlined">
								My Articles
							</button>
							<button class="button is-small is-primary is-outlined">
								Favorites
							</button>
						</div>
					</div>
				</section>

				<section className="container flex space-around">
					<div class="box profile-card margin-10">
						<article class="media">
							<div class="media-left">
								<figure class="image is-64x64">
									<img
										src="https://bulma.io/images/placeholders/128x128.png"
										alt="Image"
									/>
								</figure>
							</div>
							<div class="media-content">
								<div class="content">
									<p>
										<strong>John Smith</strong> <small>@johnsmith</small>{" "}
										<small>31m</small>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aenean efficitur sit amet massa fringilla egestas. Nullam
										condimentum luctus turpis.
									</p>
								</div>
								<nav class="level is-mobile">
									<div class="level-left">
										<a class="level-item" aria-label="reply">
											<span class="icon is-small">
												<i class="fas fa-reply" aria-hidden="true"></i>
											</span>
										</a>
										<a class="level-item" aria-label="retweet">
											<span class="icon is-small">
												<i class="fas fa-retweet" aria-hidden="true"></i>
											</span>
										</a>
										<a class="level-item" aria-label="like">
											<span class="icon is-small">
												<i class="fas fa-heart" aria-hidden="true"></i>
											</span>
										</a>
									</div>
								</nav>
							</div>
						</article>
					</div>

					<div class="box profile-card margin-10">
						<article class="media">
							<div class="media-left">
								<figure class="image is-64x64">
									<img
										src="https://bulma.io/images/placeholders/128x128.png"
										alt="Image"
									/>
								</figure>
							</div>
							<div class="media-content">
								<div class="content">
									<p>
										<strong>John Smith</strong> <small>@johnsmith</small>{" "}
										<small>31m</small>
										<br />
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aenean efficitur sit amet massa fringilla egestas. Nullam
										condimentum luctus turpis.
									</p>
								</div>
								<nav class="level is-mobile">
									<div class="level-left">
										<a class="level-item" aria-label="reply">
											<span class="icon is-small">
												<i class="fas fa-reply" aria-hidden="true"></i>
											</span>
										</a>
										<a class="level-item" aria-label="retweet">
											<span class="icon is-small">
												<i class="fas fa-retweet" aria-hidden="true"></i>
											</span>
										</a>
										<a class="level-item" aria-label="like">
											<span class="icon is-small">
												<i class="fas fa-heart" aria-hidden="true"></i>
											</span>
										</a>
									</div>
								</nav>
							</div>
						</article>
					</div>
				</section>
			</>
		);
	}
}

export default Profile;
