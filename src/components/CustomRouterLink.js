import React from 'react'

const CustomRouterLink = React.forwardRef((props, ref) => (
	<a ref={ref} {...props} className="link-dark text-decoration-none">
		{props.children}
	</a>
))

export default CustomRouterLink
