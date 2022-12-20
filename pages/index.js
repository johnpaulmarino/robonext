import Head from 'next/head';
import Image from 'next/image';
import Resiliency from 'components/resiliency';
import Robocalls from 'components/robocalls';

import 'styles/index.css';


export default function Home() {
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
