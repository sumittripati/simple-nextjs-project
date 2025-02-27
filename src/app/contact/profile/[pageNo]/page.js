// import React from 'react'
// import { useRouter } from 'next/router'
// const pageNo = () => {
//     const router = useRouter()
//     const pageNumber = router.query.pageNumber
//   return (
//     <div>
//        <h1>hello this this is a page {pageNumber}</h1>
//     </div>
//   )
// }

// export default pageNo


// export default function PageNo({ params }) {
//     return (
//       <div>
//         <h1>Hello, this is a page {params.pageNo}</h1>
//       </div>
//     );
//   }


export default function PageNo() {
  return (
    <div>
      <h1>Hello, this is a dynamic page</h1>
    </div>
  );
}

  