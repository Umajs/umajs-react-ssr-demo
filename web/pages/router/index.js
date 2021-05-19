import '../../common.scss';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';

export default class APP extends Component {
    render() {
        return (
            <div className="demo">
                <div>{this.props.msg}</div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/about/:msg" component={About} />
                    <Route component={Home} />
                </Switch>
            </div>
        );
    }
}
