import React from 'react'

import Pagination from 'react-bootstrap/Pagination'

function CustomPagination({
	pageCount,
	activePage,
	pageClick,
	prevPageClick,
	nextPageClick,
	firstPageClick,
	lastPageClick,
}) {
	const pagesArray = []

	for (let i = 0; i < pageCount; i++) {
		pagesArray.push(i + 1)
	}

	return (
		<div className="w-100 d-flex justify-content-center mt-4">
			<Pagination className="align-self-center">
				{/*
					•••••••
					First and Previous page
					•••••••
				*/}
				{activePage >= 3 ? (
					<>
						<Pagination.First onClick={firstPageClick} />
						<Pagination.Prev onClick={prevPageClick} />
					</>
				) : (
					false
				)}

				{/*
					•••••••
					Pages
					•••••••
				*/}
				{pagesArray.map((pageNumber, idx) => {
					if (
						pageNumber >= activePage - 1 &&
						pageNumber <= activePage + 1
					) {
						return (
							<Pagination.Item
								key={idx}
								active={activePage === pageNumber}
								onClick={(e) => pageClick(pageNumber)}
							>
								{pageNumber}
							</Pagination.Item>
						)
					} else {
						return null
					}
				})}

				{/*
					•••••••
					Next and Last page
					•••••••
				*/}
				{activePage <= pageCount - 2 ? (
					<>
						<Pagination.Next onClick={nextPageClick} />
						<Pagination.Last onClick={lastPageClick} />
					</>
				) : (
					false
				)}
			</Pagination>
		</div>
	)
}

export default CustomPagination
