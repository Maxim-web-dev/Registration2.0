import axios from 'axios'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/user'
import Form from '../components/form'
import { formType } from '../types/types'

export default function SignUp() {
	const { setUser } = useUserStore()
	const { emailUpdate } = useUserStore()
	const { passwordUpdate } = useUserStore()

	const navigate = useNavigate()

	const onSubmit: SubmitHandler<formType> = (data: formType) => {
		// Отправка пользователя на сервер
		axios
			.post('https://65a02bdf7310aa1f8144b77c.mockapi.io/users', {
				email: data.email,
				password: data.password,
			})
			.then(res => console.log(res.data))
			.catch(console.warn)

		// Обновление состояния пользователя в store
		setUser(true)
		emailUpdate(data.email)
		passwordUpdate(data.password)

		// Навигация на страницу аккаунта
		navigate('/account')
	}
	return <Form onSubmit={onSubmit} type='signup' />
}
