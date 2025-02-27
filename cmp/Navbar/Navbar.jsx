"use client";
import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='menu-bar'>
          <li><Link href="/cources">COURSE</Link></li>
          <li><Link href="/blog">BLOG</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
          <li><Link href="/login">LOGIN</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
