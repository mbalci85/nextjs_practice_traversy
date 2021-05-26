import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const article = ({ article }) => {
	// const router = useRouter();
	// const { id } = router.query;
	return (
		<div>
			<h5>This is article {article.id}</h5>
			<h1>{article.title}</h1>
			<p>{article.body}</p>

			<Link href="/">Home Page</Link>
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const res = await fetch(
		`http://jsonplaceholder.typicode.com/posts/${context.params.id}`,
	);
	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};

export default article;
