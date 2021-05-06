import { BaseController,Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr'

export default class Index extends BaseController {
    @Path("/","/home")
    index() {
        return Result.reactView('home',{say:"hi,I am a ReactView",title:'hi,umajs-react-ssr'},{cache:true});
    }
    @Path("/throwError")
    error() {
        throw('this is error')
    }
    @Path("/useRedux")
    redux() {
        return Result.reactView('redux',{count:100},{cache:true});
    }
    @Path("/browserRouter","/browserRouter/:path")  
    browserRouter() {
        return Result.reactView('browserRouter',{say:"hi,I am a ReactView"},{cache:true});
    }

    @Path("/template")
    koaview() {
        return Result.reactView('template',{msg:"This is the template text！",title:'hi,umajs-react-ssr',info:'This is the template demo!'},{cache:true});
    }
}
