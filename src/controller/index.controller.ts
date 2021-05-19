import { BaseController, Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr';

export default class Index extends BaseController {
    @Path('/', '/index')
    index() {
        return Result.reactView(
            'index',
            { title: '例子' },
            { cache: true },
        );
    }

    @Path('/throwError')
    error() {
        throw new Error('this is error');
    }

    @Path('/useReducer')
    redux() {
        return Result.reactView('useReducer', { time: new Date().getTime() }, { cache: false });
    }

    @Path('/useState')
    hooks() {
        return Result.reactView('useState', { count: new Date().getTime() }, { cache: false });
    }

    @Path('/router', '/router/:path')
    browserRouter() {
        return Result.reactView('router', { msg: 'react-router' }, { cache: true });
    }

    @Path('/useTemplate')
    koaview() {
        return Result.reactView(
            'useTemplate',
            {
                msg: 'This is the useTemplate text！',
                title: 'hi,umajs-react-ssr',
                info: 'This is the useTemplate demo!',
            },
            { cache: true },
        );
    }
}
