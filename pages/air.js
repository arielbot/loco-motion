import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Air() {
  return (
    <main>
      <h1 className={styles.title}>
        Air Temple
      </h1>
      <div className={styles.center}>
        <Image src="/gallery/air_temple.png" alt="Air Temple" width={440} height={250} />
        <Link href="/">
          <button className={`${styles.airLink} ${styles.center}`}>Take Me Home</button>
        </Link>
      </div>
    </main>
  )
}