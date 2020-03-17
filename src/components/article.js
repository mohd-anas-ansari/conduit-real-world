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
				this.setState({ articleInfo: article });
			});
	}

	render() {
		console.log(this);
		return this.state.articleInfo ? (
			<>
				<h3 className="title"></h3>
				{console.log(this.state)}
				<div class="tile is-parent ">
					<article class="tile is-child notification is-dark">
						<h1 class="title">{this.state.articleInfo.title}</h1>

						<div className='flex space-between'>
              <p class="subtitle">{this.state.articleInfo.description}</p>
              <p className='subtitle'>By: {this.state.articleInfo.author.username}</p>
						</div>
						<hr />
						<div class="content">{this.state.articleInfo.description}</div>
					</article>
				</div>
			</>
		) : (
			<Spinner />
		);
	}
}

export default Article;
