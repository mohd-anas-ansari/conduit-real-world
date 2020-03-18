import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./spinner";

class Main extends React.Component {
	state = {
		articles: null,
		tags: null
	};

	componentDidMount() {
		let articles =
			"https://conduit.productionready.io/api/articles?limit=10&offset=0";
		let tags = "https://conduit.productionready.io/api/tags";

		let articlesP = fetch(articles).then((res) => res.json());
		let tagsP = fetch(tags).then((res) => res.json());

		Promise.all([articlesP, tagsP]).then((res) => {
			this.setState({ articles: res[0].articles, tags: res[1].tags });
		});
		console.log(this);
	}

	render() {
		console.log(this);
		return this.state.articles ? (
			<>
				<div className="container flex space-around">
					<div className="width-70">
						<h1 className="title text-center margin-10">Articles</h1>
						<ul>
							{this.state.articles.map((article) => {
								return (
									<li>
										<div class="card margin-10">
											<div class="card-content">
												<p className='is-size-7 has-text-right'>{article.createdAt.slice(0, 10)}</p>
												<p class="title">
													<Link to={`/article/${article.slug}`}>
														{article.title}
													</Link>
												</p>
												<p class="subtitle">{article.description}</p>
											</div>
											<footer class="card-footer">
												<p class="card-footer-item">
													<span className='flex'>
														<img
															src={article.author.image}
															className="profile-image"
														/>
														<Link>{article.author.username}</Link>
													</span>
												</p>
												<p class="card-footer-item">
													<span>
														<Link>{article.tagList}</Link>
													</span>
												</p>
											</footer>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="margin-top-60 width-30">
						<div class="tile is-parent">
							<article class="tile is-child notification is-dark">
								<ul className="flex">
									{console.log(this)}
									{this.state.tags.map((tag) => {
										return (
											this.state.tags && (
												<li className="margin-10">
													<button class="button is-small">{tag}</button>
												</li>
											)
										);
									})}
								</ul>
							</article>
						</div>
					</div>
				</div>
			</>
		) : (
			<Spinner />
		);
	}
}

export default Main;
