import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SignUp from './pages/signUp'
import Account from './pages/account'
import Error from './error/error'
import Layout from './layout/layout'
import StartPage from './pages/startPage'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} errorElement = {<Error />}>
        <Route index element={<StartPage />}/>
        <Route path='account' element = {<Account />} />
        <Route path='signup' element = {<SignUp />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
