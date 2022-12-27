import Head from 'next/head';
import Image from 'next/image';
import Resiliency from 'components/resiliency';
import Robocalls from 'components/robocalls';



//GATSBY_BASE_URL
export default function Home() {
  console.log(process.env);
  return (
    <>
      {process.env.GATSBY_PAGE === 'RESILIENCY' ? (
        <Resiliency />
      ) : (
        <Robocalls />
      )}
    </>
  )
}
