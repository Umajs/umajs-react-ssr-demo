import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.goAboutPage = this.goAboutPage.bind(this);
    }

    goAboutPage() {
        this.props.history.push({
            pathname: '/about',
            state: {
                msg: '来自首页的问候！by state',
            },
        });
    }

    render() {
        return (
            <div>
                我是首页路由
                <br />
                <Link to="/about?msg='我是url参数'">去关于我的页面 url传递参数</Link>
                <br />
                <Link to="/about/我是url参数">去关于我的页面 路由配置传递参数</Link>
                <div onClick={this.goAboutPage}>去关于我的页面 js方式state传递参数</div>
            </div>
        );
    }
}
