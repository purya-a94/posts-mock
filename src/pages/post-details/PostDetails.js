import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../app/hooks/useFetch'

import Comments from '../../features/comments/Comments'

import Loader from 'react-loader-spinner'
import styles from './PostDetails.module.css'
// Leveraging webpack's modular imports for this special use-case
import productImage2x from '../../features/post/product@2x.png'
import productImage3x from '../../features/post/product@3x.png'

function PostDetails() {
	const { postId } = useParams()

	const { status, data, error } = useFetch(`/posts/${postId}`)

	return (
		<div className="row pt-4 pb-5">
			<div className="col-12">
				{status === 'pending' ? (
					/*
						•••••••
						Loading view
						•••••••
					*/
					<div className="row justify-content-center">
						<Loader
							type="Oval"
							color="#00BFFF"
							height={40}
							width={40}
							className="col-auto my-5"
						/>
					</div>
				) : status === 'failed' ? (
					/*
						•••••••
						Error view
						•••••••
					*/
					<div className="row flex-column justify-content-center align-items-center">
						<p className="col-auto mt-5">Something went wrong!</p>
						<span className="col-auto">{error}</span>
					</div>
				) : (
					/*
						•••••••
						Main view
						•••••••
					*/
					data && (
						<div className="row">
							<div className="col-12 d-flex flex-column align-items-center py-3 px-4">
								<img
									src={productImage2x}
									srcSet={`${productImage3x} 3x`}
									alt={data.title}
									className={`${styles.post_image}`}
								/>

								<h4 className={`${styles.post_title} mt-4`}>
									{data.title}
								</h4>
							</div>

							<div className="col-12 mt-4 border border-1"></div>

							<div className="col-12 mt-4 py-3 px-4">
								<Comments postId={data.id} />
							</div>
						</div>
					)
				)}
			</div>
		</div>
	)
}

export default PostDetails
