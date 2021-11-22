// export const getStaticProps = async () => {
// 	return {
// 		props: {
// 			pageContent,
// 		},
// 	};
// };

export default function CvItem({ data }) {
	console.log(data);
	// const title = item.properties.img_url.rich_text[0]?.plain_text || '';
	// const type = item.properties.title.title[0]?.plain_text || '';
	// const date = item.properties.tags?.multi_select || '';
	// const link = item.properties.description.rich_text[0]?.plain_text || '';

	return <h3>cv xp</h3>;
}
