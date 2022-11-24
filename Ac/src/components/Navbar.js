import { useNavigate, NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
  const navigate = useNavigate()
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className='primary-nav'>
      {!auth.user ? (
        <>
          <NavLink to='/register' style={navLinkStyles}>
            Register
          </NavLink>
          <NavLink to='/login' style={navLinkStyles}>
            Login
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to='/' style={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to='/about' style={navLinkStyles}>
            About
          </NavLink>
          <NavLink to='/products' style={navLinkStyles}>
            Products
          </NavLink>
          <NavLink to='/profile' style={navLinkStyles}>
            Profile
          </NavLink>
          <button onClick={handleLogout}>Logout - {auth.user} </button>
        </>
      )}
    </nav>
  )
}
