import { IContext } from '@umajs/core';

export type Options = {};

export default async () => async (ctx: IContext, next: Function) => {
    try {
        await next();
    } catch (e) {
        return ctx.react('error', { error: { message: e.message } }, { cache: false });
    }

    const { status } = ctx.response;

    switch (status) {
        case 404:
            ctx.react('error', { error: { message: '没有找到此页面' } }, { cache: true });
            break;
        // etc
        default:
            break;
    }
};
