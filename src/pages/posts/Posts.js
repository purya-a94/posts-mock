import React, { useState, useEffect } from 'react'
import useFetch from '../../app/hooks/useFetch'
import { chunkLongArray } from '../../app/helpers'

import Post from '../../features/post/Post'

import Loader from 'react-loader-spinner'
import CustomPagination from '../../components/CustomPagination'

function Posts() {
	const { status, data, error } = useFetch('/posts')

	const initialState = {
		splitData: [],
		activePage: 1,
	}
	const [paginationData, setPaginationData] = useState(initialState)

	useEffect(() => {
		if (data !== null) {
			setPaginationData((prevState) => {
				return {
					splitData: chunkLongArray(data, 8),
					activePage: 1,
				}
			})
		}
	}, [data])

	return (
		<div className="row pt-4 pb-5">
			<div className="col-12">
				<h2>Posts List</h2>
				<p>
					Here you can see a list of all the posts. Click on an item
					to see more.
				</p>
			</div>

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
				) : status === 'error' ? (
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
					<>
						<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 px-3 px-sm-0">
							{paginationData.splitData.length &&
								paginationData.splitData[
									paginationData.activePage - 1
								].map((post) => {
									return (
										<div
											key={post.id}
											className="col py-3"
											style={{
												border: 'solid 1px #d6d6d6',
											}}
										>
											<Post details={post} />
										</div>
									)
								})}
						</div>

						{/*
							•••••••
							Pagination
							•••••••
						*/}

						{/*
							NOTE:
								Using pagination is one way of handling large lists of data.
								Other methods like windowing and infinite scroll could also
								be used based on server response and design decisions.
						 */}
						<div className="w-100 mt-4">
							<CustomPagination
								pageCount={paginationData.splitData.length}
								activePage={paginationData.activePage}
								pageClick={(pageNumber) =>
									setPaginationData((prevState) => {
										return {
											...prevState,
											activePage: pageNumber,
										}
									})
								}
								prevPageClick={(e) =>
									setPaginationData((prevState) => {
										return {
											...prevState,
											activePage:
												prevState.activePage - 1,
										}
									})
								}
								nextPageClick={(e) =>
									setPaginationData((prevState) => {
										return {
											...prevState,
											activePage:
												prevState.activePage + 1,
										}
									})
								}
								firstPageClick={(e) =>
									setPaginationData((prevState) => {
										return {
											...prevState,
											activePage: 1,
										}
									})
								}
								lastPageClick={(e) =>
									setPaginationData((prevState) => {
										return {
											...prevState,
											activePage:
												prevState.splitData.length,
										}
									})
								}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Posts
