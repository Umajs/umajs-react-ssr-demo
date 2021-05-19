import { BaseController, Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr';

export default class Index extends BaseController {
    @Path('/list')
    index() {
        const ListData = ['itme1', 'itme2', 'itme3', 'itme4', 'itme5', 'itme6', 'itme7', 'itme8'];

        return Result.reactView('todoList', { title: '列表', ListData }, { cache: false });
    }
}
