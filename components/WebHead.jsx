import Head from 'next/head'

const WebHead = ({ title, content}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' rel="stylesheet" />

    </Head>
  )
}

export default WebHead


