import { BaseController, Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr';

export default class Home extends BaseController {
    @Path('/home', '/home/:path')
    index() {
        return Result.reactView('home', { msg: '嵌套路由' });
    }

    @Path('/index', '/index/:path')
    index2() {
        return Result.reactView('home', { msg: '嵌套路由' }, { baseName: '/index' });
    }
}
