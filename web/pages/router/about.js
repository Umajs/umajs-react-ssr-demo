import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        console.log(this.props.location);

        return (
            <div>
                我是一个路由跳转后的子页面
                <br />
                <div>参数：{JSON.stringify(this.props.location)}</div>
                <Link to="/">回首页</Link>
            </div>
        );
    }
}
