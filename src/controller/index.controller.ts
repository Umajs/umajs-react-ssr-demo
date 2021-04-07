import { BaseController,Path } from '@umajs/core';
import { Result } from '@umajs/plugin-react-ssr'

export default class Index extends BaseController {
    @Path("/")
    index() {
        return Result.reactView('with-react',{say:"hi,I am a ReactView"},{ssrCache:true});
    }
}
