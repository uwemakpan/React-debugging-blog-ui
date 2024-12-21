import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import BlogsPage from '../pages/BlogsPage'
import AuthPage from '../pages/AuthPage'
import SigninForm from '../components/authComponents/SigninForm'
import SignupForm from '../components/authComponents/SignupForm'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/blogs' element={<BlogsPage />} />
      <Route path='/get-started' element={<AuthPage />}>
        <Route path='sign-up' element={<SignupForm />} />
        <Route path='sign-in' element={<SigninForm />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
