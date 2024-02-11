import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>News</h1>
      <ul>
        <li>
        <Link href='/news/greatframrwork'>Next js is a great framework</Link></li>
        <li>Soemthing else</li>
      </ul>
    </>
  );
};

export default NewsPage;
