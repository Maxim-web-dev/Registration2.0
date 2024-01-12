import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
// import { Navigate } from 'react-router-dom'

export default function SignUp() {
	type formType = {
		email: string,
		password: string
	}

	const { 
		register, 
		handleSubmit,
		formState: { errors }
	} = useForm <formType>({
		mode: 'onBlur',
	})
	const onSubmit: SubmitHandler<formType> = (data: object) => {
		axios
			.post('https://65a02bdf7310aa1f8144b77c.mockapi.io/users', {data})
			.catch(console.warn)
			// Navigate('/account')
	}
	return (
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center'>
				<label className='flex flex-col'>
					<p className='text-white'>Email</p>
					<input
						type='email'
						className='bg-[#323232] text-white rounded-[5px]'
						{...register('email', {
							required: 'Поле обязательно для заполнения',
						})}
					/>
					{/* {errors?.email && <p>{errors?.email?.message || 'Error'}</p>} */}
				</label>
				<label className='flex flex-col'>
					<p className='text-white'>Password</p>
					<input
						type='password'
						className='bg-[#323232] text-white rounded-[5px]'
						{...register('password', {
							required: 'Поле обязательно для заполнения',
							minLength: {
								value: 5,
								message: 'Пароль должен состоять минимум из 5 символов'
							}
						})}
					/>
				</label>
				<button type='submit' className='text-white'>Зарегистрироваться</button>
			</form>
	)
}
