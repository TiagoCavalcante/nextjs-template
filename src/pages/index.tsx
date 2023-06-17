import Title from "@/components/Title"

export default function Home() {
	return (
		<>
			<Title text="Home" />

			<span className="text-red-600">Lorem ipsum</span>
		</>
	)
}

export async function getInitialProps() {
	return { props: {} }
}
