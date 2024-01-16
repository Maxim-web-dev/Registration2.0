import { useForm } from 'react-hook-form'
import { formStateType, formType } from '../types/types'
import { Link } from 'react-router-dom'

export default function Form({ onSubmit, type }: formStateType) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<formType>({
		mode: 'onBlur',
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col justify-center items-center'
		>
			<h1 className='text-white'>{type === 'signin' ? 'С возвращением!' : 'Добро пожаловать!'}</h1>
			<label className='flex flex-col'>
				<p className='text-white'>Email</p>
				<input
					type='email'
					className='bg-[#323232] text-white rounded-[5px]'
					{...register('email', {
						required: 'Поле обязательно для заполнения',
					})}
				/>
				{errors?.email && (
					<p className='text-[#ff2525]'>{errors?.email?.message || 'Error'}</p>
				)}
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
				{errors?.password && (
					<p className='text-[#ff2525]'>
						{errors?.password?.message || 'Error'}
					</p>
				)}
			</label>
			<button type='submit' className='text-white'>
				{type === 'signin' ? 'Войти' : 'Зарегистрироваться'}
			</button>
			{
			type === 'signin' ? 
				<Link to='/signup'>У вас нет аккаунта?</Link> 
				: 
				<Link to='/signin'>Уже есть аккаунт?</Link>
			}
		</form>
	)
}
