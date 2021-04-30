import * as Koa from 'koa';
import { Uma, IContext } from '@umajs/core';

export type Options = {};

export default (uma: Uma, options: Options = {}): Koa.Middleware => {
    return async(ctx: IContext, next: Function) => {
        try{
            await next()
        }catch(e){
            ctx.reactView('error',{msg:e.stack},{cache:false})
        }
    };
};
