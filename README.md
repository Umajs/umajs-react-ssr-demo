# `plugin-react-ssr`
> plugin-react-ssr是基于mini-next框架进行封装，支持React服务端渲染的模板引擎插件。

# 特性
- 支持多应用工程，各个页面构建bundle单独打包
- 不默认路由，路由通过controller调用reactView模板引擎渲染
- 提供原始React+webpack原始配置语法
- 支持getInitProps钩子函数和服务端传递Props两种预数据处理方式
- 轻量级，客户端不依赖任何框架API
- 支持SSR,CSR两种渲染模式
- 服务端渲染异常降级客户端渲染

# 使用
- 插件集成
plugin.config.ts
``` 
    import Uma, { TPluginConfig } from '@umajs/core';
    export default <{ [key: string]: TPluginConfig }>{
        'react-ssr': true,
    };

```

- 创建react页面组件
```
   - client # rootDir配置可修改
        - pages # 固定目录
            - with-react #页面名称 
                - with-react.js #页面入口文件(需要和页面名称一致)
                - with-react.scss
```

```jsx
import './with-react.scss';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {say} = this.props;
        return (
            <div className="demo">
               {say}
            </div>
        );
    }
}
module.exports = App;
```


- .babelrc配置
> 应用配置依赖babel编译，babel插件和配置可按需开启和新增

```
{
    "presets":["@babel/react",[
      "@babel/env",
      {
        "targets": {
          "browsers": ["last 2 versions", "ie >= 7"]
        }
      }
    ],
    "@babel/preset-typescript"
    ],
    "plugins": [
      [
        "@babel/plugin-transform-runtime",
        { "helpers": false, "regenerator": true }
      ],
      "@babel/plugin-transform-modules-commonjs",
      "@babel/plugin-proposal-class-properties"
    ]
}

```

- 集成到uma路由中
```ts

import { BaseController,Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr'

export default class Index extends BaseController {
    @Path("/")
    index() {
        return Result.reactView('with-react',{say:"hi,I am a ReactView"},{ssrCache:true});
    }
}


```


# 插件配置
> 插件在初始化时会自动扫描config/mini-next.config.js配置文件
```
module.exports = {
    rootDir:'client',
    logger: true,
    prefixCDN: '/',
    ssr: true, // 是否开启服务端渲染
    ssrCache: false, // 全局使用服务端渲染缓存,动态渲染时关闭
    statiPages: [] // 纯静态页面,执行一次服务端渲染，之后采用缓存html,所有人访问资源不变
};

```