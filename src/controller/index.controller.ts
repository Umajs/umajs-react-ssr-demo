import { BaseController, Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr';

export default class Index extends BaseController {
    @Path('/', '/home')
    index() {
        return Result.reactView(
            'home',
            {title: '例子' },
            { cache: true },
        );
    }

    @Path('/throwError')
    error() {
        throw new Error('this is error');
    }

    @Path('/redux')
    redux() {
        return Result.reactView('redux', { time: new Date().getTime() }, { cache: false });
    }

    @Path('/hooks')
    hooks() {
        return Result.reactView('hooks', { count: new Date().getTime() }, { cache: false });
    }

    @Path('/router', '/router/:path')
    browserRouter() {
        return Result.reactView('router', { msg: 'react-router' }, { cache: true });
    }

    @Path('/seo')
    koaview() {
        return Result.reactView(
            'seo',
            {
                msg: 'This is the seo text！',
                title: 'hi,umajs-react-ssr',
                info: 'This is the seo demo!',
            },
            { cache: true },
        );
    }
}
