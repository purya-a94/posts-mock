import React from 'react'

import styles from './CommentItem.module.css'

function CommentItem({ data, profileImage }) {
	return (
		<div className={`w-100 d-flex align-items-start ${styles.comment}`}>
			<img
				src={profileImage.normal}
				srcSet={`${profileImage.medium} 2x
						${profileImage.large} 3x`}
				alt={data.title}
				className={`${'comment_image'}`}
			/>

			<div className="flex-grow-1 ps-5">
				<div className="d-flex flex-column align-items-start">
					<span className={`${styles.comment_username} mb-2`}>
						{data.name}
					</span>
					<span className={`${styles.comment_email} mb-2`}>
						{data.email}
					</span>
					<p className={`${styles.comment_body} mb-0`}>{data.body}</p>
				</div>
			</div>
		</div>
	)
}

export default CommentItem
