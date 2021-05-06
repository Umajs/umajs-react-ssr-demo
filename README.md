# 使用
>  此工程依赖[`@umajs/plugin-react-ssr`](https://github.com/Umajs/plugin-react-ssr)插件,插件扩展了`Umajs`中提供的统一返回处理`Result`方法，新增了`reactView`页面组件渲染方法。可在`controller`自由调用,方式类似传统模板引擎使用方法；也同时将方法挂载到了koa中间件中的`ctx`对象上；当一些公关的页面组件，比如404、异常提示页面、登录或者需要在中间件中拦截跳转时可以在`middleware`中调用。

- **controller**中使用

```ts

import { BaseController,Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr'

export default class Index extends BaseController {
    @Path("/")
    index() {
        return Result.reactView('home',{say:"hi,I am a ReactView"},{cache:true});
    }
}
```

- **middleware**中使用
> 对于中间件的使用，引入顺序需要在插件之后。
```js
async(ctx,next)=>{
    try{
        await next()
    }catch(e){
        return ctx.reactView('error',{msg:e.stack},{cache:false})
    }
}
```

- **browserRouter**使用
> 在页面组件中使用react-router时，只能在controller中使用，切需要服务端对路由做支持。框架默认集成了BrowserRouter，无需开发者在页面组件中引入
```js
// 页面组件 client/browserRouter/index.js 
export default class APP extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/about/:msg" component={About} />
                <Route component={Home} />
            </Switch>
        );
    }
}

// 服务端路由 前后端路由规则必须保持一致
@Path("/browserRouter","/browserRouter/:path")  
browserRouter() {
    return Result.reactView('browserRouter',{say:"hi,I am a ReactView"},{cache:true});
}
```

# 部署
> 在部署生产环境之前，需要提前编译好客户端bundle文件，否则线上首次访问时会耗时比较长，影响用户体验。编译脚本命令为`npx mininext build true`
```
"scripts": {
    "dev": "ts-node-dev --respawn src/app.ts",
    "build": "tsc && npx mininext build true",
    "prepublish": "npm run build",
    "prod": "node app/app.js --production"
  },

```


**更多插件配置和使用方法请查看[`@umajs/plugin-react-ssr`](https://github.com/Umajs/plugin-react-ssr)**