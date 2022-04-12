import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <>
    <NavBar />
    {children}
    <Footer />
    </>
  )
}

export default Layout