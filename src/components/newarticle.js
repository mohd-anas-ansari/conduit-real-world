import React from "react";

const NewArticle = (props) => {

	let title = React.useRef(null);
	let description = React.useRef(null);
	let articleBody = React.useRef(null);

	function handleNewArticle(e) {
		e.preventDefault();
		fetch("https://conduit.productionready.io/api/articles", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				authorization: `Token ${localStorage["conduit-token"]}`
			},
			body: JSON.stringify({
				article: {
					title: title.current.value,
					body: articleBody.current.value,
					tagList: [],
					description: description.current.value
				}
			})
		})
			.then((res) => res.json())
			.then((article) => {
				if (article.errors) {
					console.log(article, 'in Error');
				} else {
					props.history.push("/");
					console.log(article);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<>
			<div className="container width-70 margin-center">
				<h2 className="title margin-10 text-center">Create new Article</h2>
				<form onSubmit={(e) => handleNewArticle(e)}>
					<input
						class="input margin-10"
						type="text"
						placeholder="Title"
						ref={title}
						required
					/>

					<input
						class="input margin-10"
						type="text"
						placeholder="Sub-title"
						ref={description}
						required
					/>
					<textarea
						class="textarea is-primary margin-10"
						placeholder="Description"
						rows="10"
						ref={articleBody}
						required
					/>
					<input class="input margin-10" type="text" placeholder="Tags" />

					<button class="button is-dark margin-10">Submit</button>
				</form>
			</div>
		</>
	);
};

export default NewArticle;
