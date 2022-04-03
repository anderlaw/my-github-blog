import Link from 'next/link'

const _Index = () => {
    return <ul style={{
        margin: 0,
        height: "60px",
        fontSize: '17px',
        display: "flex",
        alignItems: 'center',
        gap: "20px"
    }}>
        <li>
            <Link href="/"><a>关于</a></Link>
        </li>
        <li>
            <Link href="/task"><a>工作清单</a></Link>
        </li>
    </ul>
}
export default _Index