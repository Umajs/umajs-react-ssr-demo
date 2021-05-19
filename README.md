# 使用
>  此工程依赖[`@umajs/plugin-react-ssr`](https://github.com/Umajs/plugin-react-ssr)插件,插件扩展了`Umajs`中提供的统一返回处理`Result`方法，新增了`reactView`页面组件渲染方法。可在`controller`自由调用,方式类似传统模板引擎使用方法；也同时将方法挂载到了koa中间件中的`ctx`对象上；当一些公关的页面组件，比如404、异常提示页面、登录或者需要在中间件中拦截跳转时可以在`middleware`中调用。

```shell
yarn install
yarn start

```

**更多插件配置和使用方法请查看[`@umajs/plugin-react-ssr`](https://github.com/Umajs/plugin-react-ssr)**