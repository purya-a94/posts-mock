import React from 'react'
import { Link } from 'react-router-dom'
import CustomRouterLink from '../../components/CustomRouterLink'
import { truncateText } from '../../app/helpers'

import styles from './Post.module.css'
// Leveraging webpack's modular imports for this special use-case
import productImage from './product.png'
import productImage2x from './product@2x.png'
import productImage3x from './product@3x.png'

function Post({ details }) {
	return (
		<div className="w-100">
			<Link to={`/posts/${details.id}`} component={CustomRouterLink}>
				<div className="d-flex flex-column">
					<img
						src={productImage}
						srcSet={`${productImage2x} 2x,
								${productImage3x} 3x`}
						alt={details.title}
						className={`${styles.post_image}`}
					/>

					<span className={`${styles.post_title} mt-2`}>
						{truncateText(details.title, 60, true)}
					</span>
				</div>
			</Link>
		</div>
	)
}

export default Post
