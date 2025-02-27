// import  Link from 'next/link'
// // import  {useRouter}  from 'next/router'
// import { useRouter } from 'next/navigation';

// export default function NotFound() {
       
//   return (
//     <>
//       <nav>
//          <ul className='menu-bar'>
//           <li><Link href="/cources">COURSE</Link></li>
//           <li><Link href="/blog">BLOG</Link></li>
//           <li><Link href="/contact">CONTACT</Link></li>
//           <li><Link href="/login">LOGIN</Link></li>
//          </ul>
//       </nav>
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>404 - Page Not Found</h1>
//       <p>Oops! The page you're looking for doesn't exist.</p>
//     </div>
//     {/* <button><Link href="/">Home</Link></button> */}
//     <button onClick={()=> router.push("/")}>Go back</button>
//     </>
//   );
// }



// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// export default function NotFound() {
//   const router = useRouter();

//   const handleBtn = () => {
//     router.push("/");
//   }

//   return (
//     <>
//       {/* Navigation Menu */}
//       <nav>
//         <ul className='menu-bar'>
//           <li><Link href="/cources">COURSE</Link></li>
//           <li><Link href="/blog">BLOG</Link></li>
//           <li><Link href="/contact">CONTACT</Link></li>
//           <li><Link href="/login">LOGIN</Link></li>
//         </ul>
//       </nav>

//       {/* 404 Message */}
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>404 - Page Not Found</h1>
//         <p>Oops! The page you're looking for doesn't exist.</p>
//       </div>

//       {/* Button to Navigate Back */}
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         {/* <button onClick={()=> router.push("/")}>Go back</button> */}
//         <button onClick={handleBtn}>Go back</button>
//       </div>
//     </>
//   );
// }



// useEffect using


// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// export default function NotFound() {
//   const router = useRouter();

//   const handleBtn = () => {
//     router.push("/");
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push("/");
//     }, 3000);

//     return () => clearTimeout(timer); // Cleanup timeout when the component unmounts
//   }, [router]);

//   return (
//     <>
//       {/* Navigation Menu */}
//       <nav>
//         <ul className='menu-bar'>
//           <li><Link href="/cources">COURSE</Link></li>
//           <li><Link href="/blog">BLOG</Link></li>
//           <li><Link href="/contact">CONTACT</Link></li>
//           <li><Link href="/login">LOGIN</Link></li>
//         </ul>
//       </nav>

//       {/* 404 Message */}
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>404 - Page Not Found</h1>
//         <p>Oops! The page you're looking for doesn't exist.</p>
//         <p>Redirecting to Home in 3 seconds...</p>
//       </div>

//       {/* Button to Navigate Back */}
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button onClick={handleBtn} style={{
//           padding: "10px 20px",
//           fontSize: "16px",
//           background: "#0070f3",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer"
//         }}>
//           Go Back Home
//         </button>
//       </div>
//     </>
//   );
// }




"use client";
 import Navbar from '../../cmp/Navbar/Navbar';



import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout when the component unmounts
  }, [router]);

  return (
    <>
      {/* Navigation Menu */}
      <Navbar/>

      {/* 404 Message */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p>Redirecting to Home in 3 seconds...</p>
      </div>

      {/* Button to Navigate Back */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleBtn} style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Go Back Home
        </button>
      </div>
    </>
  );
}
