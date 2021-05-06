import './index.scss';
import React from 'react';
type typeProps = {
    say:string
}
export default function (props:typeProps){
     const {say} = props;
    return (
        <div className="ts-demo" style={{textAlign: 'center'}}>
            <br/>
            <br/>
            <p className='title'>{ say }</p>
            <ul>
                <li><a href='/browserRouter'>1.搭配react-router</a></li>
                <li><a href='/useRedux'>2.搭配redux</a></li>
                <li><a href='/throwError'>3.在koa中间件中使用</a></li>
                <li><a href='/template'>4.搭配模板引擎</a></li>
            </ul>
            <p className='footer'>
                <a  href="https://github.com/Umajs/plugin-react-ssr">@umasj/plugin-react-ssr(点击查看更多用法)</a>
            </p>
            
        </div>
    )
}