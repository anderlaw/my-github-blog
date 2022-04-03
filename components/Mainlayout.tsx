import {FC} from "react";

interface IProps {
    textAlign?:'center'|'left'|'right'
}
const _Index: FC<IProps> = (props) => {
    return <div style={{textAlign: props.textAlign||'center', paddingTop: '80px'}}>
        {props.children}
    </div>
}
export default _Index