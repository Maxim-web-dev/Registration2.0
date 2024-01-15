// import axios from 'axios'
import { create } from 'zustand'

type userType = {
	user: boolean
	email: string
	password: string
}
type actionType = {
	emailUpdate: (email: userType['email']) => void
	passwordUpdate: (password: userType['password']) => void
	setUser: (user: userType['user']) => void
}
export const useUserStore = create <userType & actionType> (set => ({
	user: false,
	email: '',
	password: '',
	emailUpdate: email =>
	 {set({ email })},
	 	
	passwordUpdate: 
		password => set(
			() => ({ password: password })
		),
	setUser: 
		user => set(
			// () => ({ user: !user })
			() => ({ user: user })
		),
}))
// data = [
// 	{
// 		'data': {
// 			'email': '',
// 			'password': ''
// 		}
// 	},
// 	{}
// ]
// axios
// 	.get('https://65a02bdf7310aa1f8144b77c.mockapi.io/users')
// 	.then(el => setData(el.data))
