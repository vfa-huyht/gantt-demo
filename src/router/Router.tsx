// ** Router imports
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { route } from './routes'
import Middleware from './middleware'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{route.map(item => (
					<Route
						key={item.path}
						path={item.path}
						element={
							<Middleware
								component={item.element}
								layout={item.meta.layout}
								path={item.path as string}
								isAuthen={item.meta.isAuthen}
							/>
						}
					/>
				))}
			</Routes>
		</BrowserRouter>
	)
}

export default Router
