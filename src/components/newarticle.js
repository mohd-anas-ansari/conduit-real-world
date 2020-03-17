import React from "react";

const NewArticle = () => {
	return (
		<>
			<div className="container width-75">
				<h2 className="title margin-10 text-center">Create new Article</h2>
				<form>
					<input class="input margin-10" type="text" placeholder="Title" />

					<input class="input margin-10" type="text" placeholder="Sub-title" />
					<textarea
						class="textarea is-primary margin-10"
						placeholder="Description"
						rows="10"
					/>
					<input class="input margin-10" type="text" placeholder="Tags" />

					<button class="button is-dark margin-10">Submit</button>
				</form>
			</div>
		</>
	);
};

export default NewArticle;
