import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Air() {
  return (
    <main>
      <h1 className={styles.title}>
        Air Temple
      </h1>
      <Image src="/images/air_temple.png" alt="Air Temple" width={500} height={500} />
    </main>
  )
}