import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from "../components/Navigation";
import Mainlayout from "../components/Mainlayout";
import Avatar from "../components/Avatar";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navigation/>
            <Mainlayout>
                <Avatar size={150}/>
                <p>🧑‍💻 Andy Hao</p>
                <p>🎩 全栈工程师、自由职业者</p>
                <p>✍️ 撸撸代码、研究下技术、写写文章，看看恐怖电影</p>
                <p>🦶 活跃于<a href="https://juejin.cn/user/2576910984952679">掘金</a>、<a
                    href="https://github.com/anderlaw">github</a></p>
                <p style={{marginTop: "40px"}}>🎉 <strong>如果您喜欢我的工作，可以联系我来为您工作。</strong></p>
            </Mainlayout>
        </div>
    )
}

export default Home
