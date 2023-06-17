import Head from "next/head"

type HeaderProps = {
	text: string
}

export default function Title({ text }: HeaderProps) {
	return (
		<>
			<Head>
				<title>{text}</title>
			</Head>
		</>
	)
}
