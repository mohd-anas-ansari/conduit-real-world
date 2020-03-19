import React from "react";

import Spinner from "./spinner";

class Article extends React.Component {
	state = {
		articleInfo: null
	};

	componentDidMount() {
		let article = `https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`;
		fetch(article)
			.then((res) => res.json())
			.then(({ article }) => {
				console.log(article);
				
				this.setState({ articleInfo: article });
			});
	}

	render() {
		console.log(this);
		return this.state.articleInfo ? (
			<>
				<div className="container width-70">
					{console.log(this.state)}
					<div class="tile is-parent article-height">
						<article class="tile is-child notification is-dark">
							<h1 class="title has-text-centered">{this.state.articleInfo.title}</h1>

							<p class="subtitle">{this.state.articleInfo.description}</p>

							<p className="subtitle is-size-7 has-text-right">
								By: {this.state.articleInfo.author.username}
							</p>
							<hr />
							<div class="content">{this.state.articleInfo.body}</div>
						</article>
					</div>
				</div>
			</>
		) : (
			<Spinner />
		);
	}
}

export default Article;
