import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import Header from '../components/Header';

export default function Home({ articles }) {
	return (
		<div>
			<Head>
				<title>Next Practice</title>
			</Head>
			<Header />
			<h1>Welcome to Next!!!</h1>
			<ArticleList articles={articles} />
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		`http://jsonplaceholder.typicode.com/posts?_limit=6`,
	);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};
