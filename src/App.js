import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import './App.css'

import Header from './layouts/Header'
import Wrapper from './layouts/Wrapper'
import Posts from './pages/posts/Posts'
import PostDetails from './pages/post-details/PostDetails'
import NotFound from './pages/NotFound'

function App() {
	return (
		<Router>
			<Header />

			<Wrapper>
				<Switch>
					<Route exact path={'/posts/:postId'}>
						<PostDetails />
					</Route>

					<Route exact path={'/posts'}>
						<Posts />
					</Route>

					<Route
						exact
						path={'/'}
						render={() => <Redirect to="/posts" />}
					/>

					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Wrapper>
		</Router>
	)
}

export default App
