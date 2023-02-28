import Head from 'next/head'

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
      <h1>Hello World!</h1>
    </>
  )
}
