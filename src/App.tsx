import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import SignUp from './pages/signUp'
import Account from './pages/account'
import Error from './error/error'
import Layout from './layout/layout'
import StartPage from './pages/startPage'
import RequireAuth from './hooks/requireAuth'
import SignIn from './pages/signIn'

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />} errorElement={<Error />}>
				<Route index element={<StartPage />} />
				<Route path='account' element={
          <RequireAuth>
            <Account />
          </RequireAuth>
        }>
				</Route>
				<Route path='signup' element={<SignUp />} />
				<Route path='signin' element={<SignIn />} />
			</Route>
		)
	)
	return <RouterProvider router={router} />
}