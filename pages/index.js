import Header from '../components/header'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Header/>
      <section className={utilStyles.headingMd}>
        <p>A Brazilian working and living in Estonia</p>
        <p>
          This is a sample website - created using <Link href="https://nextjs.org/learn">Next JS </Link>
          and deployed on <Link href="https://vercel.com/docs">Vercel</Link>: <Link href="https://learning-next-js-blue.vercel.app/">learning-next-js-blue.vercel.app</Link>
        </p>
        <Link href="/contact">Go to Contact</Link>
      </section>
    </Layout>
  )
}