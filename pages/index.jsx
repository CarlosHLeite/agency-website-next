
import Image from 'next/image'
import WebHead from '../components/WebHead'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <WebHead title={"Home"} content={"Home page"} />
      <h1>Hello</h1>
    </div>
  )
}
