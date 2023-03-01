import Head from 'next/head'
import {HomeContainer} from "@/styles/pages/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jhow.dev</title>
        <meta name="author" content="Jhonata Nogueira" />
        <meta name="creator" content="Jhonata Nogueira" />
        <meta name="title" content="Jhonata | Dev Frontend" />
        {/*<meta*/}
        {/*    name="google-site-verification"*/}
        {/*    content="PxNpBexejv-cXKQHKOtsV1mVMmVjnCRCdIvQcyRlyU0"*/}
        {/*/>*/}
        <meta
            name="description"
            content=""
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jhonatanogueira.com/" />
        <meta property="og:title" content="Projetos Elétricos | ART Elétrica" />
        <meta
            property="og:description"
            content=""
        />
        <meta property="og:image" content="/images/meta.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
            property="twitter:url"
            content="https://www.jhonatanogueira.com/"
        />
        <meta
            property="twitter:title"
            content="Jhonata | Dev Frontend"
        />
        <meta
            property="twitter:description"
            content=""
        />
        {/*<meta property="twitter:image" content="/images/meta.jpg" />*/}
      </Head>
      <HomeContainer backgroundImage="../images/bgHome.svg">
        <div className="grid">
          <section className="home">
            <span>Olá, meu nome é Jhonata 👋</span>
            <h1>Desenvedor front-end,</h1>
            <p>apaixonado por tecnologia e design.</p>
            <button>Download CV</button>
          </section>
        </div>
      </HomeContainer>
    </>
  )
}
