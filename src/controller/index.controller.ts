import { BaseController,Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr'

export default class Index extends BaseController {
    @Path("/")
    index() {
        return Result.reactView('home',{say:"hi,I am a ReactView",title:'hi,umajs-react-ssr'},{cache:true});
    }
    @Path("/home")
    home() {
        return Result.reactView('home',{say:"hi,I am a ReactView"},{cache:true});
    }
    @Path("/error")
    error() {
        return Result.reactView('error',{say:"hi,I am a ReactView"},{cache:true});
    }
    @Path("/redux")
    redux() {
        return Result.reactView('redux',{say:"hi,I am a ReactView"},{cache:true});
    }
    @Path("/browserRouter","/browserRouter/:path")  
    browserRouter() {
        return Result.reactView('browserRouter',{say:"hi,I am a ReactView"},{cache:true});
    }

    @Path("/view")
    koaview() {
        return Result.reactView('home',{say:"hi,I am a ReactView"},{cache:true});
    }
}
