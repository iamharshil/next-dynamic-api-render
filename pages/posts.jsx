export default function Avatars({ posts }) {
	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{posts.map((posts) => {
					return <li key={posts.id}>{posts.body}</li>;
				})}
				<br />
				<br />
			</ul>
		</div>
	);
}

export async function getStaticProps() {
	const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
		(res) => res.json(),
	);
	// console.log(posts)
	return {
		props: {
			posts,
		},
	};
}
