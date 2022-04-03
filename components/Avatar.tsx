import {FC} from "react";

interface IProps {
    size?:number
}

const _Index:FC<IProps> = (props) => {
    const size = props.size || 100
    return <div style={{
        height: size,
        width: size,
        borderRadius: size/2,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow:'hidden',
    }}>
        <img width={size} src="/avatar.jpeg" alt="avatar"/>
    </div>
}
export default _Index