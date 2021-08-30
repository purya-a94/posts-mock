import React from 'react'
import { NavLink } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Header() {
	return (
		<Navbar bg="light" expand="md">
			<Container>
				<Navbar.Brand>Malltina Test</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="me-auto">
						<Nav.Item>
							<NavLink
								to="/posts"
								className="nav-link"
								activeStyle={{
									borderBottom: '2px solid #37474F',
								}}
								exact
							>
								Posts
							</NavLink>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
