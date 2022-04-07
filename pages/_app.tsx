import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>zebing的个人主页</title>
            <meta name="keywords" content="个人主页,个人博客,前端开发工程师,全栈工程师,自由职业者,给自己打工"/>
            <meta name="description" content="zebing的个人网站,zebing的在线名片,自由职业的zebing"/>
            {/* og tag */}
            {/*<meta property="og:image" content="/"/>*/}
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
