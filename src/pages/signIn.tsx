import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useUserStore } from '../store/user'
import { formType } from '../types/types'
import Form from '../components/form'

export default function SignIn() {
	const navigate = useNavigate()
	const [users, setUsers] = useState<formType[]>([])

	const { setUser } = useUserStore()

	const onSubmit: SubmitHandler<formType> = (data: formType) => {

		async function handleSubmit() {
			try {
				// Получение всех пользователей
				await axios
					.get('https://65a02bdf7310aa1f8144b77c.mockapi.io/users')
					.then(res => setUsers(res.data));
					const email = data.email
					const password = data.password
			
					const isEmailExist: formType | undefined = users.find(
						// Возвращает найденный объект
							item => item.email == email
					)
					const isPasswordExist: formType | undefined = users.find(
						// Возвращает найденный объект
							item => item.password == password
					)
					
					if (isEmailExist && isPasswordExist) {
						setUser(true)
						navigate('/account')
					} else {
						alert('Аккаунт не существует')
					}
			} catch (error) {
				console.error('Ошибка при получении пользователей:', error);
			}
		}
		handleSubmit()
	}
	return <Form onSubmit={onSubmit} type='signin'/>
}