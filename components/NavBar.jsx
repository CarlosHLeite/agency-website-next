import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>

        <div className={styles.container}>

            <Link href='/' className={styles.logo}>
                <h3 className={styles.textlogo}>Carlos Agency</h3>
            </Link>
        

            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar