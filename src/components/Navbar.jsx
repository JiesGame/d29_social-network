import { Link } from 'react-router-dom';
import { Logout } from './Logout';

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link to='/'>Home</Link>
      <Link to='login'>Login</Link>
      <Link to='profile'>Profile</Link>
      <Link to='register'>Register</Link>
      <Logout />
    </div>
  )
}
