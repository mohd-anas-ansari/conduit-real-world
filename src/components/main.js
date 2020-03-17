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
			this.setState({ articles: res[0].articles, tags: res[1] });
		});
		console.log(this);
	}

	render() {
		console.log(this);
		return this.state.articles ? (
			<>
				<div className="container width-75">
					<h1 className="title text-center margin-10">Articles</h1>
					<ul>
						{
							this.state.articles.map((article) => {
								return (
									<li>
										{/* <h1 className="title is-2">
										<Link to={`/article/${article.slug}`}>{article.title}</Link>
									</h1>

									<h3 class="subtitle is-5">{article.description}</h3> */}

										<div class="card margin-10">
											<div class="card-content">
												<p class="title">
													<Link to={`/article/${article.slug}`}>
														{article.title}
													</Link>
												</p>
												<p class="subtitle">{article.description}</p>
											</div>
											<footer class="card-footer">
												<p class="card-footer-item">
													<span>
														Created By <Link>{article.author.username}</Link>
													</span>
												</p>
												<p class="card-footer-item">
													<span>
													 <Link>Tags</Link>
													</span>
												</p>
											</footer>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</>
		) : (
			<Spinner />
		);
	}
}

export default Main;
