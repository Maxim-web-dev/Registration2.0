import axios from 'axios'
import { useUserStore } from '../store/user'
import { Navigate, useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'

export default function RequireAuth({ children} : {children: ReactNode}) {
	
	axios
		.get('https://65a02bdf7310aa1f8144b77c.mockapi.io/users')
		
	const { user } = useUserStore()

	// const navigate = useNavigate()

	if (!user) {
		// navigate('/signin')
		// TODO: Узнать, почему ниже работает, а вариант выше - нет
		return <Navigate to='/signin' />
	} 
	
  return children
}
