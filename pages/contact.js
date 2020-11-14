import Header from '../components/header'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

function Contact() {
    return (
        <>
            <Layout home>
                <Header/>
                <section className={utilStyles.headingMd}>
                    <div>Contact page</div>
                    <Link href="/">Return to home</Link>
                </section>
            </Layout>
        </>
    )
}

export default Contact