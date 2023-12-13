import '@/styles/globals.css'

export const metadata = {
	title: 'Quantix - Next.js',
	description: 'Quantix - Next.js',
}

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}

export default RootLayout
