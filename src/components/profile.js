import React from "react";
import Spinner from './spinner'

class Profile extends React.Component {
	state = {
		user: null,
		userArticles: null,
	};

	componentDidMount() {
		const { handle } = this.props.match.params;
		console.log(handle);
		const user = `https://conduit.productionready.io/api/profiles/${handle}`;
		const userArticles = `https://conduit.productionready.io/api/articles?author=${handle}&limit=5&offset=0`;
		console.log(this, 'After Fetch Assign')
		console.log(user, 'User After Fetch Assign')
		console.log(userArticles, 'User Article After Fetch Assign');

		const userP = fetch(user).then(res => res.json()); 
		const userArticlesP = fetch(userArticles).then(res => res.json()); 

		Promise.all([userP, userArticlesP]).then(res => {
			console.log(res[0].profile, 'Res Profile');
			console.log(res[1].articles, 'Res Articles');
			console.log(this, 'This inside Promise All')
			this.setState({ user: res[0].profile, userArticles: res[1].articles });
		});
		console.log(this, 'This After Promise');
		
	}

	render() {
		console.log(this, 'Inside render')
		return this.state.user ? (
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
							<h1 class="title">{this.state.user.username}</h1>
							<h2 class="subtitle">{this.state.user.bio}</h2>
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
					
					{console.log(this)}
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
		) : ( <Spinner /> 
		);
	}
}

export default Profile;
