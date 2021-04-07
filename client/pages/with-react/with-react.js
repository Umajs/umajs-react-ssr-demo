//test
'use strict';
//引入样式文件
import './with-react.scss';
//引入组件
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {say} = this.props;
        return (
            <div className="demo">
                <span>
                    <img src={require('images/with-react/addressIcon.jpg')} />
                </span>
               {say}
            </div>
        );
    }
}
module.exports = App;
