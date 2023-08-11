import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {

  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove('token');
    navigate('login');
  }
  return (
    <button onClick={logout}>Logout</button>
  )
}
