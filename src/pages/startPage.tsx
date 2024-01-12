import { Link } from 'react-router-dom'

export default function StartPage() {
	return (
		<div className='flex flex-col justify-center items-center text-white m-[50px]'>
			<h1>START PAGE</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis
				ea, consequatur libero accusantium, neque quisquam, reprehenderit
				officia quam illum excepturi reiciendis officiis molestiae distinctio
				suscipit! Fugiat veniam dolor nihil.
			</p>
			<Link to='/account'>Account</Link>
		</div>
	)
}
