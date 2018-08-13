
import {
    postController
} from '../controllers'

import CrudRouter from './crud'

class Post extends CrudRouter {
    constructor() {
        super(postController);
    }
}

let post = new Post();

export default post.router;
