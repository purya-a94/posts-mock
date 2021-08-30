import React from 'react'
import useFetch from '../../app/hooks/useFetch'

import CommentItem from './comment-item/CommentItem'

import Loader from 'react-loader-spinner'
import profileImage from './profileImage.png'
import profileImage2x from './profileImage@2x.png'
import profileImage3x from './profileImage@3x.png'

function Comments({ postId }) {
	const { status, data, error } = useFetch(`/posts/${postId}/comments`)

	return status === 'pending' ? (
		/*
			•••••••
			Loading view
			•••••••
		*/
		<div className="row justify-content-center py-3">
			<Loader
				type="Oval"
				color="#00BFFF"
				height={30}
				width={30}
				className="col-auto"
			/>
		</div>
	) : status === 'failed' ? (
		/*
			•••••••
			Error view
			•••••••
		*/
		<div className="row flex-column justify-content-center align-items-center py-3">
			<p className="col-auto">Something went wrong!</p>
			<span className="col-auto">{error}</span>
		</div>
	) : (
		/*
			•••••••
			Main view
			•••••••
		*/
		<div className="row py-3">
			<div className="col-12">
				{/* 
					NOTE:
					"Windowing" could also be used for long lists of comments
					but it's not implemented at the moment.
				 */}
				{data.map((comment) => {
					return (
						<CommentItem
							key={comment.id}
							data={comment}
							profileImage={{
								normal: profileImage,
								medium: profileImage2x,
								large: profileImage3x,
							}}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Comments
