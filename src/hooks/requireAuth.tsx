import { useUserStore } from '../store/user'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'

export default function RequireAuth({ children} : {children: ReactNode}) {
	
	const { user } = useUserStore()

	// const navigate = useNavigate()

	if (!user) {
		// navigate('/signin')
		// TODO: Узнать, почему ниже работает, а вариант выше - нет
		return <Navigate to='/signin' />
	} 
	
  return children
}
