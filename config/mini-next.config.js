module.exports = {
    rootDir:'client',
    logger: true,
    prefixCDN: '/',
    prefixUrl: '',
    ssr: true, // 是否开启服务端渲染
    ssrCache: true, // 是否全局使用服务端渲染缓存 第一次ssr,再次采用缓存，适用与存静态资源或者所有人访问的页面都是一样的工程
    statiPages: [] // 纯静态页面 执行一次服务端渲染，之后采用缓存html
};