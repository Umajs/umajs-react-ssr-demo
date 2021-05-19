import '../../common.scss';
import React from 'react';

type typeProps = {
    title:string
}
export default function (props:typeProps) {
    const { title } = props;

    return (
        <div className="demo" style={{ textAlign: 'center' }}>
            <p className='title'>{title }</p>
            <ul>
                <li><a href='/useState'>1.使用useState</a></li>
                <li><a href='/router'>2.使用react-router</a></li>
                <li><a href='/useReducer'>3.使用useReducer</a></li>
                <li><a href='/useTemplate'>4.SEO使用模板引擎</a></li>
                <li><a href='/throwError'>5.在koa中间件中使用</a></li></ul>
            <p className='footer'>
                <a href="https://github.com/Umajs/plugin-react-ssr">@umasj/plugin-react-ssr(点击查看更多用法)</a>
            </p>
        </div>
    );
}
