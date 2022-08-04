import React from 'react'
import Link from 'next/link'
import styles from 'styles/layout/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className='d-flex justify-content-center'>
        <li className='mx-3'>
          <Link href="/">Home Page</Link>
        </li>
        <li className='mx-3'>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
