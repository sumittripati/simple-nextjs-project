import Navbar from '../../../../cmp/Navbar/Navbar';
const getPageData = async (pageNo) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pageNo}`);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
};

const Page = async ({ params }) => {
  const data = await getPageData(params.pageNo); // डायनामिक डेटा लाना

  return (
    <div>
      <Navbar />
      <div key={data.id}>
        <h1>{data.id}</h1>
        <h1>{data.title}</h1>
        <h2>{data.body}</h2>
      </div>
    </div>
  );
};

export default Page;
