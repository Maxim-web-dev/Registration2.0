// Типы пользователя
	export type userType = {
		user: boolean,
		email: string,
		password: string,
		setUser: (user: boolean) => void,
		emailUpdate: (email: string) => void,
		passwordUpdate: (password: string) => void
	} 

// Тип формы ввода
	export type formType = {
		email: string,
		password: string,
	}
// Типы для состояния формы (sign up or sign in)
	export type formStateType = {
		onSubmit: (data: formType) => void,
		type: string,
	}