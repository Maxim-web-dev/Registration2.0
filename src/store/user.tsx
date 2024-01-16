import { create } from 'zustand'
import { userType } from '../types/types'

export const useUserStore = create <userType> (set => ({
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
			() => ({ user: user })
		),
}))
