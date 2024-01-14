import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { useUserStore } from '../store/user'

export default function SignIn() {
	type formType = {
		email: string
		password: string
	}
	type userType = {
		email: string
		password: string
	}
	const { 
		register, 
		handleSubmit
	} = useForm<formType>({
		mode: 'onBlur',
	})
	const navigate = useNavigate()
	const [users, setUsers] = useState<userType[]>([])

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
			
					const isEmailExist: userType | undefined = users.find(
						// Возвращает найденный объект
							item => item.email == email
					)
					const isPasswordExist: userType | undefined = users.find(
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
	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col justify-center items-center'
			>
				<h1 className='text-white'>С возвращением!</h1>
				<label className='flex flex-col'>
					<p className='text-white'>Email</p>
					<input
						type='email'
						className='bg-[#323232] text-white rounded-[5px]'
						{...register('email', {
							required: 'Поле обязательно для заполнения',
						})}
					/>
				</label>
				<label className='flex flex-col'>
					<p className='text-white'>Пароль</p>
					<input
						type='password'
						className='bg-[#323232] text-white rounded-[5px]'
						{...register('password', {
							required: 'Поле обязательно для заполнения',
							minLength: {
								value: 5,
								message: 'Пароль должен состоять минимум из 5 символов',
							},
						})}
					/>
				</label>
				<button type='submit' className='text-white'>
					Войти
				</button>
				<Link to='/signup'>У вас нет аккаунта?</Link>
			</form>
		</div>
	)
}
