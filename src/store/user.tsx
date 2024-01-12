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
const useUserStore = create <userType & actionType> (set => ({
	user: false,
	email: '',
	password: '',
	emailUpdate: 
		email => set(
			() => ({ email: email })
		),
	passwordUpdate: 
		password => set(
			() => ({ password: password })
		),
	setUser: 
		user => set(
			() => ({ user: !user })
		),
}))
