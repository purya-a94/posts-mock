import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'

function NotFound() {
	return (
		<div className={`row not_found`}>
			<div className="col-12">
				<div className="center">
					<div className="error">
						<div className="number">4</div>

						<div className="illustration">
							<div className="circle"></div>
							<div className="clip">
								<div className="paper">
									<div className="face">
										<div className="eyes">
											<div className="eye eye-left"></div>
											<div className="eye eye-right"></div>
										</div>

										<div className="rosyCheeks rosyCheeks-left"></div>
										<div className="rosyCheeks rosyCheeks-right"></div>

										<div className="mouth"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="number">4</div>
					</div>

					<div className="text">
						Uh-oh, The page you're looking for is not here!
					</div>

					<Link to="/" className="button">
						Go Home
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NotFound
