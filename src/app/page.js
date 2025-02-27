// import React from 'react'
// import  Link from 'next/link'

// const page = () => {
//   return (
//     <>
//        <nav>
//          <ul className='menu-bar'>
//           <li><Link href="/cources">COURSE</Link></li>
//           <li><Link href="/blog">BLOG</Link></li>
//           <li><Link href="/contact">CONTACT</Link></li>
//           <li><Link href="/login">LOGIN</Link></li>
//          </ul>
//       </nav>
//     </>
//   )
// }

// export default page

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../cmp/Navbar/Navbar'



const Page = () => {
  return (
    <>
      {/* Head section for SEO and meta tags */}
      <Head>
        <title>Home </title> {/* Title of the page */}
        <meta name="description" content="Welcome to my Next.js app homepage." />
        <meta name="keywords" content="Next.js, React, Web Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      {/* Navbar and Page Content */}
      <Navbar />
      <main>
        <h1>Welcome to the Homepage</h1>
        <p>This is the home page of my Next.js app.</p>
        <Link href="/login">Go to About Page</Link>
      </main>
    </>
  )
}

export default Page;
