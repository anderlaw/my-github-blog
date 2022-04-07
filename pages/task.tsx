import type {NextPage} from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from "../components/Navigation";
import Mainlayout from "../components/Mainlayout";
import {useEffect} from "react";

const tasks: Array<{
    name: string,
    done?: boolean,
    description?: string
}> = [
    {
        name: '开发个人网站',
        done: true,
        description: `(上线地址：${'https://zebing.net'})`
    },
    {
        name: '研究WebRTC并写个本地的Demo',
        done: true,
    },
    {
        name: '部署、测试WebRTC到云端',
        done: false,
    }
]
const DoneIcon = () => {
    return <span>✅ </span>
}
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navigation/>
            <Mainlayout>
                <ul>
                    {
                        tasks.map((item,idx) => {
                            return <li key={idx} style={{marginBottom:'10px'}}>
                                {
                                    item.done && <DoneIcon/>
                                }
                                <span>{item.name}</span>
                                <span>{item.description}</span>
                            </li>
                        })
                    }
                </ul>
            </Mainlayout>
        </div>
    )
}

export default Home
