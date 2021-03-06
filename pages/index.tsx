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
                <p>π§βπ» Andy Hao</p>
                <p>π© ε¨ζ ε·₯η¨εΈγθͺη±θδΈθ</p>
                <p>βοΈ ζΈζΈδ»£η γη η©ΆδΈζζ―γεεζη« οΌηηζζη΅ε½±</p>
                <p>π¦Ά ζ΄»θ·δΊ<a href="https://juejin.cn/user/2576910984952679">ζι</a>γ<a
                    href="https://github.com/anderlaw">github</a></p>
                <p style={{marginTop: "40px"}}>π <strong>ε¦ζζ¨εζ¬’ζηε·₯δ½οΌε―δ»₯
                    <a href="mailto:974088545@qq.com">θη³»</a>
                    <span>ζζ₯δΈΊζ¨ε·₯δ½γ</span>
                </strong>
                </p>
            </Mainlayout>
        </div>
    )
}

export default Home
