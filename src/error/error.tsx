import { Link } from 'react-router-dom'

export default function Error() {
  return (
	<div>
	  <h1>Error! Page not found. </h1>
	  <Link to='/'>Go home</Link>
	</div>
  )
}
