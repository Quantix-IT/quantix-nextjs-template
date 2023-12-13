import { forwardRef } from 'react'

const Button = forwardRef(({ children }, ref) => {
	return (
		<button className="" ref={ref}>
			{children}
		</button>
	)
})

export default Button
