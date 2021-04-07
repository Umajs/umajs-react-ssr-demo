import Uma, { TPluginConfig } from '@umajs/core';
import * as path from 'path';

const { ROOT } = Uma.options;

export default <{ [key: string]: TPluginConfig }>{
    'react-ssr': true,
    logger: {
        enable: true,
        options: {
            level: 'ALL', // 日志输出级别
            consoleLevel: 'ALL',
            replaceConsole: false,
            file:null,
            dir: path.resolve(ROOT, './../logs'), // 日志目录
            errorLogName: 'errorlogger.log', // error级别日志文件名
            infoLogName: 'infologger.log', // info级别日志文件名
            warnLogName: 'warnlogger.log', // warn级别日志文件名
            allowDebugAtProd: true, // 是否允许打印debug日志
        },
    },
    static: {
        options: {
            root: './static',
            opts: {
            },
        },
    },
};
