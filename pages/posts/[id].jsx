export default function Post({ post }) {
	return (
		<div>
			<h1>Single Post</h1>
			<p>
				{post.id} {post.body}
			</p>
		</div>
	);
}

export async function getStaticPaths() {
	const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
		(res) => res.json(),
	);

	const paths = posts.map((post) => ({
		params: { id: post.id.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const post = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`,
	).then((res) => res.json());

	return {
		props: {
			post: post,
		},
	};
}
